import * as S from './HeaderStyle'

function Header({ currentScore, maxScore }) {
    return (
        <S.HeaderContainer>
            <S.GameTitle>
                카드 뒤집기 게임
            </S.GameTitle>
            <S.GameLevelBtn>Reset</S.GameLevelBtn>
            <S.ScoreContainer>
                <S.GameScore type="currentScore">{currentScore}</S.GameScore>
                <S.GameScore type="divider">/</S.GameScore>
                <S.GameScore type="maxScore">{maxScore}</S.GameScore>
            </S.ScoreContainer>
        </S.HeaderContainer>
    )
}

export default Header;