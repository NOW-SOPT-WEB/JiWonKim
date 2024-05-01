import { useEffect, useState } from "react";
import Card from "./Card/Card";
import cardData from "./Card/CardData";
import gameLevel from "./LevelData";
import * as S from './GameStyle'


function GameContainer() {
    const [currentLevel, setCurrentLevel] = useState(gameLevel[0].level);
    const [finalArr, setFinalArr] = useState([]);

    const handelLavelChange = (level) => {
        setCurrentLevel(level);
    }

    useEffect(() => {
        const cardNum = gameLevel.find(item => item.level === currentLevel).cardNum;
        console.log(currentLevel, cardNum);
        let randomArr = cardData.sort(() => Math.random() - 0.5);
        // console.log(randomArr)
        let selectRamdomArr = randomArr.slice(0, cardNum);
        // console.log(selectRamdomArr)

        let finalArr = [...selectRamdomArr, ...selectRamdomArr].sort(() => Math.random() - 0.5);
        console.log(finalArr)

        setFinalArr(finalArr);
    }, [currentLevel]);


    return (
        <>
        <S.GameLevelBtnContainer>
            {gameLevel.map(item => (
                <S.GameLevelBtn key={item.level} onClick={() => handelLavelChange(item.level)}
                isActive={currentLevel === item.level}>
                {item.level}
                </S.GameLevelBtn>
            ))}
        </S.GameLevelBtnContainer>
        <S.CardContainer>
            {finalArr.map((card) => (
                <Card
                    key={card.index}
                    front={<S.CardImg src="src/assets/frontImg.png" alt="frontImg of Card" />}
                    back={<S.CardImg src={card.backImg} alt="backImg of Card" />}
                    currentLevel={currentLevel}
                />
            ))}
        </S.CardContainer>
        </>
        
    )

}

export default GameContainer;