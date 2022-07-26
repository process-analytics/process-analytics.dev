/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { ReactNode } from 'react';
import { Theme } from '@rebass/preset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { loadIcons } from '../utils/icons';
import { theme } from '../theme';
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
};

const Layout = ({ children }: Props): JSX.Element => (
  <main>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      {process.env.GATSBY_GA_MEASUREMENT_ID && (
        <CookieConsent
          location="bottom"
          cookieName={`ga-disable-${process.env.GATSBY_GA_MEASUREMENT_ID}`}
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
            Cookies.remove(
              `_ga_${process.env.GATSBY_GA_MEASUREMENT_ID?.substr(2)}`,
              {
                path: '/',
              },
            );
          }}
          overlay={true}
        >
          This website uses cookies to monitor the audience.
        </CookieConsent>
      )}
    </ThemeProvider>
  </main>
);

export default Layout;
