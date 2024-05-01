import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Header/>
        <Main/>
      </div>
      
    </ThemeProvider>
  );
}

export default App;
