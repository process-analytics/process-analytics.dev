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

import { borders } from '..';

export const MuiLinearProgress: ThemeComponentOptions['MuiLinearProgress'] = {
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      height: '0.375rem',
      borderRadius: borders.radius.md,
      overflow: 'visible',
      position: 'relative',
      backgroundColor: palette.grey.A200,
    }),

    bar: {
      height: '0.375rem',
      borderRadius: borders.radius.sm,
      position: 'absolute',
      transform: 'translate(0, 0) !important',
      transition: 'width 0.6s ease !important',
    },
  },
};
