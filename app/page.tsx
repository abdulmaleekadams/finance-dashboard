import Dashboard from '@/scenes/dashboard/Dashboard';
import styles from './page.module.css';
import { getKpiData, getProductData } from './action';

export default async function Home() {
  const KPIsData = await getKpiData();
  const productsData = await getProductData();

  return (
    <main className={styles.main}>
      <Dashboard KPIData={KPIsData} productsData={productsData} />
    </main>
  );
}
