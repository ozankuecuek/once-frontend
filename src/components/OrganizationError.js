import React from 'react';
import { Typography, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

function OrganizationError() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      organization: 'org_id_here' // Replace with your organization ID
    });
  };

  return (
    <div>
      <Typography variant="h4">Organization Access Required</Typography>
      <Typography variant="body1">
        You must be a member of an organization to access this application.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Log In with Organization
      </Button>
    </div>
  );
}

export default OrganizationError;
