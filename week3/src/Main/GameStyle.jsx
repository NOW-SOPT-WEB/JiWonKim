import styled from "styled-components";

export const GameLevelBtnContainer = styled.div`
    display: flex;
`;

export const GameLevelBtn = styled.button`
    width: 100px;
    height: 50px;
    margin: 20px;
    font-size: 20px;
    background-color: ${(props) => props.isActive ? props.theme.colors.highlightColor : props.theme.colors.lightColor};
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    margin: 50px 100px;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;    
`;
