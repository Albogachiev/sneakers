import { prisma } from './prisma-client';
import { hashSync } from 'bcryptjs';
async function up() {
  const hashPassword = hashSync('123', 8);
  const hashPassword2 = hashSync('321', 8);
  await prisma.user.createMany({
    data: [
      {
        fullName: 'admin Test',
        email: '1@1.1',
        password: hashPassword,
        verified: new Date(),
        role: 'ADMIN',
      },
      {
        fullName: 'user Test',
        email: '2@2.2',
        password: hashPassword2,
        verified: new Date(),
        role: 'USER',
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await up();
    // await down();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
