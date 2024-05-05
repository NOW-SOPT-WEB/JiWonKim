import { useEffect, useState } from "react";
import Modal from './Modal/Modal'
import GameLevelButtons from "./GameLevelButton/GameLevelBtn";
import CardContainer from "./Card/CardContainer";
import cardData from "./Card/CardData";
import gameLevel from "./LevelData";
import * as S from './GameStyle'

function GameContainer({ currentLevel, handleCurrentLevel, handleLevelChange, currentScore, handleCurrentScore, maxScore, handleMaxScore, reset}) {
    const [finalArr, setFinalArr] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const getCardSets = () => {
        const cardNum = gameLevel.find(item => item.level === currentLevel).cardNum;
        const randomArr = cardData.sort(() => Math.random() - 0.5);
        const selectRamdomArr = randomArr.slice(0, cardNum);
        const finalArr = [...selectRamdomArr, ...selectRamdomArr].sort(() => Math.random() - 0.5);
        finalArr.forEach(card => {
            card.isFlipped = false;
        });
        return finalArr;
    };

    useEffect(() => {
        gameReset(); 
    }, [reset]);

    const gameReset = () => {
        setShowModal(false);
        handleCurrentLevel(gameLevel[0].level);
        handleMaxScore(gameLevel[0].cardNum);
        handleCurrentScore(0);
        setFinalArr(getCardSets());
    };

    useEffect(() => {
        if (currentScore === maxScore) {
            setShowModal(true);  
        }
    }, [currentScore, maxScore]);

    useEffect(() => {
        setFinalArr(getCardSets());
        handleCurrentScore(0);
    }, [currentLevel]);

    const getFinalArr = (index) => {
        const updatedFinalArr = finalArr.map((item, idx) => {
            if (idx === index) {
                return { ...item, isFlipped: !item.isFlipped };
            }
            return item;
        });

        setFinalArr(updatedFinalArr);
    }

    const getMatch = (newSelectedCards) => {
        if (newSelectedCards[0].id === newSelectedCards[1].id) {
            handleCurrentScore(currentScore + 1);
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
    }

    const handleCardClick = (card, index) => {
        if (selectedCards.length === 2 || card.isFlipped) return;

        const clicked = finalArr[index]
        const clickedStatus = !clicked.isFlipped;
        const newSelectedCards = [...selectedCards, {...clicked, index, isFlipped: clickedStatus }];
        setSelectedCards(newSelectedCards);

        getFinalArr(index)
        getMatch(newSelectedCards)
    };

    return (
        <S.MainContainer>
            <Modal showModal={showModal} onClose={gameReset} />
            <GameLevelButtons gameLevel={gameLevel} currentLevel={currentLevel} onLevelChange={handleLevelChange} />
            <CardContainer cards={finalArr} onCardClick={handleCardClick} />
        </S.MainContainer>
    )
}

export default GameContainer;