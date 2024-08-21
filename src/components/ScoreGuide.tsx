import React from 'react';
import { Chip, Tooltip } from '@mui/material';
import { AlertTriangle, Frown, Smile, ThumbsUp } from 'lucide-react';

const ScoreGuide: React.FC = () => (
  <div className="score-chips">
    <Tooltip title="High-risk relationship dynamics detected. RUN.">
      <Chip
        label="80-100%"
        icon={<AlertTriangle size={20} color="red" />}
        style={{ backgroundColor: '#ffdddd', color: 'black', fontFamily: 'Anton, sans-serif' }}
      />
    </Tooltip>
    <Tooltip title="Moderate risk factors present. Be aware and communicate openly.">
      <Chip
        label="50-79%"
        icon={<Frown size={20} color="orange" />}
        style={{ backgroundColor: '#fff4e5', color: 'black', fontFamily: 'Anton, sans-serif' }}
      />
    </Tooltip>
    <Tooltip title="Some potential issues. Keep an eye on these behaviors.">
      <Chip
        label="30-49%"
        icon={<Smile size={20} color="yellow" />}
        style={{ backgroundColor: '#fffde5', color: 'black', fontFamily: 'Anton, sans-serif' }}
      />
    </Tooltip>
    <Tooltip title="Low risk detected. Remember, healthy relationships require ongoing effort.">
      <Chip
        label="0-29%"
        icon={<ThumbsUp size={20} color="green" />}
        style={{ backgroundColor: '#e5ffdd', color: 'black', fontFamily: 'Anton, sans-serif' }}
      />
    </Tooltip>
  </div>
);

export default ScoreGuide;