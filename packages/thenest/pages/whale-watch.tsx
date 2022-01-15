import { useState } from "react";
import useSWR from "swr";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import WhaleChart from "../components/WhaleChart";
import { IWhales, RankedAccount } from "./api/whales";
import { useStore } from "../contexts/AppContext";
import { useEffect } from "react";

export const WhaleWatch = () => {
  const { data: whales = { data: [], total: 0 } } =
    useSWR<IWhales>("/api/whales");
  const { data, total } = whales;
  const [accounts, setAccounts] = useState<RankedAccount[]>(data);
  const { account } = useStore();
  const { parsed } = account;

  useEffect(() => {
    // if (accounts.length === 0) {
    //   setAccounts(data);
    // }
    if (parsed) {
      if (accounts.findIndex((w) => w.owner === parsed.info.owner) < 0) {
        setAccounts((ws) => [
          ...ws,
          {
            amount: +parsed.info.tokenAmount.amount,
            decimals: parsed.info.tokenAmount.decimals,
            owner: parsed.info.owner,
            owned: true,
          },
        ]);
      }
    } else {
      setAccounts(data);
    }
  }, [data, parsed, accounts]);

  return (
    <div className="max-w-7xl mx-auto pb-12 px-4">
      <div>🐋</div>
      {data.length > 0 && (
        <div className="w-full h-[720px] bg-white rounded-lg shadow">
          <ParentSize>
            {({ width }) => (
              <WhaleChart data={accounts} width={width} height={720} />
            )}
          </ParentSize>
        </div>
      )}
    </div>
  );
};

export default WhaleWatch;
