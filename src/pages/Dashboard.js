import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../components/Header';
import Stage from '../components/Stage';
import { Typography } from '@mui/material';

function Dashboard() {
  const { user } = useAuth0();

  return (
    <>
      <Header />
      <Stage>
        <Typography variant="h1" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome, {user?.name || 'User'}!
        </Typography>
        {user?.org_id && (
          <Typography variant="body1">
            Organization: {user.org_id}
          </Typography>
        )}
      </Stage>
    </>
  );
}

export default Dashboard;