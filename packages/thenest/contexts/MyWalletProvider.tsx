import { useMemo } from "react";

import { WalletProvider } from "@solana/wallet-adapter-react";

import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

function MyWalletProvider(props: { children: any; [key: string]: any }) {
  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );

  return <WalletProvider wallets={wallets} {...props} />;
}

export default MyWalletProvider;
