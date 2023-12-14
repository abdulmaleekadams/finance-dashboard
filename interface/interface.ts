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

export type KPIsDataItem = {
  _id: string;
  totalProfit: string;
  totalRevenue: string;
  totalExpenses: string;
  monthlyData: MonthlyData[];
  dailyData: DailyData[];
};
