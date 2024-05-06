import * as S from './MainPageStyle';
import { useNavigate  } from "react-router-dom";

export default function MainPage() {

    const navigate = useNavigate(); 

    const handleNavigateToLogin = () => {
        navigate('./login'); 
    }

    const handleNavigateToJoin = () => {
        navigate('./join'); 
    }

    return (
        <S.Main>
            <S.Header>
                <h1>header ㅎㅇㅎㅇ</h1>
            </S.Header>
            <S.MainImg src="./src/assets/잠만보.jpg"/>
            <S.BtnContainer>
                <S.MainBtn onClick={handleNavigateToLogin}>내 정보</S.MainBtn>
                <S.MainBtn onClick={handleNavigateToJoin}>회원가입</S.MainBtn>
            </S.BtnContainer>
        </S.Main>
    )
}
