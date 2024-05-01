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

export const StyleCard = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    margin: 20px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const FlipCardInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
    
    &.flip {
        transform: rotateY(180deg);
    }
`;

export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 2px solid lightgray;
    border-radius: 10px;
`;

export const CardBack = styled(CardFront)`
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    border-color: black;
`;

export const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.translucency};
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-size: 50px;
`;

export const ModalContentStyle = styled.div`
    background: ${props => props.theme.colors.lightColor};
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 50%;  
    height: 30%; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
