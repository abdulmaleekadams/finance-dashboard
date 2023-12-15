type MonthlyData = {
  month: string;
  revenue: string;
  expenses: string;
  operationalExpenses: string;
  nonOperationalExpenses: string;
};

type DailyData = {
  date: string;
  revenue: string;
  expenses: string;
};

export type ExpensesByCategory = {
  salaries: number;
  supplies: number;
  services: number;
}

export type KPIsDataItem = {
  _id: string;
  totalProfit: string;
  totalRevenue: string;
  totalExpenses: string;
  monthlyData: MonthlyData[];
  dailyData: DailyData[];
};



export type ProductDataItem = {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export type TransactionsDataItem= {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}