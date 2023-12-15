import connectToDb from '@/lib/connectToDb';
import Transaction from '@/models/Transactions';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectToDb();
    const data = await Transaction.find().limit(50).sort({ createdOn: -1 });
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
    console.log('Database disconnected');
  }
};
