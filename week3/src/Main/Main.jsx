import * as S from './MainStyle'
import GameContainer from "./GameContainer";


function Main({ currentLevel, setCurrentLevel, handleLevelChange, currentScore, setCurrentScore, maxScore, setMaxScore, reset }) {
    return (
        <S.MainContainer>
            <GameContainer currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} handleLevelChange={handleLevelChange} currentScore={currentScore} setCurrentScore={setCurrentScore} maxScore={maxScore} setMaxScore={setMaxScore} reset={reset}/>
        </S.MainContainer>
    )
}

export default Main;