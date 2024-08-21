// TrainingOptions.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Dumbbell, Zap as Lightning, Activity } from 'lucide-react';

interface TrainingOptionProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const TrainingOption: React.FC<TrainingOptionProps> = ({ icon, title, onClick }) => (
  <Button
    variant="outlined"
    onClick={onClick}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '120px',
      borderRadius: '16px',
      border: '2px solid',
      '&:hover': {
        border: '2px solid',
      },
    }}
  >
    {icon}
    <Typography variant="subtitle1" sx={{ mt: 1 }}>
      {title}
    </Typography>
  </Button>
);

const TrainingOptions: React.FC = () => {
  const navigate = useNavigate();

  const handleTrainingSelect = (type: string) => {
    switch (type) {
      case 'Gym':
        navigate('/gym-routines');
        break;
      case 'HIIT':
        navigate('/hiit-routines');
        break;
      case 'Running':
        navigate('/running-routines');
        break;
      default:
        console.log(`${type} training selected`);
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom align="center">
        Choose Your Training
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <TrainingOption
            icon={<Dumbbell size={32} />}
            title="Gym"
            onClick={() => handleTrainingSelect('Gym')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TrainingOption
            icon={<Lightning size={32} />}
            title="HIIT"
            onClick={() => handleTrainingSelect('HIIT')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TrainingOption
            icon={<Activity size={32} />}
            title="Running"
            onClick={() => handleTrainingSelect('Running')}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainingOptions;