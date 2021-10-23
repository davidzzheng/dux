import { useEffect, useState } from "react";
import { programs } from "@metaplex/js";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import SolanaIcon from "../assets/solana.svg";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Token } from "../types/Token";

export interface ArtCardProps extends Partial<Token> {
  isLoading: boolean;
}

const {
  vault: { Vault },
  auction: { Auction },
  metadata: { Metadata },
  metaplex: { Store, AuctionManager },
} = programs;

export const ArtCard = ({ content, contentName, pubkey }: ArtCardProps) => {
  const { connection } = useConnection();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     if (data) {
  //       try {
  //         // Auction.load()
  //         // console.log(await Auction.load(connection, data.mint));
  //       } catch (e) {}

  //       // const storeData = await Auction.load(connection, pk);
  //     }
  //   })();
  // }, [connection, data]);

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow group hover:shadow-xl",
        loading && "loading"
      )}
    >
      <div className="relative h-64 bg-gray-200">
        {content && (
          <Image
            src={content.image}
            alt={contentName}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            placeholder="blur"
            onLoadingComplete={() => setLoading(false)}
            blurDataURL={content?.image}
            className="duration-150 group-hover:opacity-25"
          />
        )}
        <span className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          {content && (
            <div className="flex flex-col justify-end h-full gap-px px-4 py-2 text-xs">
              {content.attributes.map(
                (attr) =>
                  attr.value && (
                    <div
                      className="flex "
                      key={`${content?.name}-${attr.trait_type}`}
                    >
                      <div className="self-center flex-1 inline text-xs font-light">
                        {attr.trait_type}:{" "}
                      </div>
                      <div className="text-base font-medium">{attr.value}</div>
                    </div>
                  )
              )}
            </div>
          )}
        </span>
      </div>
      <div className="p-4 h-28">
        <Link href={`/token/${pubkey}`} passHref>
          <a
            className={cn(
              "text-lg font-bold hover:text-blue-900 text-blue-500 loadable h-7",
              { loading: loading }
            )}
          >
            {contentName}
          </a>
        </Link>
        <div className="flex items-end justify-between h-12">
          <div className="flex flex-col w-24 gap-1 pt-1 text-sm text-gray-400">
            <div className="loadable">
              Bid{" "}
              <strong className="float-right">
                <SolanaIcon className="inline w-3 h-3 pb-0.5" /> 40
              </strong>
            </div>
            <div className="loadable">
              Last{" "}
              <strong className="float-right">
                <SolanaIcon className="inline w-3 h-3 pb-0.5" /> 50000
              </strong>
            </div>
          </div>
          <button className="text-base font-bold text-blue-500 min-w-28 hover:text-blue-900 loadable">
            Buy (
            <SolanaIcon className="inline w-4 h-4 pb-0.5" /> 200)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
