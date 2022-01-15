import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { IFilter } from "../../types";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const attrs = await prisma.attribute.findMany();

  const filters = attrs.reduce<IFilter>((acc, { trait_type, value }) => {
    if (!acc[trait_type]) {
      return { ...acc, [trait_type]: [value] };
    } else if (acc[trait_type].indexOf(value) < 0) {
      return { ...acc, [trait_type]: [...acc[trait_type], value] };
    }
    return acc;
  }, {});

  res.json(filters);
}
