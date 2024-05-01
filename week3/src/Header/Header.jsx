import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.lightColor};
`

const GameTitle = styled.h1`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 50px;
    color: ${props => props.theme.colors.mainColor};
`;

const ScoreContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GameScore = styled.h3`
    margin: 10px;
    font-size: 30px;
    color: ${props => props.theme.colors.mainColor};
`;

const GameLevelBtn = styled.button`
    top: 20px;
    right: 20px;
    position: absolute;
    width: 100px;
    height: 50px;
    font-size: 20px;
    background-color: ${(props) => props.theme.colors.highlightColor};
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

function Header() {
    return (
        <HeaderContainer>
            <GameTitle>
                cardgame ㅎㅇㅎㅇ
            </GameTitle>
            <GameLevelBtn>Reset</GameLevelBtn>
            <ScoreContainer>
                <GameScore>0</GameScore>
                <GameScore>/</GameScore>
                <GameScore>0</GameScore>
            </ScoreContainer>
        </HeaderContainer>
    )
}

export default Header;