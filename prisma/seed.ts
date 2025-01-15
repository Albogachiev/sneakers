import { Prisma } from '@prisma/client';
import { categories, _typeProducts, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcryptjs';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  color,
  size,
}: {
  productId: number;
  color?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    color,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.typeProduct.createMany({
    data: _typeProducts,
  });

  await prisma.product.createMany({
    data: products,
  });

  const sneakers1 = await prisma.product.create({
    data: {
      name: 'летние кроссовки',
      imageUrl:
        'https://avatars.mds.yandex.net/i?id=2d667b5a968a4a2308d49d39652c1726_l-5220659-images-thumbs&n=13',
      categoryId: 1,
      typeProducts: {
        connect: _typeProducts.slice(0, 5),
      },
    },
  });

  const sneakers2 = await prisma.product.create({
    data: {
      name: 'зимняя обувь',
      imageUrl:
        'https://avatars.mds.yandex.net/i?id=b2884d8c6eee0b2c6ce04689002a7cba5cb38d81-9671619-images-thumbs&n=13',
      categoryId: 1,
      typeProducts: {
        connect: _typeProducts.slice(5, 10),
      },
    },
  });

  const sneakers3 = await prisma.product.create({
    data: {
      name: 'беговые кроссовки',
      imageUrl:
        'https://avatars.mds.yandex.net/i?id=528313b671e279b1e3f5bc8c2d7600596aebb791-12527723-images-thumbs&n=13',
      categoryId: 1,
      typeProducts: {
        connect: _typeProducts.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      //  "летние кроссовки"
      generateProductItem({ productId: sneakers1.id, color: 1, size: 20 }),
      generateProductItem({ productId: sneakers1.id, color: 2, size: 30 }),
      generateProductItem({ productId: sneakers1.id, color: 2, size: 40 }),

      //  "зимняя обувь"
      generateProductItem({ productId: sneakers2.id, color: 1, size: 20 }),
      generateProductItem({ productId: sneakers2.id, color: 1, size: 30 }),
      generateProductItem({ productId: sneakers2.id, color: 1, size: 40 }),
      generateProductItem({ productId: sneakers2.id, color: 2, size: 20 }),
      generateProductItem({ productId: sneakers2.id, color: 2, size: 30 }),
      generateProductItem({ productId: sneakers2.id, color: 2, size: 40 }),

      //  "беговые кроссовки"
      generateProductItem({ productId: sneakers3.id, color: 1, size: 20 }),
      generateProductItem({ productId: sneakers3.id, color: 2, size: 30 }),
      generateProductItem({ productId: sneakers3.id, color: 2, size: 40 }),

      // Остальные продукты
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      typeProducts: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  // await prisma.story.createMany({});
  // await prisma.storyItem.createMany({});
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "typeProduct" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
