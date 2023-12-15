import Dashboard from '@/scenes/dashboard/Dashboard';
import styles from './page.module.css';
import { addData, getKpiData } from './action';

export default async function Home() {
  const KPIsData = await getKpiData();

  return (
    <main className={styles.main}>
      <Dashboard KPIData={KPIsData.data} />
    </main>
  );
}
