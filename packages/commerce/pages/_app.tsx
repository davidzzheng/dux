import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { SWRConfig } from "swr";

import "../styles/base.css";
import { useMemo } from "react";

const WalletProvider = dynamic(() => import("../contexts/MyWalletProvider"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const ep = useMemo(
    () =>
      // `https://connect.runnode.com/?apikey=${process.env.NEXT_PUBLIC_RUNNODE_KEY}`,
      "https://api.mainnet-beta.solana.com",
    []
  );
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ConnectionProvider endpoint={ep}>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </ConnectionProvider>
    </SWRConfig>
  );
}

export default MyApp;
