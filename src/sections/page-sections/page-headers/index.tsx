/**
 * Copyright 2022 Bonitasoft S.A.
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

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '../../../assets/theme';

// Sections components
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// PageHeaders page components
import HeaderOne from './components/HeaderOne';

// PageHeaders page components code
import headerOneCode from './components/HeaderOne/code';

function PageHeaders(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Page Headers"
        breadcrumb={[
          {
            label: 'Page Sections',
            route: '/sections/page-sections/page-headers',
          },
          { label: 'Page Headers' },
        ]}
      >
        <View title="Header 1" code={headerOneCode} height="40rem">
          <HeaderOne />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default PageHeaders;