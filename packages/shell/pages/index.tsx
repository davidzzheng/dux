import { useEffect, useMemo } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import BufferLayout from "buffer-layout";

const ACCOUNT_LAYOUT = BufferLayout.struct([
  BufferLayout.blob(32, "mint"),
  BufferLayout.blob(32, "owner"),
  BufferLayout.nu64("amount"),
  BufferLayout.blob(93),
]);

import { ConnectButton } from "../components/ConnectButton";
function Homepage() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  useEffect(() => {
    if (publicKey) {
      connection.getParsedAccountInfo(publicKey).then((value) => {
        console.log(value);
      });
    }
  }, [publicKey]);

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
