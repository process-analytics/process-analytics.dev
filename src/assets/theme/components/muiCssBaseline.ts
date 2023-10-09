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

/**
 =========================================================
 * Material Kit 2 React - v2.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import type { Components, Theme } from '@mui/material';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: ({ palette }) => ({
    html: {
      scrollBehavior: 'smooth',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    'html *': {
      mozOsxFontSmoothing: 'grayscale',
    },

    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
    },

    body: {
      fontSize: '62.5%',
      color: palette.text.primary,
    },

    img: {
      maxWidth: '100%',
      verticalAlign: 'middle',
      border: 0,
    },

    a: {
      textDecoration: 'none',
    },
    'a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited': {
      color: `${palette.primary.main} !important`,
      transition: 'color 150ms ease-in !important',
    },
    'a.link:hover, .link:hover, a.link:focus, .link:focus': {
      color: `${palette.spicy.main} !important`,
    },
  }),
};
