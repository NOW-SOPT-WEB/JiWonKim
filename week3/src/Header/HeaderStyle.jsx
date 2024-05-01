import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.lightColor};
`

export const GameTitle = styled.h1`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 50px;
    color: ${props => props.theme.colors.mainColor};
`;

export const ScoreContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GameScore = styled.h3`
    margin: 10px;
    font-size: 30px;
    color: ${props => props.theme.colors.mainColor};
`;

export const GameLevelBtn = styled.button`
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
