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

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import type { ThemeComponentOptions } from '../../theme';

import { borders, boxShadows, rgba } from '../..';

export const MuiCard: ThemeComponentOptions['MuiCard'] = {
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: palette.quaternary.main,
      backgroundClip: 'border-box',
      border: `${borders.width.xs} solid ${rgba('#000000', 0.125)}`,
      borderRadius: borders.radius.xl,
      boxShadow: boxShadows.md,
      overflow: 'visible',

      ':hover': {
        boxShadow: '0 0.75rem 1rem rgba(0, 0, 0, 0.2)',
      },
    }),
  },
};
