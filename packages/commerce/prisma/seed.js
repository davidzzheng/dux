const { programs } = require("@metaplex/js");
const { Connection } = require("@solana/web3.js");

const { PrismaClient } = require("@prisma/client");
const axios = require("axios").default;

const prisma = new PrismaClient();

(async () => {
  const connection = new Connection(
    // "https://connect.runnode.com/?" + process.env.RUNNODE_KEY
    "https://api.mainnet-beta.solana.com"
  );
  const {
    metadata: { Metadata },
  } = programs;

  const res = await Metadata.findMany(connection, {
    creators: [process.env.CREATOR_ADDRESS],
  });

  const sliced = res.slice(0, 25);

  for (let data of sliced) {
    const { data: metadata, pubkey } = data.toJSON();

    const res = await axios.get(metadata.data.uri);

    await prisma.token.create({
      data: {
        metadata,
        pubkey,
        content: {
          create: {
            ...res.data,
            attributes: { createMany: { data: res.data.attributes } },
          },
        },
      },
    });
  }
})()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
