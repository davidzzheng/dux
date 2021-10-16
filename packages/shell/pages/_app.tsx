import { useMemo } from "react";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";

import "../styles/base.css";

const WalletProvider = dynamic(() => import("../contexts/MyWalletProvider"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(
    () => clusterApiUrl(WalletAdapterNetwork.Mainnet),
    []
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
