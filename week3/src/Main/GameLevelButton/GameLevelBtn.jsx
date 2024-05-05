import * as S from './GameLevelBtnStyle';

function GameLevelButtons({ gameLevel, currentLevel, onLevelChange }) {
    return (
        <S.GameLevelBtnContainer>
            {gameLevel.map(item => (
                <S.GameLevelBtn key={item.level} onClick={() => onLevelChange(item.level)}
                isActive={currentLevel === item.level}>
                {item.level}
                </S.GameLevelBtn>
            ))}
        </S.GameLevelBtnContainer>
    );
}

export default GameLevelButtons;
