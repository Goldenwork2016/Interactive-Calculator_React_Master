import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './services/theme';
import ContextProvider from './services/Context';
import GlobalStyle from './components/styles/GlobalStyle';

const Main = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
const rootElement = document.getElementById('root');
render(<Main />, rootElement);
