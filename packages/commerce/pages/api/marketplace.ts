import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { Token } from "../../types/Token";

interface MarketplaceResponse {}

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Token[]>
) {
  const data = await prisma.token.findMany({
    take: 12,
    include: { content: { include: { attributes: true } } },
  });
  // const attrs = await prisma.attribute.aggregate({ where: {} });

  res.json(data);
}
