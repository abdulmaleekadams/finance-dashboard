'use server';
import { kpisData } from '@/data/data';
import { products } from '@/data/data';
import { transactions } from '@/data/data';

import connectToDb from '@/lib/connectToDb';
import KPI from '@/models/KPI';
import Product from '@/models/Product';
import Transaction from '@/models/Transactions';
import mongoose from 'mongoose';

// export const addData = async () => {
//   try {
//     await connectToDb();
//     /*   ADD DATA ONE TIME ONLY OR AS NEEDED */
//     await mongoose.connection.db.dropDatabase();
//     console.log('Database dropped');

//     await KPI.insertMany(kpisData);
//     console.log('KPIs data uploaded')
//     await Product.insertMany(products);
//     console.log('Products data uploaded');
//     await Transaction.insertMany(transactions);
//     console.log('Transactions data uploaded');
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await mongoose.disconnect();
//   }
// };

export const getKpiData = async () => {
  const response = await fetch('http://localhost:3000/api/kpi');

  const data = await response.json();

  return data.data;
};

export const getProductData = async () => {
  const response = await fetch('http://localhost:3000/api/product');

  const data = await response.json();

  return data.data;
};

export const getTransactionsData = async () => {
  const response = await fetch('http://localhost:3000/api/transaction');

  const data = await response.json();

  return data.data;
};
