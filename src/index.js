import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import theme from './theme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4lmfais4wyin82tw.us.auth0.com"
      clientId="VUD1mroRO3WjirJlxsEfvFECQ8AzWOMS"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/callback`
      }}
      useOrganizationId={true}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
