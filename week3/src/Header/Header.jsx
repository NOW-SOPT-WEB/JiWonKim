import GameScore from './GameScore';
import * as S from './HeaderStyle'

function Header({ currentScore, maxScore, handleReset }) {
    return (
        <S.HeaderContainer>
            <S.GameTitle>
                카드 뒤집기 게임
            </S.GameTitle>
            <S.GameResetBtn onClick={handleReset}>Reset</S.GameResetBtn>
            <S.ScoreContainer>
                <GameScore>{currentScore} / {maxScore}</GameScore>
            </S.ScoreContainer>
        </S.HeaderContainer>
    )
}

export default Header;