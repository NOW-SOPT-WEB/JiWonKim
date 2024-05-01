import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import { useState } from "react";
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import gameLevel from './Main/LevelData.jsx';


function App() {
  const [currentLevel, setCurrentLevel] = useState(gameLevel[0].level);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(gameLevel[0].cardNum);
  const [reset, setReset] = useState(false);

  const clickedReset = () => {
    setReset(prev => !prev); // 기존 상태를 반전시켜 변경을 유발
};

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    const levelData = gameLevel.find(item => item.level === level);
    setMaxScore(levelData.cardNum);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Header currentScore={currentScore} maxScore={maxScore} clickedReset={clickedReset} />
        <Main currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} handleLevelChange={handleLevelChange} currentScore={currentScore} setCurrentScore={setCurrentScore} maxScore={maxScore} setMaxScore={setMaxScore} reset={reset}/>
      </div>
      
    </ThemeProvider>
  );
}

export default App;
