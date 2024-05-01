import { useEffect, useState } from "react";
import styled from "styled-components";

const StyleCard = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    overflow: hidden;
    background-color: ${props => props.theme.colors.mainColor};
    border: 2px solid ${props => props.isFlipped ? 'black' : 'lightgray'};
    border-radius: 10px;
`;


function Card({ front, back, currentLevel }) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
    }, [currentLevel]);

    const handleCard = () => {
        setIsFlipped(prev => !prev)
    }

    return (
        <StyleCard isFlipped={isFlipped} onClick={handleCard}>
            {isFlipped ? back : front }
        </StyleCard>
    )
}

export default Card;