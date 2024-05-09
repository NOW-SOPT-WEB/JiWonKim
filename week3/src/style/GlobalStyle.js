import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({theme}) => theme.fonts.base};
    background-color: ${({theme}) => theme.colors.backgroundColor};
    color: ${({theme}) => theme.colors.mainColor};
  }
`;

export default GlobalStyle;
