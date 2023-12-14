import Dashboard from '@/scenes/dashboard/Dashboard';
import styles from './page.module.css';
import { getKpiData } from './action';

export default async function Home() {
  const KPIsData = await getKpiData()
  console.log(KPIsData.data[0]);
  
  return (
    <main className={styles.main}>
      <Dashboard KPIData={KPIsData.data} />
    </main>
  );
}
