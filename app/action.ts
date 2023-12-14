'use server';
import { kpisData } from '@/data/data';

import connectToDb from '@/lib/connectToDb';
import KPI from '@/models/KPI';
import mongoose from 'mongoose';

export const addData = async () => {
  try {
    await connectToDb();
    /*   ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // console.log('Database dropped');

    // await KPI.insertMany(kpisData);
    // console.log('Data uploaded');
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

export const getKpiData = async () => {
  const response = await fetch('http://localhost:3000/api/kpi');

  const data = await response.json();

  return data;
};
