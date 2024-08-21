// HIITRoutines.tsx
import React, { lazy, Suspense } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Helmet } from 'react-helmet';

const Navbar = lazy(() => import('./NavBar'));

const weeklyHIITRoutine = [
  {
    day: "Monday",
    routine: "Full Body HIIT",
    exercises: [
      "Warm-up: 5 minutes of light cardio",
      "Circuit (repeat 3 times): 30 seconds each, 10 seconds rest between exercises",
      "- Burpees",
      "- Mountain Climbers",
      "- Squat Jumps",
      "- Push-ups",
      "- High Knees",
      "Cool-down: 5 minutes of stretching"
    ]
  },
  {
    day: "Tuesday",
    routine: "Rest or Light Activity",
    exercises: [
      "Rest day or 20-30 minutes of light walking or yoga"
    ]
  },
  {
    day: "Wednesday",
    routine: "Lower Body HIIT",
    exercises: [
      "Warm-up: 5 minutes of light cardio",
      "Circuit (repeat 3 times): 40 seconds each, 20 seconds rest between exercises",
      "- Squat Jumps",
      "- Lunges (alternating legs)",
      "- Wall Sit",
      "- Calf Raises",
      "- Plank",
      "Cool-down: 5 minutes of stretching"
    ]
  },
  {
    day: "Thursday",
    routine: "Rest or Light Activity",
    exercises: [
      "Rest day or 20-30 minutes of light walking or yoga"
    ]
  },
  {
    day: "Friday",
    routine: "Upper Body HIIT",
    exercises: [
      "Warm-up: 5 minutes of light cardio",
      "Circuit (repeat 3 times): 30 seconds each, 15 seconds rest between exercises",
      "- Push-ups",
      "- Tricep Dips",
      "- Mountain Climbers",
      "- Plank to Downward Dog",
      "- Arm Circles",
      "Cool-down: 5 minutes of stretching"
    ]
  },
  {
    day: "Saturday",
    routine: "Cardio HIIT",
    exercises: [
      "Warm-up: 5 minutes of light cardio",
      "Intervals: 30 seconds high intensity, 30 seconds rest (repeat 10 times)",
      "Choose from: Sprinting, Jump Rope, Burpees, or High Knees",
      "Cool-down: 5 minutes of stretching"
    ]
  },
  {
    day: "Sunday",
    routine: "Rest",
    exercises: [
      "Complete rest to allow for recovery and prevent injury"
    ]
  }
];

const HIITRoutines: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Weekly HIIT Routine | Your App Name</title>
          <meta name="description" content="Explore our comprehensive weekly HIIT (High-Intensity Interval Training) routine. Get fit with varied daily exercises targeting different body parts." />
          <meta name="keywords" content="HIIT, workout, fitness, exercise routine, high-intensity interval training" />
          <link rel="canonical" href="https://yourapp.com/hiit-routines" />
        </Helmet>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto', mt: 4 }}>
          <Typography variant="h1" gutterBottom align="center" sx={{ fontSize: '2.125rem', fontWeight: 400 }}>
            Weekly HIIT Routine
          </Typography>
          {weeklyHIITRoutine.map((day, index) => (
            <React.Fragment key={day.day}>
              <Typography variant="h2" gutterBottom sx={{ mt: 2, fontSize: '1.25rem', fontWeight: 500 }}>
                {day.day}: {day.routine}
              </Typography>
              <List aria-label={`${day.day} routine`}>
                {day.exercises.map((exercise, exIndex) => (
                  <ListItem key={exIndex} disablePadding>
                    <ListItemText primary={exercise} />
                  </ListItem>
                ))}
              </List>
              {index < weeklyHIITRoutine.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Paper>
      </>
    );
  };
  
  export default HIITRoutines;