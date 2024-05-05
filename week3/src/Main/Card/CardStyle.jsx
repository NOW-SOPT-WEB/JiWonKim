import styled from "styled-components";

export const StyleCard = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.mainColor};
    border: 2px solid ${props => props.isFlipped ? 'black' : 'lightgray'};
    border-radius: 10px;
`;