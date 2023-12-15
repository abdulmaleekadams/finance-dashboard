type MonthlyData = {
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
};

type DailyData = {
  date: string;
  revenue: number;
  expenses: number;
};

export type ExpensesByCategory = {
  salaries: number;
  supplies: number;
  services: number;
};

export type KPIsDataItem = {
  _id: string;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  monthlyData: MonthlyData[];
  dailyData: DailyData[];
  expensesByCategory: ExpensesByCategory;
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
};

export type TransactionsDataItem = {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
};
