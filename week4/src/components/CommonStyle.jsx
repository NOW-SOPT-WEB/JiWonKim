import styled from "styled-components"

export const PageContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    gap: 20px;
    background-color: ${({theme}) => theme.colors.highlightColor};
`;

export const BtnContainer = styled.section`
display: flex;
justify-content: center;
gap: 50px;
margin-bottom: 50px;
`;

export const Btn = styled.button`
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