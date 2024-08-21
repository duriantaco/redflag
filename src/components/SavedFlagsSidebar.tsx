import React from 'react';
import { SavedFlag } from './types';

interface SavedFlagsSidebarProps {
  savedFlags: SavedFlag[];
  onFlagClick: (flag: SavedFlag) => void;
  onDeleteFlag: (flagName: string) => void;
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

const SavedFlagsSidebar: React.FC<SavedFlagsSidebarProps> = ({
  savedFlags,
  onFlagClick,
  onDeleteFlag,
  isOpen,
  onClose,
  isMobile
}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
      {isMobile && (
        <button className="close-sidebar" onClick={onClose}>&times;</button>
      )}
      <h2>Saved Flags</h2>
      {savedFlags.map((flag) => (
        <div key={flag.name} className={`saved-flag ${flag.isRedFlag ? 'red-flag' : 'green-flag'}`}>
          <span onClick={() => onFlagClick(flag)}>{flag.name}</span>
          <button className="delete-button" onClick={() => onDeleteFlag(flag.name)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedFlagsSidebar;