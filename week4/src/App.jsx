import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import JoinPage from './components/Join/JoinPage';
import MyPage from './components/MyPage/MyPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/info/:memberId" element={<MyPage />} />
        </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App
