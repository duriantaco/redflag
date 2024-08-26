import React, { useState, ReactElement, lazy, Suspense } from 'react';
import { Tabs, Tab, Box, Typography, Paper, Card, CardContent, Grid, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, useTheme } from '@mui/material';
import { AlertTriangle, Frown, Smile, ThumbsUp, Heart, Shield, Brain, Zap, ArrowRight, ChevronDown, LucideIcon, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet';
import './AdvicePage.css';

const Navbar = lazy(() => import('../components/NavBar'));
const TrainingOptions = lazy(() => import('../components/TrainingOptions'));

interface AdviceCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
  color: string;
}

const AdviceCard: React.FC<AdviceCardProps> = ({ icon, title, points, color }) => (
  <Card className="advice-card">
    <CardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Box mr={2} color={color}>{icon}</Box>
        <Typography variant="h6" component="h2" style={{ color: color }}>
          {title}
        </Typography>
      </Box>
      <Box className="advice-card-content">
        <ul className="advice-card-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </Box>
    </CardContent>
  </Card>
);

interface AdviceData {
  range: string;
  icon: ReactElement<LucideIcon>;
  title: string;
  color: string;
  cards: AdviceCardProps[];
}

const AdvicePage: React.FC = () => {
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const adviceData: AdviceData[] = [
    {
      range: "80-100%",
      icon: <AlertTriangle size={48} color="red" />,
      title: "High Risk",
      color: "error.main",
      cards: [
        { 
          icon: <Heart size={24} />, 
          title: "Welcome To The Gym", 
          points: [
            "First things first, delete their contact details.",
            "Reach out to trusted friends or family for support.",
            "Consider seeking professional help from a therapist.",
            "Remember you deserve respect and healthy love.",
            "Focus on self-care and rebuilding your self-esteem."
          ],
          color: "#d32f2f"
        }
      ]
    },
    {
      range: "50-79%",
      icon: <Frown size={48} color="orange" />,
      title: "Moderate Risk",
      color: "warning.main",
      cards: [
        {
          icon: <Shield size={24} />,
          title: "Address Issues Promptly",
          points: [
            "Open a dialogue with your partner about concerns.",
            "Set clear boundaries and communicate needs effectively.",
            "Consider couples counseling to work through issues.",
            "Take time for self-reflection and personal growth.",
            "Don't ignore red flags - address them honestly."
          ],
          color: "#ed6c02"
        },
        {
          icon: <Eye size={24} />,
          title: "Constantly Evaluate the Situation",
          points: [
            "Regularly assess the health of your relationship.",
            "Be honest with yourself about improvements or lack thereof.",
            "Consider if your needs and values are being respected.",
            "Evaluate the impact of the relationship on your overall well-being.",
            "Don't hesitate to seek outside perspectives from trusted friends or professionals.",
            "This is really close to a giant red flag, so be careful."
          ],
          color: "#ed6c02"
        }
      ]
    },
    {
      range: "30-49%",
      icon: <Smile size={48} color="yellow" />,
      title: "Some Concerns",
      color: "info.main",
      cards: [
        {
          icon: <Brain size={24} />,
          title: "Stay Vigilant",
          points: [
            "Continue to communicate openly with your partner.",
            "Work on building trust and mutual respect.",
            "Address small issues before they become larger.",
            "Invest time in understanding each other's needs.",
            "Remember healthy relationships require ongoing effort."
          ],
          color: "#0288d1"
        }
      ]
    },
    {
      range: "0-29%",
      icon: <ThumbsUp size={48} color="green" />,
      title: "Low Risk",
      color: "success.main",
      cards: [
        {
          icon: <Zap size={24} />,
          title: "Maintain and Grow",
          points: [
            "Continue nurturing your relationship with open communication.",
            "Regularly check in with each other about needs and feelings.",
            "Celebrate your strengths as a couple.",
            "Keep working on individual personal growth.",
            "Remember all relationships face challenges - it's how you handle them that matters."
          ],
          color: "#2e7d32"
        }
      ]
    }
  ];

  const movingOnCard: AdviceCardProps = {
    icon: <ArrowRight size={24} />,
    title: "Moving On",
    points: [
      "Give yourself some time to recover",
      "Focus on self-improvement and personal growth",
      "Go on a short holiday",
      "Exercise Exercise Exercise! We have some sample down below",
      "Seek professional help if needed"
    ],
    color: "#9c27b0"
  };
  
  const isHighRisk = value === 0;

  return (
    <>
      <Helmet>
        <title>Relationship Advice & Guidance | Your App Name</title>
        <meta name="description" content="Get personalized relationship advice and guidance based on your risk level. Find tips for maintaining healthy relationships and moving on from difficult situations." />
        <meta name="keywords" content="relationship advice, dating tips, breakup advice, healthy relationships" />
        <link rel="canonical" href="https://yourapp.com/advice" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Paper elevation={1} className="advice-container">
        <Typography variant="h4" gutterBottom className="advice-title">
          Relationship Insights & Guidance
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="advice tabs"
          centered
          className="advice-tabs"
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : false}
          allowScrollButtonsMobile
        >
          {adviceData.map((data, index) => (
            <Tab 
              key={index} 
              label={isMobile ? data.range : `${data.range}`}
              icon={data.icon} 
              iconPosition="start"
              className="advice-tab"
            />
          ))}
        </Tabs>
        {adviceData.map((data, index) => (
          <Box key={index} hidden={value !== index} className="advice-tabpanel">
            <Typography variant="h5" gutterBottom align="center" style={{ color: data.color }} className="advice-section-title">
              {data.title}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {data.cards.map((card, cardIndex) => (
                <Grid item xs={12} key={cardIndex}>
                  <AdviceCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
        {isHighRisk && (
          <>
            <Box mt={4}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                  <AdviceCard {...movingOnCard} />
                </Grid>
              </Grid>
            </Box>
            <Suspense fallback={<div>Loading training options...</div>}>
              <TrainingOptions />
            </Suspense>

            <Box mt={4}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')} className="suicide-prevention-accordion">
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <AlertTriangle size={24} color="red" style={{ marginRight: '10px' }} />
                  <Typography sx={{ flexShrink: 0 }}>
                    If you're feeling suicidal
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>
                    If you're having thoughts of suicide, please reach out for help immediately. You're not alone, and support is available.
                  </Typography>
                  <Typography paragraph>
                    Nobody is worth stressing over. People come and go. Life goes on.
                  </Typography>
                  <Typography variant="h6" gutterBottom>Suicide Prevention Hotline:</Typography>
                  <Typography paragraph>
                    United States: 1-800-273-8255 (National Suicide Prevention Lifeline)<br />
                    Available 24 hours everyday
                  </Typography>
                  <Typography>
                    Remember, your life matters. Professional help and support are available to get you through this difficult time.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </>
        )}
      </Paper>
    </>
  );
};

export default AdvicePage;