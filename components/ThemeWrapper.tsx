'use client';
import styles from '../app/page.module.css';
import { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { themeSettings } from '@/app/theme';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem'>
          {children}
        </Box>
      </ThemeProvider>
    </main>
  );
}
