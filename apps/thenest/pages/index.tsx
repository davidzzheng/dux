import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";

import ParentSize from "@visx/responsive/lib/components/ParentSize";

import { IDashboard } from "./api/dashboard";
import { MarketChart } from "../components/MarketChart";
import { useStore } from "../contexts/AppContext";

export const Home = () => {
  const { account } = useStore();
  const { connected } = useWallet();

  const { data: dashboard } = useSWR<IDashboard>("api/dashboard", {
    refreshInterval: 60000,
  });

  const dollarBalance =
    account?.parsed?.info.tokenAmount.uiAmount *
    +dashboard?.index *
    +dashboard?.price;
  const inBalance =
    account?.parsed?.info.tokenAmount.uiAmount * +dashboard?.index;

  const approxDailyIncome =
    dollarBalance * ((+dashboard?.apy / 100) ** (1 / 365) - 1);

  return (
    <div className="max-w-7xl mx-auto pb-12 px-4">
      <div className="mb-16">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Price (Backed Price)
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {dashboard ? (
                <>
                  <span className="text-gray-500 text-2xl">$ </span>
                  {(+dashboard.price).toLocaleString()}
                  <span className="text-gray-500 text-2xl">{` / ${(+dashboard.backedPrice).toLocaleString()}`}</span>
                </>
              ) : (
                <div className="loadable loading w-full h-9" />
              )}
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Treasury
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 truncate">
              {dashboard ? (
                <>
                  <span className="text-gray-500 text-2xl">$ </span>{" "}
                  {(+dashboard.treasury).toLocaleString()}
                </>
              ) : (
                <div className="loadable loading w-full h-9" />
              )}
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Current APY
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 truncate">
              {dashboard ? (
                <>
                  {(+dashboard?.apy).toLocaleString()}{" "}
                  <span className="text-gray-500 text-2xl">%</span>
                </>
              ) : (
                <div className="loadable loading w-full h-9" />
              )}
            </dd>
          </div>
        </dl>
      </div>
      <div className="w-full h-[420px] bg-white rounded-lg shadow">
        <ParentSize>
          {({ width }) => <MarketChart width={width} height={500} />}
        </ParentSize>
      </div>

      {connected && (
        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Balance
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 truncate">
                {account ? (
                  <>
                    <span className="text-gray-500 text-2xl">$IN </span>
                    {inBalance.toLocaleString()}
                  </>
                ) : (
                  <div className="loadable loading w-full h-9" />
                )}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Dollar Balance
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 truncate">
                {account ? (
                  <>
                    <span className="text-gray-500 text-2xl">$ </span>{" "}
                    {dollarBalance.toLocaleString()}
                  </>
                ) : (
                  <div className="loadable loading w-full h-9" />
                )}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Approx. Daily Income
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 truncate">
                {account && dashboard ? (
                  <>
                    <span className="text-gray-500 text-2xl">$ </span>{" "}
                    {approxDailyIncome.toLocaleString()}{" "}
                    <span className="text-gray-500 text-2xl">
                      / $IN{" "}
                      {(approxDailyIncome / +dashboard?.price).toLocaleString()}
                    </span>
                  </>
                ) : (
                  <div className="loadable loading w-full h-9" />
                )}
              </dd>
            </div>
          </dl>
        </div>
      )}

      {/* {transactions.map((tx) => (
              <div>{JSON.stringify(tx)}</div>
            ))} */}
    </div>
  );
};

export default Home;
