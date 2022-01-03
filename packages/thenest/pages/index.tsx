import { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import useSWR from "swr";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import cn from "classnames";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import { ConnectButton } from "../components/ConnectButton";
import { IDashboard } from "./api/dashboard";
import { MarketChart } from "../components/MarketChart";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calculator", href: "#", current: false },
  { name: "Transactions", href: "#", current: false },
  { name: "Whale Watch", href: "#", current: false },
];

export const Home = () => {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  useEffect(() => {
    if (connected) {
      connection
        .getParsedTokenAccountsByOwner(publicKey, {
          mint: new PublicKey("sinjBMHhAuvywW3o87uXHswuRXb3c7TfqgAdocedtDj"),
        })
        .then((s) => console.log(s.value[0].account.data));
    }
  }, [connected, connection, publicKey]);

  const {
    data: dashboard,
    error,
    mutate,
  } = useSWR<IDashboard>("api/dashboard", {
    refreshInterval: 60000,
  });

  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                          />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                  item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "px-3 py-2 rounded-md text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <ConnectButton />
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MenuIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                  <div className="px-2 py-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={cn(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            </div>
          </header>
        </div>

        <main className="-mt-40">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Price
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900 truncate">
                    {dashboard ? (
                      <>
                        <span className="text-gray-500 text-2xl">$ </span>
                        {(+dashboard.price).toLocaleString()}
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
            <div className="w-full h-96">
              <ParentSize>
                {({ height, width }) => (
                  <MarketChart width={width} height={height} />
                )}
              </ParentSize>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
