import React, { useEffect, useState } from "react";
import * as S from './MyPageStyle';
import * as C from '../CommonStyle';
import { useParams } from "react-router-dom";
import { info } from "../../services/Info";

export default function MyPage() {
    const { memberId } = useParams();
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

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
        </C.PageContainer>
        </>
    );
}
