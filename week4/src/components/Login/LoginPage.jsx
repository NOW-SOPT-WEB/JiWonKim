import * as S from './LoginPageStyle'
import * as C from '../CommonStyle';
import { useState } from 'react';
import { login } from './Login';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(id, password)
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
          <S.InputBox type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </S.InputSection>
        <S.InputSection>
          <S.InputType>PW</S.InputType>
          <S.InputBox type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </S.InputSection>

        <C.BtnContainer>
          <C.Btn onClick={handleLogin}>로그인</C.Btn>
          <C.Btn onClick={handleJoin}>회원가입</C.Btn>
        </C.BtnContainer>
    </C.PageContainer>
    </>
  )
}
