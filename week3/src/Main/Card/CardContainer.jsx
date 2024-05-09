import * as S from './CardStyle';

function CardContainer({ cards, onCardClick }) {
    return (
        <S.CardContainer>
            {cards.map((card, index) => (
                <S.StyleCard key={index} onClick={() => onCardClick(card, index)}>
                    <S.FlipCardInner className={card.isFlipped ? 'flip' : ''}>
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
    );
}

export default CardContainer;
