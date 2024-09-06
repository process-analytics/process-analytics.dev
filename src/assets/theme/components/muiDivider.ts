/**
 * Copyright 2023 Bonitasoft S.A.
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
 * Material Kit 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import type { ThemeComponentOptions } from '../theme';

import { dark, rgba } from '..';

export const MuiDivider: ThemeComponentOptions['MuiDivider'] = {
  styleOverrides: {
    root: {
      background: rgba(dark, 0.2),
      height: '0.0625rem',
      margin: '1rem 0',
      borderBottom: 'none',
      opacity: 0.25,
    },

    vertical: {
      background: rgba(dark, 0.2),
      width: '0.0625rem',
      height: '100%',
      margin: '0 1rem',
      borderRight: 'none',
    },

    light: {
      background: rgba('white', 0.2),

      '&.MuiDivider-vertical': {
        background: rgba('white', 0.2),
      },
    },
  },
};
