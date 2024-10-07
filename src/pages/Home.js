import React from 'react';
import { Typography } from '@mui/material';
import Stage from '../components/Stage';

function Home() {
  return (
    <Stage>
      <Typography variant="h3" sx={{ fontWeight: 500, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
        Cooking up something good
      </Typography>
    </Stage>
  );
}

export default Home;