import { NextResponse } from 'next/server';
import KPI from '@/models/KPI';

export const GET = async (req: Request) => {
  try {
    const kpis = await KPI.find();
    NextResponse.json({ message: 'success', data: kpis }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: 'Internal Server Errror' }, { status: 500 });
  }
};
