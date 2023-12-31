'use client';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

type Props = {};
const gridTemplateLgScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;
const gridTemplateMdScreens = `
    "a "
    "a "
    "a "
    "a "
    "b "
    "b "
    "b "
    "b "
    "c "
    "c "
    "c "
    "d "
    "d "
    "d "
    "e"
    "e"
    "f"
    "f"
    "f"
    "g "
    "g "
    "g "
    "h "
    "h "
    "h "
    "h "
    "i "
    "i "
    "j "
    "j "
`;

const Dashboard = ({ KPIData, productsData, transactionsData }: any) => {
  const isAboveMdScreens = useMediaQuery('(min-width: 1250px)');
  const { palette } = useTheme();
  return (
    <Box
      width='100%'
      height='100%'
      display='grid'
      gap='1.5rem'
      sx={
        isAboveMdScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(60px, 80px))',
              gridTemplateAreas: gridTemplateLgScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateMdScreens,
            }
      }
    >
      <Row1 kpiData={KPIData} />
      <Row2 operationalData={KPIData} productData={productsData} />
      <Row3
        transactionsData={transactionsData}
        kpiData={KPIData}
        productsData={productsData}
      />
    </Box>
  );
};

export default Dashboard;
