import Prediction from '@/scenes/prediction/Prediction';
import { getKpiData } from '../action';

export default async function Predictions() {
  const KPIsData = await getKpiData();
  

  return <Prediction kpiData={KPIsData} />;
}
