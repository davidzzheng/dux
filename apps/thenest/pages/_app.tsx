import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { SWRConfig } from "swr";

import "../styles/base.css";
import { useMemo } from "react";
import { AppShell } from "../components/AppShell";

const WalletProvider = dynamic(() => import("../contexts/MyWalletProvider"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const ep = useMemo(() => "https://ssc-dao.genesysgo.net", []);
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ConnectionProvider endpoint={ep}>
        <WalletProvider>
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </WalletProvider>
      </ConnectionProvider>
    </SWRConfig>
  );
}

export default MyApp;
