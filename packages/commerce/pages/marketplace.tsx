import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import cn from "classnames";

const breadcrumbs = [{ id: 1, name: "Marketplace", href: "#" }];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];
const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};

export default function Marketplace() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<any>(
    filters.reduce((acc, filter) => ({ ...acc, [filter.id]: [] }), {})
  );

  const Filter = () => (
    <form className="space-y-10 divide-y divide-gray-200">
      {filters.map((section, sectionIdx) => (
        <Disclosure
          as="div"
          key={section.name}
          className={cn(sectionIdx > 0 && "pt-10")}
        >
          {({ open }) => (
            <fieldset>
              <Disclosure.Button className="flex justify-between w-full text-gray-900 row">
                <legend className="block text-sm font-medium text-left">
                  {section.name}
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
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`${section.id}-${optionIdx}`}
                      name={`${section.id}`}
                      defaultValue={option.value}
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`${section.id}-${optionIdx}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
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
    <div className="bg-gray-100 loader loading">
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

        <div className="bg-white border-b border-gray-200 ">
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
                      className="mr-4 text-sm font-medium text-gray-900"
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
          {/* <div className="p-12 my-12 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-black text-gray-900">
              d<strong className="font-medium">[ux]</strong>
            </h1>
            <p></p>
          </div> */}
          <div className="pt-24 pb-10 text-center border-b border-gray-200">
            <h1 className="pb-6 text-4xl font-bold text-gray-900">
              Marketplace at a Glance
            </h1>

            <div className="">
              <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-4">
                <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 loadable">
                    Floor Price
                  </dt>
                  <dd className="order-1 h-12 text-5xl font-semibold text-indigo-600 loadable">
                    50
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 loadable">
                    Weekly Volume
                  </dt>
                  <dd className="order-1 text-5xl font-semibold text-indigo-600 loadable">
                    5K
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 loadable">
                    Total Volume
                  </dt>
                  <dd className="order-1 text-5xl font-semibold text-indigo-600 loadable">
                    27K
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400 loadable">
                    Owners
                  </dt>
                  <dd className="order-1 text-5xl font-semibold text-indigo-600 loadable">
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
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
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
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg"
                  >
                    <div className="bg-gray-200 aspect-w-3 aspect-h-4 h-96 loadable">
                      <span className="object-cover object-center w-full h-full sm:w-full sm:h-full" />
                    </div>
                    <div className="flex flex-col flex-1 p-4 space-y-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                      <div className="flex flex-col justify-end flex-1">
                        <p className="text-sm italic text-gray-500">
                          {product.options}
                        </p>
                        <p className="text-base font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <button className="px-4 py-2 text-white bg-blue-600 border rounded">
                          View Details
                        </button>
                        <button className="px-4 py-2 text-white bg-green-600 border rounded">
                          Buy (2 SOL)
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
