import React, { Fragment, useEffect, useState } from "react";
import cn from "classnames";
import { useWallet } from "@solana/wallet-adapter-react";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, CogIcon } from "@heroicons/react/solid";

export interface ConnectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  allowWalletChange?: boolean;
}

export const ConnectButton = () => {
  const { connect, select, wallets, connected, connecting, disconnect } =
    useWallet();
  const [selected, setSelected] = useState(wallets[0]);

  const connectToWallet = async () => {
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }
  };

  const disconnectFromWallet = async () => {
    try {
      await disconnect();
    } catch {
    } finally {
      setSelected({ ...selected });
    }
  };

  useEffect(() => {
    select(selected.name);
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <span className="relative">
        <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
          <div className="relative z-0 inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
            <button
              onClick={connected ? disconnectFromWallet : connectToWallet}
              className={cn(
                "relative inline-flex items-center py-2 pl-3 pr-4 w-36 rounded-md  text-white bg-indigo-500 border border-transparent shadow-sm",
                "hover:bg-indigo-600",
                "focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              )}
              disabled={connecting}
            >
              {connecting ? (
                <CogIcon className="w-5 h-5 animate-spin" aria-hidden="true" />
              ) : (
                <img src={selected.icon} className="w-5 h-5" />
              )}
              <p className="ml-2 text-sm font-medium">
                {connected
                  ? "Disconnect"
                  : connecting
                  ? "Connecting"
                  : "Connect"}
              </p>
            </button>
            {!connected && !connecting && (
              <Listbox.Button className="absolute z-10 inline-flex items-center p-2 text-sm font-medium text-white bg-indigo-500 rounded-l-none right-px top-px rounded-r-md hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                <ChevronDownIcon
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                />
              </Listbox.Button>
            )}
          </div>
        </div>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 z-10 mt-2 overflow-hidden origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            {wallets.map((w) => (
              <Listbox.Option
                key={w.name}
                className={({ active }) =>
                  cn(
                    active ? "text-white bg-indigo-500" : "text-gray-900",
                    "cursor-pointer select-none relative p-4 text-sm"
                  )
                }
                value={w}
              >
                {({ selected, active }) => (
                  <div className="flex flex-col">
                    <span className="flex justify-between">
                      <span className="flex">
                        <img src={w.icon} className="w-5 h-5" />
                        <p
                          className={cn(
                            selected ? "font-semibold" : "font-normal",
                            "pl-2"
                          )}
                        >
                          {w.name}
                        </p>
                      </span>
                      {selected ? (
                        <span
                          className={active ? "text-white" : "text-indigo-500"}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </span>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </span>
    </Listbox>
  );
};
