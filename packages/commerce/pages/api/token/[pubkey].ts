import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { Token } from "../../../types/Token";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Token>
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
