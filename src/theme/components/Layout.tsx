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

loadIcons();

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: border-box;
  }

  html { 
    scroll-behavior: smooth;
  }
  
  html * {
    -moz-osx-font-smoothing: grayscale;
  }

  header {
    display: block;
    font-family: "Altone",Arial,Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    min-height: 0px;

    position: relative;
    background-color: #f8f8f8;
    border-radius: 4px;

    &::before,
    &::after {
      display: table;
      content: ' ';
    }
  }

  body {
    box-sizing: border-box; 
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: ${props => (props.theme as Theme).fonts.body};
    font-size: 14px;
    background: ${props => (props.theme as Theme).colors.background};
    color: ${props => (props.theme as Theme).colors.text};
    line-height: 1.5;
  }

  a[href]{
    cursor: pointer;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  h2 {
    font-family: inherit;
    font-size: 32px;
    margin: 24px 0 24px 0;
    font-weight: bold;
    line-height: 1.1;
  }

  p {
    margin: 0 0 10px;
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
              { path: '/' },
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
