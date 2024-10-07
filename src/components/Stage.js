import React from 'react';
import { Box, Container } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ellipsis = keyframes`
  0% { content: '.'; }
  33% { content: '..'; }
  66% { content: '...'; }
  100% { content: ''; }
`;

function Stage({ children }) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            '& h3::after': {
              content: '""',
              animation: `${ellipsis} 2s infinite`,
              display: 'inline-block',
              width: '1em',
              textAlign: 'left',
            },
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}

export default Stage;