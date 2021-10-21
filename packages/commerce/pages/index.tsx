import { useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { ConnectButton } from "../components/ConnectButton";
import { PublicKey } from "@solana/web3.js";
import {
  Connection,
  Metadata,
  MetaplexKey,
  MetaplexProgram,
} from "@metaplex/js";

function Homepage() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  useEffect(() => {
    (async () => {
      if (publicKey) {
        try {
          const { value: accounts } = await connection.getTokenAccountsByOwner(
            publicKey,
            {
              programId: new PublicKey(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
              ),
              mint: new PublicKey(
                "8vZ3KE45mgAAn6FkwQuFEhnywUqnUZpSMctoUbZKWRzB"
              ),
            }
          );

          console.log(accounts.map((a) => a.account.owner.toBase58()));
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
