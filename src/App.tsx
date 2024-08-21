import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
import theme from './Theme';

// Lazy load components
const RedFlagQuiz = lazy(() => import('./pages/RedFlagQuiz'));
const AdvicePage = lazy(() => import('./pages/AdvicePage'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const GymRoutines = lazy(() => import('./components/GymRoutines'));
const HIITRoutines = lazy(() => import('./components/HIITRoutines'));
const RunningRoutines = lazy(() => import('./components/RunningRoutines'));
const PrivacyPolicy = lazy(() => import('./components/Privacy'));

// Error Boundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </div>
);

const App: React.FC = () => {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<RedFlagQuiz />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/advice" element={<AdvicePage />} />
              <Route path="/gym-routines" element={<GymRoutines />} />
              <Route path="/hiit-routines" element={<HIITRoutines />} />
              <Route path="/running-routines" element={<RunningRoutines />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default App;