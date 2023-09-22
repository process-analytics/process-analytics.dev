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

import { Components, Palette, PaletteColor, Theme } from '@mui/material';

import { fontSize } from '../..';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme: { palette }, ownerState: { color } }) => ({
      fontSize: `${fontSize.sm} !important`,
      color: palette.text.primary,
      lineHeight: 0.9,

      '&.Mui-focused': {
        color:
          (palette[color as keyof Palette] as PaletteColor)?.main ??
          palette.primary.main,
      },

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.5,
        fontSize: fontSize.md,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.85em',
        },
      },
    }),

    sizeSmall: {
      fontSize: `${fontSize.xs} !important`,
      lineHeight: 1.625,

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.6,
        fontSize: fontSize.sm,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.72em',
        },
      },
    },
  },
};
