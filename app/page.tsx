import Dashboard from '@/scenes/dashboard/Dashboard';
import styles from './page.module.css';
import { getKpiData, getProductData, getTransactionsData } from './action';

export default async function Home() {
  const KPIsData = await getKpiData();
  const productsData = await getProductData();
  const transactionsData = await getTransactionsData();

  return (
    <main className={styles.main}>
      <Dashboard
        KPIData={KPIsData}
        productsData={productsData}
        transactionsData={transactionsData}
      />
    </main>
  );
}
