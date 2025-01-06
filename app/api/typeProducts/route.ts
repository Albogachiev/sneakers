import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const typeProducts = await prisma.typeProduct.findMany();

  return NextResponse.json(typeProducts);
}
