import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PublicKey } from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import cn from "classnames";
import { ConnectButton } from "./ConnectButton";
import { batchTransactions, calculateTxChange } from "../utils/transaction";
import { useStore } from "../contexts/AppContext";

const navigation = [
  { name: "Dashboard", href: "/" },
  // { name: "Calculator", href: "/calculator" },
  // { name: "Transactions", href: "/transactions" },
  { name: "Whale Watch", href: "/whale-watch" },
];

export const AppShell = ({ children, ...props }) => {
  const { asPath } = useRouter();

  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();

  const { setAccount, setTransactions } = useStore();

  useEffect(() => {
    (async () => {
      if (connected) {
        // TODO: switch to `connection.getTokenAccountBalance`
        const wsInAcc = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          {
            mint: new PublicKey(process.env.NEXT_PUBLIC_SIN_ADDRESS),
          }
        );
        setAccount(wsInAcc.value[0].account.data);

        const inAcc = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          { mint: new PublicKey(process.env.NEXT_PUBLIC_IN_ADDRESS) }
        );

        const txSigs = await connection.getSignaturesForAddress(
          inAcc.value[0].pubkey
        );

        const txs = (
          await Promise.all(
            batchTransactions(txSigs).map((txBatch) =>
              connection.getParsedConfirmedTransactions(
                txBatch.map((tx) => tx.signature)
              )
            )
          )
        ).flat();
        const txChanges = txs.map((tx) => calculateTxChange(tx));

        setTransactions(txChanges);
      } else {
        setAccount({});
      }
    })();
  }, [connected, connection, publicKey, setAccount, setTransactions]);

  return (
    <div className="min-h-full">
      <div className="bg-gray-800 pb-48">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="border-b border-gray-700">
            <div className="flex items-center justify-between h-16 px-4 sm:px-0">
              <div className="flex items-center">
                <div className="text-white text-5xl">(◎,◎)</div>
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={cn(
                          item.href === asPath
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.href === asPath ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <ConnectButton />
              </div>
            </div>
          </div>
        </div>
        {/* 
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
        </header> */}
      </div>
      <main className="-mt-40">{children}</main>
    </div>
  );
};
