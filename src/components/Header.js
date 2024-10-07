import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect({
        appState: { returnTo: '/dashboard' }
      });
    }
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {isAuthenticated && (
          <Button color="inherit" onClick={handleDashboard}>
            Dashboard
          </Button>
        )}
        <Button color="inherit" onClick={handleCreateAccount}>
          Create Account
        </Button>
        <Button color="inherit" onClick={handleAuth}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;