import { useEffect, useState } from "react";
import cardData from "./Card/CardData";
import gameLevel from "./LevelData";
import * as S from './GameStyle'


function GameContainer({ currentLevel, setCurrentLevel, handleLevelChange, currentScore, setCurrentScore, maxScore, setMaxScore, reset}) {
    const [finalArr, setFinalArr] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        gameReset(); 
    }, [reset]);

    const gameReset = () => {
        setShowModal(false); 
        setCurrentLevel(gameLevel[0].level);
        setMaxScore(gameLevel[0].cardNum);
        setCurrentScore(0);

        const cardNum = gameLevel.find(item => item.level === currentLevel).cardNum;
        let randomArr = cardData.sort(() => Math.random() - 0.5);
        let selectRamdomArr = randomArr.slice(0, cardNum);
        let finalArr = [...selectRamdomArr, ...selectRamdomArr].sort(() => Math.random() - 0.5);

        finalArr.forEach(card => {
            card.isFlipped = false;
        });

        setFinalArr(finalArr);
    };

    useEffect(() => {
        if (currentScore === maxScore) {
            setShowModal(true);  
        }
    }, [currentScore, maxScore]);

    useEffect(() => {
        const cardNum = gameLevel.find(item => item.level === currentLevel).cardNum;
        let randomArr = cardData.sort(() => Math.random() - 0.5);
        let selectRamdomArr = randomArr.slice(0, cardNum);
        let finalArr = [...selectRamdomArr, ...selectRamdomArr].sort(() => Math.random() - 0.5);

        finalArr.forEach(card => {
            card.isFlipped = false;
        });

        setFinalArr(finalArr);
        setCurrentScore(0);
    }, [currentLevel]);

    const handleCardClick = (card, index) => {
        if (selectedCards.length === 2) return;


        const clicked = finalArr[index]
        const clickedStatus = !clicked.isFlipped;
        const newSelectedCards = [...selectedCards, {...clicked, index, isFlipped: clickedStatus }];
        setSelectedCards(newSelectedCards);

        const updatedFinalArr = finalArr.map((item, idx) => {
            if (idx === index) {
                return { ...item, isFlipped: !item.isFlipped };
            }
            return item;
        });

        setFinalArr(updatedFinalArr);


        if (newSelectedCards[0].id === newSelectedCards[1].id) {
            setCurrentScore(currentScore + 1);
        } else {
            setTimeout(() => {
                const resetCard = finalArr.map(item => {
                    if (newSelectedCards.some(selected => selected.id === item.id && selected.isFlipped)) {
                        return { ...item, isFlipped: false };
                    }
                    return item;
                });
                setFinalArr(resetCard);
            }, 500);
        }
        setSelectedCards([]); 

    };

    useEffect(() => {
    }, [selectedCards]);

    return (
        <>
        {showModal && (
        <S.ModalStyle>
            <S.ModalContentStyle>
                게임 성공!
                <button onClick={gameReset}>닫기</button>
            </S.ModalContentStyle>
        </S.ModalStyle> 
        )}
        <S.GameLevelBtnContainer>
            {gameLevel.map(item => (
                <S.GameLevelBtn key={item.level} onClick={() => handleLevelChange(item.level)}
                isActive={currentLevel === item.level}>
                {item.level}
                </S.GameLevelBtn>
            ))}
        </S.GameLevelBtnContainer>
        <S.CardContainer>
            {finalArr.map((card, index) => (
                <S.StyleCard key={index} onClick={() => handleCardClick(card, index)}>
                    <S.FlipCardInner className={card.isFlipped ?'flip' : ''}>
                        <S.CardFront>
                            <S.CardImg src="src/assets/frontImg.png" alt="frontImg of Card" />
                        </S.CardFront>
                        <S.CardBack>
                            <S.CardImg src={card.backImg} alt="backImg of Card" /> 
                        </S.CardBack>
                    </S.FlipCardInner>
                </S.StyleCard>
            ))}
        </S.CardContainer>
        </>
        
    )

}

export default GameContainer;