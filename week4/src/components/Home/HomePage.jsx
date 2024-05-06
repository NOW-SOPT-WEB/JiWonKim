import * as S from './HomePageStyle';
import * as C from '../CommonStyle';
import { useNavigation } from '../../utils/navigation';

export default function MainPage() {
    const { navigateToLogin, navigateToJoin } = useNavigation();

    return (
        <S.Main>
            <S.Header>
                <h1>로그인 / 회원가입</h1>
            </S.Header>
            <S.MainImg src="./src/assets/잠만보.jpg"/>
            <C.BtnContainer>
                <C.Btn onClick={navigateToLogin}>내 정보</C.Btn>
                <C.Btn onClick={navigateToJoin}>회원가입</C.Btn>
            </C.BtnContainer>
        </S.Main>
    )
}
