import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import cn from "classnames";

import { useConnection } from "@solana/wallet-adapter-react";
import { programs } from "@metaplex/js";

import ArtCard from "../components/ArtCard";
import { IToken } from "../types/Token";

const breadcrumbs = [{ id: 1, name: "Marketplace", href: "#" }];

const {
  vault: { Vault },
  auction: { Auction, AuctionData },
  metadata: { Metadata },
  metaplex: { Store, AuctionManager },
} = programs;

export const Marketplace: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { data: items = new Array(9).fill({}) } =
    useSWR<IToken[]>("/api/marketplace");

  const { data: filters = {} } = useSWR("/api/filters");

  console.log(filters);

  const { connection } = useConnection();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       console.log(await AuctionManager.findMany(connection));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  const Filter = () => (
    <form className="space-y-10 divide-y divide-gray-200 dark:divide-gray-800">
      {Object.keys(filters).map((filter, i) => (
        <Disclosure as="div" key={filter} className={cn(i > 0 && "pt-10")}>
          {({ open }) => (
            <fieldset>
              <Disclosure.Button
                className={cn(
                  "flex justify-between w-full text-gray-900 row hover:text-blue-600 loadable",
                  "dark:text-gray-200 dark:hover:text-blue-400"
                )}
              >
                <legend className="block text-sm font-medium text-left">
                  {filter}
                </legend>
                <ChevronDownIcon
                  className={cn("w-5 h-5", open && "rotate-180")}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                as={Disclosure.Panel}
                enter="transition-all duration-150 transform"
                enterFrom="-translate-y-1/4 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition-all duration-100 transform"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-1/4 opacity-0"
                className="pt-6 space-y-3"
              >
                {filters[filter].map((option, i) => (
                  <div key={option} className="flex items-center">
                    <input
                      id={`${filter}-${i}`}
                      name={`${filter}`}
                      defaultValue={option}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`${filter}-${i}`}
                      className="ml-3 text-sm text-gray-600 dark:text-gray-200"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </Transition>
            </fieldset>
          )}
        </Disclosure>
      ))}
    </form>
  );

  return (
    <div>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between px-4 pb-6">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <div className="p-4">
                  <Filter />
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <div className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
          <nav
            aria-label="Breadcrumb"
            className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          >
            <ol role="list" className="flex items-center py-4 space-x-4">
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-4 text-sm font-medium text-gray-900 transition-colors dark:text-gray-100 dark:hover:text-blue-300"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      viewBox="0 0 6 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-auto h-5 text-gray-300"
                    >
                      <path
                        d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm font-medium text-gray-500 hover:text-gray-600">
                All
              </li>
            </ol>
          </nav>
        </div>

        <main className="max-w-2xl px-4 mx-auto lg:max-w-7xl lg:px-8">
          <div className="pt-12 pb-10 text-center border-b border-gray-200 dark:border-gray-800">
            <h1 className="pb-6 text-4xl font-bold text-gray-900 dark:text-gray-200">
              Marketplace at a Glance
            </h1>

            <div className="">
              <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-4 dark:shadow-glow dark:bg-gray-900">
                <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-900 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 dark:text-gray-200 loadable">
                    Floor Price
                  </dt>
                  <dd className="order-1 h-12 text-5xl font-semibold text-blue-600 loadable">
                    50
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-900 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 dark:text-gray-200 loadable">
                    Weekly Volume
                  </dt>
                  <dd className="order-1 text-5xl font-semibold text-blue-600 loadable">
                    5K
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-900 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 dark:text-gray-200 loadable">
                    Total Volume
                  </dt>
                  <dd className="order-1 text-5xl font-semibold text-blue-600 loadable">
                    27K
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-900 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 dark:text-gray-200 loadable">
                    Owners
                  </dt>
                  <dd className="order-1 text-5xl font-semibold text-blue-600 loadable">
                    400
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>
              <button
                type="button"
                className="inline-flex items-center lg:hidden "
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Filters
                </span>
                <PlusSmIcon
                  className="flex-shrink-0 w-5 h-5 ml-1 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <Filter />
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {items.map((token, i) => (
                  <ArtCard {...token} isLoading key={token.contentName ?? i} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Marketplace;
