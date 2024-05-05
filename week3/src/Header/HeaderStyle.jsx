import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: auto;
    padding-top: 0.625rem;
    background-color: ${({theme}) => theme.colors.lightColor};
`;

export const GameTitle = styled.h1`
    width: 100%;
    height: 6.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 3.125rem;
    color: ${({theme}) => theme.colors.mainColor};
`;

export const ScoreContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GameScore = styled.h3`
    margin: 0 0.625rem 1.25rem 0.625rem;
    font-size: 2.5rem;
    color: ${({theme}) => theme.colors.mainColor};
`;

export const GameResetBtn = styled.button`
    top: 1.875rem;
    right: 1.25rem;
    position: absolute;
    width: 6.25rem;
    height: 3.125rem;
    font-size: 1.25rem;
    background-color: ${({theme}) => theme.colors.highlightColor};
    border: none;
    border-radius: 0.625rem;
    cursor: pointer;
`;
