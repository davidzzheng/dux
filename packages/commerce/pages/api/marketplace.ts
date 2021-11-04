import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { IToken } from "../../types";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<IToken[]>
) {
  // const selectedFilters = Object.fromEntries(req.body.filters).map(
  //   ([filter, selectedOptions]) =>
  //     selectedOptions.map((opt) => ({ trait_type: filter, value: opt }))
  // );

  const data = await prisma.token.findMany({
    take: 20,
    // where: {
    //   content: { AND: {  attributes: { some: selectedFilters }} },
    // },
    include: {
      content: {
        include: { attributes: true },
      },
    },
  });

  res.json(data);
}
