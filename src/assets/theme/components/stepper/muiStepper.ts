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

import { Components, Theme } from '@mui/material';
import { PaletteColorKey } from '@mui/material/styles';

import { borders, boxShadows, isPaletteColorName, linearGradient } from '../..';

export const MuiStepper: Components<Theme>['MuiStepper'] = {
  styleOverrides: {
    root: ({ theme: { palette }, ownerState: { color } }) => {
      const usedColor =
        color && isPaletteColorName(color) ? palette[color] : palette.primary;
      return {
        background: linearGradient(usedColor.main, usedColor.dark),
        padding: '1.5rem 0 1rem',
        borderRadius: borders.radius.lg,
        boxShadow: color
          ? boxShadows.colored[color as unknown as PaletteColorKey]
          : boxShadows.colored.primary,

        '&.MuiPaper-root': {
          backgroundColor: 'transparent',
        },
      };
    },
  },
};
