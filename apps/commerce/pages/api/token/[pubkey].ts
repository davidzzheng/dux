import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { IToken } from "../../../types/Token";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<IToken>
) {
  const { pubkey } = req.query;
  const data = await prisma.token.findUnique({
    where: { pubkey: pubkey as string },
    include: { content: { include: { attributes: true } } },
  });

  if (data) {
    res.json(data);
  }
}
