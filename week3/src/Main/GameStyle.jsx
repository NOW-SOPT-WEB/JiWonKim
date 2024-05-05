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

export const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    margin: 3.125rem 6.25rem;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;    
`;

export const StyleCard = styled.div`
    width: 6.25rem;
    height: 9.375rem;
    display: flex;
    margin: 1.25rem;
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
    border: 0.125rem solid lightgray;
    border-radius: 0.625rem;
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
    background-color: ${({theme}) => theme.colors.translucency};
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-size: 3.125rem;
`;

export const ModalContentStyle = styled.div`
    background: ${({theme}) => theme.colors.lightColor};
    padding: 1.25rem;
    border-radius: 0.625rem;
    text-align: center;
    width: 50%;  
    height: 30%; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
