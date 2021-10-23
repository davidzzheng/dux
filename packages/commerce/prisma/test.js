const { programs, Connection } = require("@metaplex/js");
const { PublicKey } = require("@solana/web3.js");

(async () => {
  const connection = new Connection(
    "https://connect.runnode.com/?apikey=krCHyGbjMtCwOfXUU1J1"
  );
  const {
    auction: { Auction },
    vault: { Vault },
    metadata: { Metadata },
    metaplex: { AuctionManager, Store },
  } = programs;

  // using update authority
  const b = await Auction.getPDA(
    "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX"
  );
  const d = await Auction.load(connection, b);

  console.log(d);

  const z = await Auction.load(
    connection,
    await Auction.getPDA(d.data.auctionProgram)
  );

  console.log(z);
})()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {});
