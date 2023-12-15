import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  Legend,
  LineChart,
  BarChart,
  Bar,
  Rectangle,
} from 'recharts';
import DashboardBox from '@/components/DashboardBox';
import { useMemo } from 'react';
import { KPIsDataItem } from '@/interface/interface';
import { useTheme } from '@mui/material';
import BoxHeader from '@/components/BoxHeader';

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

  const revenueProfit = useMemo(() => {
    return (
      kpiData &&
      kpiData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (parseFloat(revenue) - parseFloat(expenses)).toFixed(2),
        };
      })
    );
  }, [kpiData]);

  const revenue = useMemo(() => {
    return (
      kpiData &&
      kpiData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [kpiData]);
  const { palette } = useTheme();

  return (
    <>
      <DashboardBox gridArea='a'>
        <BoxHeader
          title='Revenue and Expenses'
          subtitle='top line represents revenue, bottom line represents expenses'
          sideText='+4%'
        />
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
                  stopColor={palette.primary[700]}
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
      <DashboardBox gridArea='b'>
        <BoxHeader title='Profit and Revenue' sideText='+4%' />
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey='name'
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              yAxisId='left'
              tickLine={false}
              style={{ fontSize: '10px' }}
              axisLine={false}
            />
            <YAxis
              yAxisId='right'
              orientation='right'
              tickLine={false}
              style={{ fontSize: '10px' }}
              axisLine={false}
            />
            <Tooltip />
            <Legend height={20} wrapperStyle={{ margin: '0 0 10px 0' }} />
            <Line
              yAxisId='left'
              type='monotone'
              dataKey='profit'
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId='right'
              type='monotone'
              dataKey='revenue'
              stroke={palette.tertiary[200]}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea='c'>
        <BoxHeader
          title='Monthly Revenue'
          subtitle='graph representing the revenue month by month'
          sideText='+4%'
        />
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id='colorRevenue' x1='0' x2='0' y1='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor={palette.primary[700]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey='name'
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip />
            <Bar
              dataKey='revenue'
              fill='url(#colorRevenue)'
              activeBar={<Rectangle fill='gold' stroke='purple' />}
            />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
