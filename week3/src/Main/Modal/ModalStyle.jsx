import styled from "styled-components";

export const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.translucency};
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-size: 3.125rem;
`;

export const ModalContentStyle = styled.div`
    background: ${({theme}) => theme.colors.lightColor};
    padding: 1.25rem;
    border-radius: 0.625rem;
    text-align: center;
    width: 50%;  
    height: 30%; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
