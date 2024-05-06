import * as C from '../CommonStyle';
import { useState } from 'react';
import { useNavigation } from '../../utils/navigation';
import { join } from '../../services/Join';
import { RegExpConfig } from '../../utils/regexConfig';

export default function JoinPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumer, setPhoneNumber] = useState('');
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [phoneNumerError, setPhoneNumberError] = useState('');
  const { goBack, navigateToLogin } = useNavigation();

  const handleJoin = (e) => {
    e.preventDefault();
        let valid = true;

        if (!id) {
            setIdError('아이디를 입력해주세요.');
            valid = false;
        } else {
            setIdError('');
        }

        if (!password || !RegExpConfig.pwRegExp.test(password)) {
            setPasswordError('비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어가 포함되어야 합니다.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (!nickname) {
          setNicknameError('닉네임을 입력해주세요.');
            valid = false;
        } else {
          setNicknameError('');
        }

        if (!phoneNumer || !RegExpConfig.phoneRegExp.test(phoneNumer)) {
          setPhoneNumberError('전화번호 형식은 010-****-**** 입니다.');
            valid = false;
        } else {
          setPhoneNumberError('');
        }

        if (valid) {
          join(id, password, nickname, phoneNumer);
          navigateToLogin();
        }
  }

  return (
    <C.PageContainer>
        <h1>Join</h1>
        <C.InputSection>
          <C.InputType>ID</C.InputType>
          <C.InputBox type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </C.InputSection>
        {idError && <div style={{ color: 'red' }}>{idError}</div>}
        <C.InputSection>
          <C.InputType>PW</C.InputType>
          <C.InputBox type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </C.InputSection>
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        <C.InputSection>
          <C.InputType>NickName</C.InputType>
          <C.InputBox type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </C.InputSection>
        {nicknameError && <div style={{ color: 'red' }}>{nicknameError}</div>}
        <C.InputSection>
          <C.InputType>PhoneNumber</C.InputType>
          <C.InputBox type="text" value={phoneNumer} onChange={(e) => setPhoneNumber(e.target.value)} />
        </C.InputSection>
        {phoneNumerError && <div style={{ color: 'red' }}>{phoneNumerError}</div>}

        <C.BtnContainer>
          <C.Btn onClick={handleJoin}>회원가입</C.Btn>
          <C.Btn onClick={goBack}>뒤로가기</C.Btn>
        </C.BtnContainer>
    </C.PageContainer>
  )
}
