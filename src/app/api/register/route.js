import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing Fields!' }, { status: 400 });
    }

    const exist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exist) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json({ message: 'Registration success!', success: true, user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'An error occurred during registration' }, { status: 500 });
  }
}
