import React, { ReactNode } from 'react';
import { Theme } from '@rebass/preset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { loadIcons } from '../utils/icons';
import { theme } from '../theme';
import Helmet from './Helmet';
import 'tippy.js/dist/tippy.css';
import CookieConsent, { Cookies } from 'react-cookie-consent';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export type DefaultTheme = Theme;
}

declare global {
  // This function is made available by the plugin gatsby-plugin-google-gtag at runtime
  function gaOptout(): void;
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
        cookieName={'ga-disable-G-D2D0FR22RN'}
        enableDeclineButton={true}
        flipButtons={true}
        style={{
          opacity: '90%',
        }}
        contentStyle={{
          color: theme.colors.background,
        }}
        cookieValue={false}
        buttonStyle={{
          background: '#90EE90',
          color: theme.colors.primary,
        }}
        declineCookieValue={true}
        declineButtonStyle={{
          background: theme.colors.secondary,
          color: theme.colors.background,
        }}
        onDecline={() => {
          gaOptout();

          // Clean the unnecessary cookies
          Cookies.remove('_ga', { path: '/' });
          Cookies.remove('_ga_D2D0FR22RN', { path: '/' });
        }}
        overlay={true}
      >
        This website uses cookies to monitor the audience.
      </CookieConsent>
    </ThemeProvider>
  </main>
);

export default Layout;
