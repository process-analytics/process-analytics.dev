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

import type { Components, Theme } from '@mui/material';

import { borders, linearGradient } from '../..';

export const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
  styleOverrides: {
    root: ({ theme: { palette }, ownerState: { color } }) => {
      const usedColor =
        color && color !== 'default'
          ? palette[color].main
          : palette.primary.main;
      return {
        color: borders.color,

        '&.Mui-checked': {
          color: usedColor,

          '& .MuiSvgIcon-root': {
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
              usedColor,
              usedColor,
            )}`,
            borderColor: usedColor,
          },
        },

        '& .MuiSvgIcon-root': {
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '1.25rem',
          height: '1.25rem',
          color: 'transparent',
          border: `${borders.width.sm} solid ${borders.color}`,
          borderRadius: '0.35rem',
        },

        '&:hover': {
          backgroundColor: 'transparent',
        },

        '&.Mui-focusVisible': {
          border: `${borders.width.md} solid ${usedColor} !important`,
        },
      };
    },
  },
};
