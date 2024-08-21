import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AlertTriangle, Frown, Smile, ThumbsUp, ChevronRight, ChevronLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';
import './RedFlagQuiz.css';
import { Flags, SavedFlag } from '../components/types';
import { initialFlags } from '../components/initialFlags';

// Lazy-loaded components
const NavBar = lazy(() => import('../components/NavBar'));
const SavedFlagsSidebar = lazy(() => import('../components/SavedFlagsSidebar'));

const RedFlagQuiz: React.FC = () => {
  const [flags, setFlags] = useState<Flags>(initialFlags);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [riskLevel, setRiskLevel] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [personName, setPersonName] = useState('');
  const [isRedFlag, setIsRedFlag] = useState(true);
  const [selectedSavedFlag, setSelectedSavedFlag] = useState<SavedFlag | null>(null);
  const [savedFlags, setSavedFlags] = useState<SavedFlag[]>(() => {
    const saved = localStorage.getItem('savedFlags');
    return saved ? JSON.parse(saved) : [];
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    localStorage.setItem('savedFlags', JSON.stringify(savedFlags));
  }, [savedFlags]);

  const handleFlagClick = (key: string) => {
    setFlags(prevFlags => ({
      ...prevFlags,
      [key]: {
        ...prevFlags[key],
        isSelected: !prevFlags[key].isSelected,
        selectedOption: !prevFlags[key].isSelected ? null : prevFlags[key].selectedOption
      }
    }));
  };

  const handleOptionSelect = (flagKey: string, optionIndex: number) => {
    setFlags(prevFlags => ({
      ...prevFlags,
      [flagKey]: {
        ...prevFlags[flagKey],
        selectedOption: optionIndex,
        isSelected: true
      }
    }));
  };

  const handleSavedFlagClick = (flag: SavedFlag) => {
    setSelectedSavedFlag(flag);
    setFlags(flag.flags);
    setQuizCompleted(false);
    setRiskLevel(0);
  };

  const handleDeleteFlag = (flagName: string) => {
    setSavedFlags(prevFlags => prevFlags.filter(flag => flag.name !== flagName));
  };

  const calculateScore = () => {
    const { totalScore, maxPossibleScore } = Object.values(flags).reduce((acc, flag) => {
      if (flag.isSelected) {
        if (flag.type === 'simple') {
          acc.totalScore += flag.weightage || 0;
        } else if (flag.selectedOption !== null) {
          acc.totalScore += flag.options![flag.selectedOption].weightage;
        }
      }
      if (flag.type === 'simple') {
        acc.maxPossibleScore += flag.weightage || 0;
      } else {
        acc.maxPossibleScore += Math.max(...(flag.options?.map(option => option.weightage) || []));
      }
      return acc;
    }, { totalScore: 0, maxPossibleScore: 0 });

    const riskPercentage = (totalScore / maxPossibleScore) * 100;
    setRiskLevel(Math.round(riskPercentage));
    setQuizCompleted(true);
  };

  const getResultEmoji = () => {
    if (riskLevel >= 80) return <AlertTriangle size={48} color="red" />;
    if (riskLevel >= 50) return <Frown size={48} color="orange" />;
    if (riskLevel >= 30) return <Smile size={48} color="yellow" />;
    return <ThumbsUp size={48} color="green" />;
  };

  const getResultText = () => {
    if (riskLevel >= 80) return "High-risk relationship dynamics detected. RUN.";
    if (riskLevel >= 50) return "Moderate risk factors present. Be aware and communicate openly.";
    if (riskLevel >= 30) return "Some potential issues. Keep an eye on these behaviors.";
    return "Low risk detected. Remember, healthy relationships require ongoing effort.";
  };

  const saveFlag = () => {
    if (personName.trim()) {
      setSavedFlags(prevFlags => [...prevFlags, { name: personName.trim(), isRedFlag, flags }]);
      setPersonName('');
      setShowModal(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Relationship Dynamics Analyzer | Red Flag Quiz</title>
        <meta name="description" content="Analyze your relationship dynamics and identify potential red flags with our interactive quiz." />
        <meta name="keywords" content="relationship quiz, red flags, relationship dynamics, dating advice" />
        <link rel="canonical" href="https://yourapp.com/red-flag-quiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
      </Suspense>

      <div className="app-container">
        {isMobile && (
          <button 
            className={`toggle-sidebar-button ${isSidebarOpen ? 'open' : ''}`} 
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        )}
        <div className={`quiz-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <h1 className="quiz-title">🚩 Relationship Dynamics Analyzer 🚩</h1>
          <p className="quiz-intro">
            Not sure if they're red flags || Did you get played? 
          </p>

          <div className="quiz-questions">
            {Object.entries(flags).map(([key, flag]) => (
              <div key={key} className="quiz-item">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={flag.isSelected}
                    onChange={() => handleFlagClick(key)}
                  />
                  <span className="checkmark"></span>
                  <span className="checkbox-label">{flag.mainText}</span>
                </label>
                {flag.type === 'expandable' && flag.isSelected && (
                  <div className="expanded-options">
                    {flag.options!.map((option, index) => (
                      <button
                        key={index}
                        className={`option-button ${flag.selectedOption === index ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(key, index)}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="button-container">
            <button onClick={calculateScore} className="quiz-button">
              Analyze Relationship Dynamics
            </button>
            <button onClick={() => setShowModal(true)} className="save-button">
              Save This Flag
            </button>
          </div>
          {quizCompleted && (
            <div className="quiz-result">
              <div className={`result-content ${isMobile ? 'mobile' : ''}`}>
                {getResultEmoji()}
                <div className="result-text">
                  <h2>{getResultText()}</h2>
                  <p>Risk Level: {riskLevel}%</p>
                </div>
              </div>
              <p className="disclaimer">
                This quiz is not a diagnostic tool. For serious concerns, consider speaking with a relationship counselor.
              </p>
            </div>
          )}
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Save This Flag</h3>
              <input
                type="text"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder="Enter person's name"
              />
              <div className="modal-buttons">
                <button onClick={() => setIsRedFlag(true)} className={`flag-button ${isRedFlag ? 'active' : ''}`}>
                  Red Flag
                </button>
                <button onClick={() => setIsRedFlag(false)} className={`flag-button ${!isRedFlag ? 'active' : ''}`}>
                  Green Flag
                </button>
                <button onClick={saveFlag} className="save-button">
                  Save
                </button>
                <button onClick={() => setShowModal(false)} className="cancel-button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <SavedFlagsSidebar 
            savedFlags={savedFlags} 
            onFlagClick={handleSavedFlagClick} 
            onDeleteFlag={handleDeleteFlag}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            isMobile={isMobile}
          />
        </Suspense>
        {selectedSavedFlag && (
          <div className="modal">
            <div className="modal-content">
              <h3>{selectedSavedFlag.name}'s Flag Details</h3>
              <p>{selectedSavedFlag.isRedFlag ? 'Red Flag' : 'Green Flag'}</p>
              <ul>
                {Object.entries(selectedSavedFlag.flags).map(([key, value]) => (
                  value.isSelected && <li key={key}>{value.mainText}</li>
                ))}
              </ul>
              <button onClick={() => setSelectedSavedFlag(null)} className="cancel-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RedFlagQuiz;