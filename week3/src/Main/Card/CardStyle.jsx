import styled from "styled-components";

export const StyleCard = styled.div`
    width: 6.25rem;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.25rem;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.mainColor};
    border: 0.125rem solid ${props => props.isFlipped ? 'black' : 'lightgray'};
    border-radius: 0.625rem;
`;
