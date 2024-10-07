import React from 'react';
import { Container } from '@mui/material';

function Stage({ children }) {
  return (
    <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
      {children}
    </Container>
  );
}

export default Stage;