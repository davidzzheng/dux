import type { NextApiRequest, NextApiResponse } from "next";
import qs from "query-string";

import whales from "../../utils/whales.json";

export interface IWhales {
  data: RankedAccount[];
  total: number;
}

export interface RankedAccount {
  address?: string;
  amount: number;
  decimals: number;
  owner: string;
  rank?: number;
  owned?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWhales>
) {
  // const { offset = 0, limit = 25 } = req.query;
  // const uri = qs.stringifyUrl({
  //   url: "https://public-api.solscan.io/token/holders",
  //   query: { tokenAddress: process.env.NEXT_PUBLIC_SIN_ADDRESS, offset, limit },
  // });
  // const response = await fetch(uri);

  res.status(200).json(whales);
}
