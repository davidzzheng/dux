import { useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { ConnectButton } from "../components/ConnectButton";
import { PublicKey } from "@solana/web3.js";

function Homepage() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  useEffect(() => {
    (async () => {
      if (publicKey) {
        try {
        } catch {}
      }
    })();
  }, [publicKey, connection]);

  return (
    <div className="max-w-2xl mx-auto bg-white">
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="h-screen px-4 py-5 sm:p-6">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
