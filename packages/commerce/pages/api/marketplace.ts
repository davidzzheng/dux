import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { IToken } from "../../types";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<IToken[]>
) {
  req.query;
  const data = await prisma.token.findMany({
    take: 12,
    // where: {
    //   content: {
    //     attributes: { some: { value: { in: req.body. }, AND: { } } },
    //   },
    // },
    include: {
      content: {
        include: { attributes: true },
      },
    },
  });

  res.json(data);
}
