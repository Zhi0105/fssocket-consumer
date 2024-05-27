import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.action.createMany({
    data: [
      { description: 'Entrance' },
      { description: 'Product Load' },
      { description: 'Change Hub' },
      { description: 'Click', name: 'Login' },
      { description: 'Click', name: 'Registration' },
      { description: 'Click', name: 'Product' },
      { description: 'Click', name: 'Banner' },
      { description: 'Click', name: 'Category' },
      { description: 'Click', name: 'Collection ' },
      { description: 'Click', name: 'Page' },
      { description: 'Click', name: 'External' },
      { description: 'Click', name: 'My account' },
      { description: 'Track Order' },
      { description: 'Login' },
      { description: 'Registered' },
      { description: 'Change language' },
      { description: 'Click', name: 'Add to cart' },
      { description: 'Click', name: 'Buy Now' },
      { description: 'Click', name: 'Shipping' },
      { description: 'Click', name: 'Payment' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });