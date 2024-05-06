import * as C from '../CommonStyle';
import { useState, useRef } from 'react';
import { useNavigation } from '../../utils/navigation';
import { join } from '../../services/Join';
import { RegExpConfig, formatPhoneNumber } from '../../utils/regexConfig';

export default function JoinPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const { goBack, navigateToLogin } = useNavigation();

  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);
  const phoneNumbersRef = useRef(null);

  const handleJoin = (e) => {
    e.preventDefault();
        let valid = true;

        if (!id) {
            setIdError('아이디를 입력해주세요.');
            valid = false;
            idRef.current.focus();
        } else {
            setIdError('');
        }

        if (!password || !RegExpConfig.pwRegExp.test(password)) {
            setPasswordError('비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어가 포함되어야 합니다.');
            valid = false;
            passwordRef.current.focus();
        } else {
            setPasswordError('');
        }

        if (!nickname) {
          setNicknameError('닉네임을 입력해주세요.');
            valid = false;
            nicknameRef.current.focus();
        } else {
          setNicknameError('');
        }

        if (!phoneNumber || !RegExpConfig.phoneRegExp.test(phoneNumber)) {
          setPhoneNumberError('전화번호 형식은 010-****-**** 입니다.');
            valid = false;
            phoneNumbersRef.current.focus();
        } else {
          setPhoneNumberError('');
        }

        if (valid) {
          const successJoin = join(id, password, nickname, phoneNumber);
          if (successJoin) {
            navigateToLogin();
          }
        }
  }

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  }

  return (
    <C.PageContainer>
        <h1>Join</h1>
        <C.InputSection>
          <C.InputType>ID</C.InputType>
          <C.InputBox type="text" value={id} onChange={(e) => setId(e.target.value)} error={idError} ref={idRef} />
        </C.InputSection>
        {idError && <div style={{ color: 'red' }}>{idError}</div>}
        <C.InputSection>
          <C.InputType>PW</C.InputType>
          <C.InputBox type="text" value={password} onChange={(e) => setPassword(e.target.value)} error={passwordError} ref={passwordRef} />
        </C.InputSection>
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        <C.InputSection>
          <C.InputType>NickName</C.InputType>
          <C.InputBox type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} error={nicknameError} ref={nicknameRef} />
        </C.InputSection>
        {nicknameError && <div style={{ color: 'red' }}>{nicknameError}</div>}
        <C.InputSection>
          <C.InputType>PhoneNumber</C.InputType>
          <C.InputBox type="text" value={phoneNumber} onChange={handleChangePhoneNumber} error={phoneNumberError} ref={phoneNumbersRef} />
        </C.InputSection>
        {phoneNumberError && <div style={{ color: 'red' }}>{phoneNumberError}</div>}

        <C.BtnContainer>
          <C.Btn onClick={handleJoin}>회원가입</C.Btn>
          <C.Btn onClick={goBack}>뒤로가기</C.Btn>
        </C.BtnContainer>
    </C.PageContainer>
  )
}
