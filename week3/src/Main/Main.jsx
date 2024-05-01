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


function Main() {
    return (
        <MainContainer>
            <GameContainer/>
        </MainContainer>
    )
}

export default Main;