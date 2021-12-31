const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-base",
  // "@solana/wallet-adapter-bitpie",
  // "@solana/wallet-adapter-blocto",
  // "@solana/wallet-adapter-clover",
  // "@solana/wallet-adapter-coin98",
  // "@solana/wallet-adapter-ledger",
  // "@solana/wallet-adapter-mathwallet",
  "@solana/wallet-adapter-phantom",
  "@solana/wallet-adapter-react",
  // "@solana/wallet-adapter-safepal",
  // "@solana/wallet-adapter-slope",
  "@solana/wallet-adapter-solflare",
  "@solana/wallet-adapter-sollet",
  // "@solana/wallet-adapter-solong",
  // "@solana/wallet-adapter-torus",
  "@solana/wallet-adapter-wallets",
]);

module.exports = withPlugins(
  [
    withPWA({
      pwa: {
        dest: "public",
        register: true,
      },
    }),
    withTM(),
  ],
  { images: { domains: ["www.arweave.net"] } }
);
