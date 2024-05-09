import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import { useState } from "react";
import Header from './Header/Header.jsx';
import GameContainer from './Main/GameContainer.jsx';
import gameLevel from './Main/LevelData.jsx';


function App() {
  const [currentLevel, setCurrentLevel] = useState(gameLevel[0].level);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(gameLevel[0].cardNum);
  const [reset, setReset] = useState(false);

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    const levelData = gameLevel.find(item => item.level === level);
    setMaxScore(levelData.cardNum);
  }

  const handleCurrentLevel = (level) => {
    setCurrentLevel(level);
  };
  
  const handleCurrentScore = (score) => {
    setCurrentScore(score);
  };
  
  const handleMaxScore = (score) => {
    setMaxScore(score);
  };

  const handleReset = () => {
    setReset(prev => !prev);
    setCurrentLevel(gameLevel[0].level);  
    setCurrentScore(0); 
    setMaxScore(gameLevel[0].cardNum);  
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Header currentScore={currentScore} maxScore={maxScore} handleReset={handleReset} />
        <GameContainer 
          currentLevel={currentLevel} 
          handleCurrentLevel={handleCurrentLevel} 
          handleLevelChange={handleLevelChange} 
          currentScore={currentScore} 
          handleCurrentScore={handleCurrentScore } 
          maxScore={maxScore} 
          handleMaxScore={handleMaxScore} 
          reset={reset}/>
      </main>
      
    </ThemeProvider>
  );
}

export default App;