import React, { lazy, Suspense } from 'react';
import { Typography, Paper, Divider } from '@mui/material';
import { Helmet } from 'react-helmet';

// Lazy-loaded Navbar component
const Navbar = lazy(() => import('./NavBar'));

const weeklyRunningRoutine = [
  {
    day: "Monday",
    routine: "Easy Run",
    description: "30-minute easy-paced run to build endurance"
  },
  {
    day: "Tuesday",
    routine: "Interval Training",
    description: "Warm up 10 minutes, then 8x400m sprints with 90 seconds rest between each, cool down 10 minutes"
  },
  {
    day: "Wednesday",
    routine: "Rest or Cross-Training",
    description: "Take a rest day or do low-impact cross-training like swimming or cycling"
  },
  {
    day: "Thursday",
    routine: "Tempo Run",
    description: "10-minute warm-up, 20 minutes at tempo pace (slightly harder than conversational pace), 10-minute cool-down"
  },
  {
    day: "Friday",
    routine: "Easy Run",
    description: "30-minute easy-paced run to recover and maintain base fitness"
  },
  {
    day: "Saturday",
    routine: "Long Run",
    description: "45-60 minute run at a comfortable, conversational pace to build endurance"
  },
  {
    day: "Sunday",
    routine: "Rest",
    description: "Complete rest to allow for recovery and prevent injury"
  }
];

const RunningRoutines: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Weekly Running Routine | Your App Name</title>
          <meta name="description" content="Discover our comprehensive weekly running routine. Improve your endurance and speed with varied daily running exercises." />
          <meta name="keywords" content="running routine, workout plan, fitness, endurance training, interval training" />
          <link rel="canonical" href="https://yourapp.com/running-routines" />
        </Helmet>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto', mt: 4 }}>
          <Typography variant="h1" gutterBottom align="center" sx={{ fontSize: '2.125rem', fontWeight: 400 }}>
            Weekly Running Routine
          </Typography>
          {weeklyRunningRoutine.map((day, index) => (
            <React.Fragment key={day.day}>
              <Typography variant="h2" gutterBottom sx={{ mt: 2, fontSize: '1.25rem', fontWeight: 500 }}>
                {day.day}: {day.routine}
              </Typography>
              <Typography variant="body1" component="p">
                {day.description}
              </Typography>
              {index < weeklyRunningRoutine.length - 1 && <Divider sx={{ my: 2 }} />}
            </React.Fragment>
          ))}
        </Paper>
      </>
    );
  };
  
  export default RunningRoutines;