import * as S from './HomePageStyle';
import * as C from '../CommonStyle';
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
                <h1>로그인 / 회원가입</h1>
            </S.Header>
            <S.MainImg src="./src/assets/잠만보.jpg"/>
            <C.BtnContainer>
                <C.Btn onClick={handleNavigateToLogin}>내 정보</C.Btn>
                <C.Btn onClick={handleNavigateToJoin}>회원가입</C.Btn>
            </C.BtnContainer>
        </S.Main>
    )
}
