import { useEffect, useState } from "react";
import * as S from './CardStyle'


function Card({ front, back, currentLevel }) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
    }, [currentLevel]);

    const handleCard = () => {
        setIsFlipped(prev => !prev)
    }

    return (
        <S.StyleCard isFlipped={isFlipped} onClick={handleCard}>
            {isFlipped ? back : front }
        </S.StyleCard>
    )
}

export default Card;