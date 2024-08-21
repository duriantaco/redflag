import React, { lazy, Suspense } from 'react';
import { Typography, Paper, Box, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Mail, Bug, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet';

// Lazy-loaded Navbar component
const Navbar = lazy(() => import('../components/NavBar'));

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Your App Name</title>
        <meta name="description" content="Get in touch with us for bug reports, feature suggestions, or general inquiries. We value your feedback and are constantly working to improve your experience." />
        <meta name="keywords" content="contact, feedback, bug report, feature request, inquiries" />
        <link rel="canonical" href="https://yourapp.com/contact" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h3" gutterBottom>
            Contact Us
          </Typography>
          
          <Typography variant="body1" paragraph>
            We value your feedback and suggestions. Please feel free to reach out to us for any of the following reasons:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon><Bug /></ListItemIcon>
              <ListItemText primary="Report a bug" />
            </ListItem>
            <ListItem>
              <ListItemIcon><Lightbulb /></ListItemIcon>
              <ListItemText primary="Suggest a new feature" />
            </ListItem>
            <ListItem>
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary="General inquiries" />
            </ListItem>
          </List>

          <Box my={4}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              For any issues, suggestions, or general feedback, please email us at:
            </Typography>
            <Typography variant="h6" color="primary">
              <a href="mailto:papersashimi@gmail.com">papersashimi@gmail.com</a>
            </Typography>
          </Box>

         
          <Box my={4}>
            <Typography variant="h5" gutterBottom>
              Upcoming Features
            </Typography>
            <Typography variant="body1" paragraph>
              We're constantly working to improve your experience. Here are some features we're considering:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><Lightbulb /></ListItemIcon>
                <ListItemText primary="Community forum for sharing experiences" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Lightbulb /></ListItemIcon>
                <ListItemText primary="Personalized advice based on quiz results" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Lightbulb /></ListItemIcon>
                <ListItemText primary="Integration with travel and food places" />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ContactPage;