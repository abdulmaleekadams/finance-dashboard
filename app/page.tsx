'use client'
import styles from './page.module.css'
import { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { CssBaseline } from '@mui/material'

export default function Home() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        Hello
     </ThemeProvider>
    </main>
  )
}
