import React from 'react';
import { Typography } from '@mui/material';
import Header from '../components/Header';
import Stage from '../components/Stage';

function Home() {
  return (
    <>
      <Header />
      <Stage>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to once
        </Typography>
      </Stage>
    </>
  );
}

export default Home;