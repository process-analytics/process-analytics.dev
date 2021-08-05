import React, { ReactNode } from 'react';
import { Theme } from '@rebass/preset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { loadIcons } from '../utils/icons';
import { theme } from '../theme';
import Helmet from './Helmet';
import 'tippy.js/dist/tippy.css';
import CookieConsent from 'react-cookie-consent';

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
  title: string;
};

const Layout = ({ children, title }: Props): JSX.Element => (
  <main>
    <ThemeProvider theme={theme as Theme}>
      <GlobalStyle />
      <Helmet title={title} />
      {children}
      <CookieConsent
        location="bottom"
        cookieName={'pa_ga-disable-G-D2D0FR22RN'}
        enableDeclineButton={true}
        flipButtons={true}
        cookieValue={false}
        declineCookieValue={true}
        /*        onDecline={() => {
          window['pa_ga-disable-G-D2D0FR22RN'] = true;
          document.cookie =
            'pa_ga-disable-G-D2D0FR22RN=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/';
          window.disableStr = 1;
        }}*/
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      {/*      <a href="javascript:gaOptout();">Deactivate Google Tracking</a>*/}
    </ThemeProvider>
  </main>
);

export default Layout;
