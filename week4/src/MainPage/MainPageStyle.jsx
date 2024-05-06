import styled from "styled-components"

export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.backgroundColor};
color: ${({theme}) => theme.colors.textColor};
`;

export const Header = styled.header`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.lightColor};
padding: 10px;
`;

export const MainImg = styled.img`
width: 500px;
margin: 50px;
`;

export const BtnContainer = styled.section`
display: flex;
justify-content: center;
gap: 50px;
margin-bottom: 50px;
`;

export const MainBtn = styled.button`
width: 120px;
height: 60px;
background-color: ${({theme}) => theme.colors.lightColor};
border: none;
border-radius: 10px;
font-size: 20px;
cursor: pointer;

&:hover {
    border: 2px solid gray;
}
`;