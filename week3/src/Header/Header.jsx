import * as S from './HeaderStyle'

function Header() {
    return (
        <S.HeaderContainer>
            <S.GameTitle>
                cardgame ㅎㅇㅎㅇ
            </S.GameTitle>
            <S.GameLevelBtn>Reset</S.GameLevelBtn>
            <S.ScoreContainer>
                <S.GameScore>0</S.GameScore>
                <S.GameScore>/</S.GameScore>
                <S.GameScore>0</S.GameScore>
            </S.ScoreContainer>
        </S.HeaderContainer>
    )
}

export default Header;