import type { NextApiRequest, NextApiResponse } from "next";

export interface IDashboard {
  apy: string;
  backedPrice: string;
  fiveDayRoi: string;
  index: string;
  marketCap: string;
  price: string;
  rewardRate: string;
  runway: string;
  stakedPercent: string;
  supply: string;
  treasury: string;
  tvl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDashboard>
) {
  const dashboard = await fetch("https://api.invictusdao.fi/api/dashboard");
  res.status(200).json(await dashboard.json());
}
