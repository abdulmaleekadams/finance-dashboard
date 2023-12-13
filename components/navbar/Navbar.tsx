'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import FlexBetween from '../FlexBetween';
import PixIcon from '@mui/icons-material/Pix';
import Link from 'next/link';

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');
  return (
    <FlexBetween mb='0.25rem' p='0.5rem 0' color={palette.grey[300]}>
      <FlexBetween gap='0.75rem'>
        <PixIcon sx={{ fontSize: '28px' }} />
        <Typography variant='h4' fontSize='16px'>
          Finaseer
        </Typography>
      </FlexBetween>

      <FlexBetween gap='2rem'>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            href='/'
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            href='/predictions'
            onClick={() => setSelected('predictions')}
            style={{
              color: selected === 'predictions' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
