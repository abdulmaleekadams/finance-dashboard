import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  LineChart,
  Cell,
  Pie,
  PieChart,
  Scatter,
  ScatterChart,
  ZAxis,
} from 'recharts';
import DashboardBox from '@/components/DashboardBox';
import { useMemo } from 'react';
import { KPIsDataItem, ProductDataItem } from '@/interface/interface';
import { Box, Typography, useTheme } from '@mui/material';
import BoxHeader from '@/components/BoxHeader';
import FlexBetween from '@/components/FlexBetween';

type props = {
  productData: Array<ProductDataItem>;
  operationalData: Array<KPIsDataItem>;
};

const pieData = [
  {
    name: 'Group A',
    value: 600,
  },
  {
    name: 'Group B',
    value: 400,
  },
];

const Row2 = ({ productData, operationalData }: props) => {
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            'Operational Expenses': operationalExpenses,
            'Non-operational Expenses': nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, expense, price }) => {
        return {
          id: _id,
          price,
          expense,
        };
      })
    );
  }, [productData]);

  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  return (
    <>
      <DashboardBox gridArea='d'>
        <BoxHeader
          title='Operation and Non-operational Expenses'
          sideText='+4%'
        />
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={operationalExpenses}
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
              orientation='left'
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
            <Line
              yAxisId='left'
              type='monotone'
              dataKey='Non-operational Expenses'
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId='right'
              type='monotone'
              dataKey='Operational Expenses'
              stroke={palette.tertiary[200]}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea='e'>
        <BoxHeader title='Campaigns and Target' sideText='+4%' />
        <FlexBetween mt='0.25rem' gap='1.5rem' pr='1rem'>
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke='none'
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey='value'
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml='-0.7rem' flexBasis='40%' textAlign='center'>
            <Typography variant='h5'>Target Sales</Typography>
            <Typography m='0.3rem 0' variant='h3' color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant='h6'>
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis='40%'>
            <Typography variant='h5'>Losses in Revenue</Typography>
            <Typography variant='h6'>Losses are down 25%</Typography>
            <Typography mt='0.4rem' variant='h5'>
              Profit Margins
            </Typography>
            <Typography variant='h6'>
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea='f'>
        <BoxHeader title='Product Prices vs Expenses' sideText='+4%' />
        <ResponsiveContainer width='100%' height='100%'>
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type='number'
              dataKey='price'
              name='price'
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type='number'
              dataKey='expense'
              name='expense'
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type='number' range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name='Product Expense Ratio'
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
