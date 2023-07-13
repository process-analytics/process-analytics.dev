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

import React, { PropsWithChildren, useEffect } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import 'vanilla-cookieconsent';

import { initCookieConsentBanner } from './CookieConsentBanner';

import { createResponsiveTheme } from '../assets/theme';
import { loadIcons } from '../helper';

import { Footer, FooterContent, Header, HeaderContent } from '.';

loadIcons();

type LayoutProps = {
  footerContent: FooterContent;
  headerContent: HeaderContent;
};

export const Layout = ({
  children,
  footerContent,
  headerContent,
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  useEffect(() => {
    initCookieConsentBanner();
  }, []);

  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createResponsiveTheme(mode), [mode]);

  return (
    <main>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header content={headerContent} />
          {children}
          <Footer content={footerContent} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </main>
  );
};
