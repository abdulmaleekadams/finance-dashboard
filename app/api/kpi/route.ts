import connectToDb from '@/lib/connectToDb';
import KPI from '@/models/KPI';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectToDb();
    const data = await KPI.find();
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
    console.log('Database disconnected');
  }
};
