import styled from "styled-components";
import GameContainer from "./GameContainer";

const MainContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function Main({ currentLevel, handleLevelChange }) {
    return (
        <MainContainer>
            <GameContainer currentLevel={currentLevel} handleLevelChange={handleLevelChange} />
        </MainContainer>
    )
}

export default Main;