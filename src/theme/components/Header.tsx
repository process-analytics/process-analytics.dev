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
import React from 'react';

import { ScopedCssBaseline, ThemeProvider } from '@mui/material';

import { Navbar } from './material-kit';

import { routes } from '../../content/HeaderRoutes';

import { theme } from '../../assets/theme';

/* TODO: Use ScopedCssBaseline until we need to keep the old theme.
    After, use CssBaseline and move it with the ThemeProvider in the Layout class  */
export const Header = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <header>
          <Navbar
            routes={routes}
            brand="Process Analytics"
            action={{
              type: 'external',
              url: 'https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html',
              label: 'Demo',
              color: 'secondary',
              variant: 'contained',
            }}
            isTransparent
            isSticky
            // isCenter
            top="0"
            zIndex="1"
            bgColor="quaternary"
            width="100%"
            shadow={{ size: 'sm' }}
            py={0.25}
            dropdownStyle={{
              bgColor: 'secondaryLight',
              color: 'secondary',
            }}
          />
        </header>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};
