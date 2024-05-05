import styled from "styled-components";

export const GameLevelBtnContainer = styled.div`
    display: flex;
`;

export const GameLevelBtn = styled.button`
    width: 6.25rem;
    height: 3.125rem;
    margin: 1.25rem;
    font-size: 1.25rem;
    background-color: ${(props) => props.isActive ? props.theme.colors.highlightColor : props.theme.colors.lightColor};
    border: none;
    border-radius: 0.625rem;
    cursor: pointer;
`;
