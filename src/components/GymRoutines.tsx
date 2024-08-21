import React, { lazy, Suspense } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Helmet } from 'react-helmet';

const Navbar = lazy(() => import('./NavBar'));

const weeklyRoutine = [
  {
    day: "Monday",
    routine: "Chest and Triceps",
    exercises: [
      "Bench Press: 3 sets of 8-12 reps",
      "Incline Dumbbell Press: 3 sets of 10-12 reps",
      "Chest Flyes: 3 sets of 12-15 reps",
      "Tricep Pushdowns: 3 sets of 12-15 reps",
      "Overhead Tricep Extensions: 3 sets of 10-12 reps"
    ]
  },
  {
    day: "Tuesday",
    routine: "Back and Biceps",
    exercises: [
      "Deadlifts: 3 sets of 6-8 reps",
      "Pull-ups or Lat Pulldowns: 3 sets of 8-12 reps",
      "Seated Cable Rows: 3 sets of 10-12 reps",
      "Barbell Bicep Curls: 3 sets of 10-12 reps",
      "Hammer Curls: 3 sets of 12-15 reps"
    ]
  },
  {
    day: "Wednesday",
    routine: "Rest or Light Cardio",
    exercises: [
      "30-45 minutes of walking, swimming, or cycling at a moderate pace"
    ]
  },
  {
    day: "Thursday",
    routine: "Legs and Shoulders",
    exercises: [
      "Squats: 3 sets of 8-12 reps",
      "Leg Press: 3 sets of 10-12 reps",
      "Leg Curls: 3 sets of 12-15 reps",
      "Shoulder Press: 3 sets of 8-12 reps",
      "Lateral Raises: 3 sets of 12-15 reps"
    ]
  },
  {
    day: "Friday",
    routine: "Full Body or Lagging Body Parts",
    exercises: [
      "Choose 5-6 exercises targeting areas you want to improve",
      "Perform 3 sets of 10-15 reps for each exercise"
    ]
  },
  {
    day: "Saturday",
    routine: "Active Recovery",
    exercises: [
      "Light jog or brisk walk for 30 minutes",
      "Stretching and foam rolling"
    ]
  },
  {
    day: "Sunday",
    routine: "Rest",
    exercises: [
      "Complete rest or light stretching"
    ]
  }
];

const GymRoutines: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Weekly Gym Routine | Your App Name</title>
          <meta name="description" content="Explore our comprehensive weekly gym routine. Get fit with varied daily exercises targeting different muscle groups." />
          <meta name="keywords" content="gym routine, workout plan, fitness, weightlifting, strength training" />
          <link rel="canonical" href="https://yourapp.com/gym-routines" />
        </Helmet>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto', mt: 4 }}>
          <Typography variant="h1" gutterBottom align="center" sx={{ fontSize: '2.125rem', fontWeight: 400 }}>
            Weekly Gym Routine
          </Typography>
          {weeklyRoutine.map((day, index) => (
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
              {index < weeklyRoutine.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Paper>
      </>
    );
  };
  
  export default GymRoutines;