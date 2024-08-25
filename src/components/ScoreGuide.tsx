import React from 'react';
import { Chip, Tooltip, Box } from '@mui/material';
import { AlertTriangle, Frown, Smile, ThumbsUp } from 'lucide-react';
import './ScoreGuide.css';

const ScoreGuide: React.FC = () => (
  <Box className="score-guide-container">
    <Box className="score-chips">
      <Tooltip title="High-risk relationship dynamics detected. RUN.">
        <Chip
          label="80-100%"
          icon={<AlertTriangle size={20} color="red" />}
          className="score-chip high-risk"
        />
      </Tooltip>
      <Tooltip title="Moderate risk factors present. Be aware and communicate openly.">
        <Chip
          label="50-79%"
          icon={<Frown size={20} color="orange" />}
          className="score-chip moderate-risk"
        />
      </Tooltip>
      <Tooltip title="Some potential issues. Keep an eye on these behaviors.">
        <Chip
          label="30-49%"
          icon={<Smile size={20} color="yellow" />}
          className="score-chip some-risk"
        />
      </Tooltip>
      <Tooltip title="Low risk detected. Remember, healthy relationships require ongoing effort.">
        <Chip
          label="0-29%"
          icon={<ThumbsUp size={20} color="green" />}
          className="score-chip low-risk"
        />
      </Tooltip>
    </Box>
  </Box>
);

export default ScoreGuide;