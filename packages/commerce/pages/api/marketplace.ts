import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { IToken } from "../../types";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<IToken[]>
) {
  const data = await prisma.token.findMany({
    take: 20,
    // where: {
    //   content: { OR: [selectedFilters] },
    // },
    include: {
      content: { include: { attributes: true } },
    },
  });

  res.json(data);
}
