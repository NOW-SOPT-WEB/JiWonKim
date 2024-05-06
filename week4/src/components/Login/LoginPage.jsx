import * as S from './LoginPageStyle'
import * as C from '../CommonStyle';

export default function LoginPage() {

  const handleLogin = () => {

  }

  const handleJoin = () => {

  }

  return (
    <>
    <C.PageContainer>
        <h1>Login</h1>
        <S.LoginPageImg src='./src/assets/잠만보.jpg'></S.LoginPageImg>
        <S.InputSection>
          <S.InputType>ID</S.InputType>
          <S.InputBox></S.InputBox>
        </S.InputSection>
        <S.InputSection>
          <S.InputType>PW</S.InputType>
          <S.InputBox></S.InputBox>
        </S.InputSection>

        <C.BtnContainer>
          <C.Btn onClick={handleLogin}>로그인</C.Btn>
          <C.Btn onClick={handleJoin}>회원가입</C.Btn>
        </C.BtnContainer>
    </C.PageContainer>
    </>
  )
}
