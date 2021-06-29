import React, { ReactNode } from 'react';
import { Theme } from '@rebass/preset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { loadIcons } from '../utils/icons';
import { theme } from '../theme';
import Helmet from './Helmet';
import 'tippy.js/dist/tippy.css';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export type DefaultTheme = Theme;
}

loadIcons();

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
  }

  html { 
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box; 
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: ${props => (props.theme as Theme).fonts.body};
    background: ${props => (props.theme as Theme).colors.background};
    color: ${props => (props.theme as Theme).colors.text};
  }
`;

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
  <main>
    <ThemeProvider theme={theme as Theme}>
      <GlobalStyle />
      <Helmet />
      {children}
    </ThemeProvider>
  </main>
);

export default Layout;
