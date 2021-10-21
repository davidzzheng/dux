import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  const token1 = await prisma.item.upsert({
    where: { tokenAddress: "CbJq9YjeuwpVuLCc9tvEE5c3AsCFMQypRKu5FCB3aiL7" },
    update: {},
    create: {
      tokenAddress: "CbJq9YjeuwpVuLCc9tvEE5c3AsCFMQypRKu5FCB3aiL7",
      ownerAddress: "7iPoDrXP8hFAJgCheLV7AFHrgmAHj8Fgh1VTgZyeeJs6",
      name: "Meerkat #2322",
      isForSale: true,
      lastPrice: 12.5,
      price: 200,
      attributes: {},
    },
  });

  console.log(token1);
})()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
