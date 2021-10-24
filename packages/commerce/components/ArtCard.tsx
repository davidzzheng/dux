import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import SolanaIcon from "../assets/solana.svg";
import LoaderIcon from "../assets/loader.svg";
import { IToken } from "../types/Token";

export interface ArtCardProps extends IToken {
  isLoading: boolean;
}

export const ArtCard = ({ content, contentName, pubkey }: ArtCardProps) => {
  const [fetching, setFetching] = useState(true);
  const [buying, setBuying] = useState(false);
  const [owned, setOwned] = useState(false);

  const handleBuy = () => {
    setBuying(true);

    setTimeout(() => {
      setBuying(false);
      setOwned(true);
    }, 2000);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden transition-shadow duration-200 bg-white border border-gray-200 rounded-lg shadow group hover:shadow-xl",
        "dark:bg-black dark:shadow-glow dark:hover:shadow-glow-xl dark:hover:border-blue-500 dark:border-gray-700",
        fetching && "loading"
      )}
    >
      <div className="relative bg-gray-200 h-96 sm:h-80 md:h-72 lg:h-64 dark:bg-gray-700">
        {content && (
          <Image
            src={content.image}
            alt={contentName}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            placeholder="blur"
            onLoadingComplete={() => setFetching(false)}
            blurDataURL={content?.image}
            className="duration-150 group-hover:opacity-25"
          />
        )}
        <span className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          {content && (
            <div className="flex flex-col justify-end h-full gap-px px-4 py-2 dark:text-white">
              {content.attributes.map(
                (attr) =>
                  attr.value && (
                    <div
                      className="flex"
                      key={`${content?.name}-${attr.trait_type}`}
                    >
                      <div className="self-center flex-1 inline text-xs font-light">
                        {`${attr.trait_type}: `}
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
              "text-lg font-bold hover:text-blue-900 text-blue-500 loadable transition-colors dark:hover:text-blue-300",
              fetching && "loading h-7 block"
            )}
          >
            {contentName}
          </a>
        </Link>
        <div className="flex items-end justify-between h-12">
          <div className="flex flex-col w-24 gap-1 pt-1 text-sm text-gray-400 dark:text-gray-500">
            <div className="loadable">
              Bid{" "}
              <strong className="float-right">
                <SolanaIcon className="inline w-3 h-3 pb-0.5" /> 6
              </strong>
            </div>
            <div className="loadable">
              Last{" "}
              <strong className="float-right">
                <SolanaIcon className="inline w-3 h-3 pb-0.5" /> 4.269
              </strong>
            </div>
          </div>
          {buying ? (
            <LoaderIcon className="w-5 h-5 mr-8 text-blue-500 animate-spin" />
          ) : owned ? (
            <span className="mr-6 text-sm font-semibold dark:text-gray-600">
              Owned
            </span>
          ) : (
            <button
              className="text-base font-bold text-blue-500 transition-colors hover:text-blue-900 dark:hover:text-blue-300 loadable"
              onClick={handleBuy}
            >
              Buy (
              <SolanaIcon className="inline w-4 h-4 pb-0.5" /> 10)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
