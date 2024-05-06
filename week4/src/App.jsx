import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import LoginPage from './Login/LoginPage';
import JoinPage from './Join/JoinPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App
