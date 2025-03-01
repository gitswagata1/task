import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FeedbackPage from './pages/FeedbackPage';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;