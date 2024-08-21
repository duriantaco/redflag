import React, {lazy, Suspense} from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

// Lazy-loaded Navbar component
const Navbar = lazy(() => import('./NavBar'));

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
      </Suspense>
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginY: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#1976d2' }}>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ color: '#666' }}>
          Last updated: 21/09/2024
        </Typography>
        
        <Box my={4}>
          <Typography variant="h5" gutterBottom sx={{ color: '#333' }}>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to ishearedflag. We respect your privacy and are committed to protecting it through our compliance with this policy.
          </Typography>
        </Box>
        
        <Box my={4}>
          <Typography variant="h5" gutterBottom sx={{ color: '#333' }}>
            Information We Don't Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We do not collect, use, store, or share any personal information about our visitors. We do not use cookies, tracking technologies, or any other means to gather information about our users.
          </Typography>
        </Box>
        
        <Box my={4}>
          <Typography variant="h5" gutterBottom sx={{ color: '#333' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
            papersashimi@gmail.com
          </Typography>
        </Box>
        
        <Box my={4}>
          <Typography variant="h5" gutterBottom sx={{ color: '#333' }}>
            Consent
          </Typography>
          <Typography variant="body1" paragraph>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </Typography>
        </Box>
      </Paper>
    </Container>
    </>
  );
};

export default PrivacyPolicy;