import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import DashboardBox from '@/components/DashboardBox';
import { useMemo } from 'react';
import { KPIsDataItem } from '@/interface/interface';
import { useTheme } from '@mui/material';

type props = {
  kpiData: Array<KPIsDataItem>;
};
const Row1 = ({ kpiData }: props) => {
  const revenueExpenses = useMemo(() => {
    return (
      kpiData &&
      kpiData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [kpiData]);
  const { palette } = useTheme();

  return (
    <>
      <DashboardBox gridArea='a'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id='colorRevenue' x1='0' x2='0' y1='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset='95%'
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey='name'
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: '10px' }}
              axisLine={{ strokeWidth: '0' }}
              domain={[8000, 23000]}
            />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='revenue'
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill='url(#colorRevenue)'
            />
            <Area
              type='monotone'
              dot={true}
              dataKey='expenses'
              stroke={palette.primary.main}
              fillOpacity={1}
              fill='url(#colorExpenses)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea='b'></DashboardBox>
      <DashboardBox gridArea='c'></DashboardBox>
    </>
  );
};

export default Row1;
