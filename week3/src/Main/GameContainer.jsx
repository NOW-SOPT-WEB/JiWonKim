import { useEffect, useState } from "react";
import Card from "./Card/Card";
import styled from "styled-components";

const gameLevel = [
    {level: 'Easy', cardNum: 5},
    {level: 'Normal', cardNum: 7},
    {level: 'Hard', cardNum: 9},
]

const GameLevelBtnContainer = styled.div`
    display: flex;
`;

const GameLevelBtn = styled.button`
    width: 100px;
    height: 50px;
    margin: 20px;
    font-size: 20px;
    background-color: ${(props) => props.isActive ? props.theme.colors.highlightColor : props.theme.colors.lightColor};
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const cardData = [
    {id: 1, backImg: 'src/assets/back1.png'},
    {id: 2, backImg: 'src/assets/back2.png'},
    {id: 3, backImg: 'src/assets/back3.png'},
    {id: 4, backImg: 'src/assets/back4.png'},
    {id: 5, backImg: 'src/assets/back5.png'},
    {id: 6, backImg: 'src/assets/back6.png'},
    {id: 7, backImg: 'src/assets/back7.png'},
    {id: 8, backImg: 'src/assets/back8.png'},
    {id: 9, backImg: 'src/assets/back9.png'}
]

const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    margin: 50px 100px;
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;    
`;

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
        <GameLevelBtnContainer>
            {gameLevel.map(item => (
                <GameLevelBtn key={item.level} onClick={() => handelLavelChange(item.level)}
                isActive={currentLevel === item.level}>
                {item.level}
                </GameLevelBtn>
            ))}
        </GameLevelBtnContainer>
        <CardContainer>
            {finalArr.map((card) => (
                <Card
                    key={card.index}
                    front={<CardImg src="src/assets/frontImg.png" alt="frontImg of Card" />}
                    back={<CardImg src={card.backImg} alt="backImg of Card" />}
                    currentLevel={currentLevel}
                />
            ))}
        </CardContainer>
        </>
        
    )

}

export default GameContainer;