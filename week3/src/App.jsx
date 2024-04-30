import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <h1>Hello, styled-components!ddd</h1>
        {/* 나머지 앱 컴포넌트 */}
      </div>
    </ThemeProvider>
  );
}

export default App;
