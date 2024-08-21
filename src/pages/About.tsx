import React, { lazy, Suspense } from 'react';
import { Typography, Paper, Box, Container, Divider } from '@mui/material';
import { AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './About.css';

// Lazy-loaded Navbar component
const Navbar = lazy(() => import('../components/NavBar'));

const AboutPage: React.FC = () => {
  console.log('AboutPage');
  return (
    <>
      <Helmet>
        <title>About Our Relationship Insights Tool | Your App Name</title>
        <meta name="description" content="Learn about our Relationship Insights Tool, designed to help you navigate the complexities of modern dating and recognize potential red flags." />
        <meta name="keywords" content="relationship insights, dating advice, red flags, healthy relationships" />
        <link rel="canonical" href="https://yourapp.com/about" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Container maxWidth="md">
        <Paper elevation={3} className="about-container">
          <Typography variant="h3" gutterBottom className="about-title">
            About Our Relationship Insights Tool
          </Typography>

          <Box my={4} className="disclaimer" sx={{ backgroundColor: '#f8d7da', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Important Disclaimer
            </Typography>
            <Typography variant="body1">
              This tool is a pet project created for fun and general insights. We are NOT professional psychologists or psychiatrists. The information provided here should not be considered as professional advice. Always consult with qualified professionals for serious relationship concerns.
            </Typography>
          </Box>
          
          <Typography variant="body1" paragraph>
            Have you ever found yourself wondering if that person you're interested in might be waving some red flags? You're not alone. Our journey to create this tool began with stories just like yours - and ours.
          </Typography>

          <Box my={4}>
            <Typography variant="h4" gutterBottom className="story-title">
              A Tale of Mixed Signals
            </Typography>
            <Typography variant="body1" paragraph>
              Picture this: You match with someone on some dating app. Let's call her Anne. The conversation starts of well. She gives you mixed signals. You start to wonder, and she gives you a stupid reason like "I'm new to online dating."
            </Typography>
            <Typography variant="body1" paragraph>
              As you chat further, Anne tells you that she's keen on a serious relationship and that she plans to get married soon. You enthusiastically suggest meeting up, and she agrees.
            </Typography>
            <Typography variant="body1" paragraph>
              But then, a pattern emerges:
            </Typography>
            <ul>
              <li>Plans to meet always fall through at the last minute.</li>
              <li>She never seems to reciprocate despite showing interests occasionally.</li>
              <li>She shows you snippets of her life, yet never seems to ask you what you're up to.</li>
            </ul>
            <Typography variant="body1" paragraph>
              Weeks pass, and you're left wondering: Is she really interested? Or is there something else going on?
            </Typography>
            <Typography variant="body1" paragraph>
              One day, you decide to ask her directly. She gives you a new reason, and you're left feeling even more confused. You're not sure if you're overthinking things or if there's a genuine issue.
            </Typography>
            <Typography variant="body1" paragraph>
                Sounds familiar?
            </Typography>
          </Box>

          <Divider />

          <Box my={4}>
            <Typography variant="h4" gutterBottom className="section-title">
              Recognizing the Red Flags
            </Typography>
            <Typography variant="body1" paragraph>
              This story might sound familiar because it's a common experience in modern dating. Red flags aren't always dramatic declarations or obvious lies. Often, they're subtle inconsistencies, patterns of behavior that don't quite add up:
            </Typography>
            <ol>
              <li>Words not matching actions</li>
              <li>Inconsistent communication</li>
              <li>Avoiding real-world meetups</li>
              <li>Small lies that build up over time</li>
            </ol>
            <Typography variant="body1" paragraph>
              Our simple checklist is designed to help you navigate these minefields. By checking your own boxes, we hope to help you recognize whether the person is a red flag or a green light.
            </Typography>
          </Box>

          <Divider />

          <Box my={4}>
            <Typography variant="h4" gutterBottom className="section-title">
              Why We Created This Tool
            </Typography>
            <Typography variant="body1" paragraph>
              We've been there - caught up in the excitement of a new connection, willing to overlook small inconsistencies, hoping for the best. But we've also experienced the pain and wasted time that comes from ignoring red flags.
            </Typography>
            <Typography variant="body1" paragraph>
              This tool isn't about cynicism or distrust. It's about empowering you with awareness. We believe that healthy relationships are built on honesty, consistency, and mutual effort. Our goal is to help you recognize when these crucial elements might be missing, so you can make informed decisions about your relationships.
            </Typography>
          </Box>

          <Box my={4} className="conclusion">
            <AlertTriangle size={32} color="#d32f2f" />
            <Typography variant="h5" gutterBottom>
              Remember, you deserve a relationship that's as genuine and invested as you are.
            </Typography>
            <Typography variant="body1">
              Let's navigate the complex world of relationships together, with eyes wide open and hearts protected.
            </Typography>
          </Box>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Privacy and Data Protection
            </Typography>
            <Typography variant="body1">
              <Link to="/privacy-policy">Privacy Policy</Link>           
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default AboutPage;
