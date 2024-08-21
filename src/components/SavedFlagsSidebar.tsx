import React, { useState } from 'react';
import { SavedFlag } from './types';

interface SavedFlagsSidebarProps {
  savedFlags: SavedFlag[];
  onFlagClick: (flag: SavedFlag) => void;
  onDeleteFlag: (flagName: string) => void;
}

const SavedFlagsSidebar: React.FC<SavedFlagsSidebarProps> = ({ savedFlags, onFlagClick, onDeleteFlag }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [flagToDelete, setFlagToDelete] = useState<string | null>(null);

  const handleDeleteClick = (e: React.MouseEvent, flagName: string) => {
    e.stopPropagation();
    setFlagToDelete(flagName);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (flagToDelete) {
      onDeleteFlag(flagToDelete);
      setShowDeleteModal(false);
      setFlagToDelete(null);
    }
  };

  return (
    <div className="sidebar">
      <h2>Saved Flags</h2>
      {savedFlags.map((flag, index) => (
        <div 
          key={index} 
          className={`saved-flag ${flag.isRedFlag ? 'red-flag' : 'green-flag'}`}
          onClick={() => onFlagClick(flag)}
        >
          <span>{flag.name}</span>
          <button 
            onClick={(e) => handleDeleteClick(e, flag.name)}
            className="delete-button"
          >
            🗑️
          </button>
        </div>
      ))}

      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete "{flagToDelete}"?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="delete-button">
                Delete
              </button>
              <button onClick={() => setShowDeleteModal(false)} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedFlagsSidebar;