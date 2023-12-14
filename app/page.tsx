import Dashboard from '@/scenes/dashboard/Dashboard';
import styles from './page.module.css';
import { getData } from './action';

export default async function Home() {
  await getData()
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}
