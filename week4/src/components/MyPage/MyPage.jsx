import React, { useEffect, useState } from "react";
import * as S from './MyPageStyle';
import * as C from '../CommonStyle';
import { useParams } from "react-router-dom";
import { info } from "../../services/Info";
import { useNavigation } from "../../utils/navigation";
import { changePassword } from "../../services/Password";

export default function MyPage() {
    const { memberId } = useParams();
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { goHome } = useNavigation();
    const [showChangeToggle, setShowChangeToggle] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordVerification, setNewPasswordVerification] = useState('');

    useEffect(() => {
        info(memberId).then(userInfo => {
            if (userInfo) {
                console.log(`User ID: ${userInfo.authenticationId}, Nickname: ${userInfo.nickname}, Phone: ${userInfo.phone}`);
                setId(userInfo.authenticationId);
                setNickname(userInfo.nickname);
                setPhoneNumber(userInfo.phone);
            } else {
                console.log('No user info returned');
            }
        }).catch(error => {
            console.error('An error occurred while fetching user info:', error);
        });
    }, [memberId]);

    const toggleChangePassword = () => setShowChangeToggle(!showChangeToggle);

    const handleChangePassword = () => {
        if (!currentPassword || !newPassword || !newPasswordVerification) {
            alert("모든 필드를 채워주세요.");
            return;
        }
        if (newPassword !== newPasswordVerification) {
            alert("새 비밀번호와 확인이 일치하지 않습니다.");
            return;
        }
        changePassword(currentPassword, newPassword, newPasswordVerification, memberId);
    };

    return (
        <>
        <C.PageContainer>
            <h1>MyPage</h1>
            <S.InfoContainer>
                <S.InfoType>ID</S.InfoType>
                <S.Info>{id}</S.Info>
            </S.InfoContainer>
            <S.InfoContainer>
                <S.InfoType>NickName</S.InfoType>
                <S.Info>{nickname}</S.Info> 
            </S.InfoContainer>
            <S.InfoContainer>
                <S.InfoType>Phone</S.InfoType>
                <S.Info>{phoneNumber}</S.Info> 
            </S.InfoContainer>

            <button onClick={toggleChangePassword}>비밀번호 변경</button>
            {showChangeToggle && (
                <>
                    <C.InputBox type="text" placeholder="기존 비밀번호" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                    <C.InputBox type="text" placeholder="새 비밀번호" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    <C.InputBox type="text" placeholder="새 비밀번호 확인" value={newPasswordVerification} onChange={e => setNewPasswordVerification(e.target.value)} />
                    <C.Btn onClick={handleChangePassword}>비밀번호 변경</C.Btn>
                </>
            )}

            <C.Btn onClick={goHome}>Home</C.Btn>
        </C.PageContainer>
        </>
    );
}
