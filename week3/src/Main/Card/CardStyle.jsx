import styled from "styled-components";

export const StyleCard = styled.div`
    width: 6.25rem;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.25rem;
    overflow: hidden;
    border: 0.125rem solid ${props => props.isFlipped ? 'black' : 'lightgray'};
    border-radius: 0.625rem;
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
    transform: rotateY(180deg);
    border-color: black;
`;
