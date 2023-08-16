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

import { borders, linearGradient } from '../..';

export const MuiRadio: Components<Theme>['MuiRadio'] = {
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
            borderColor: usedColor,
          },

          '&:after': {
            opacity: 1,
          },
        },

        '& .MuiSvgIcon-root': {
          width: '1.25rem',
          height: '1.25rem',
          color: 'transparent',
          border: `${borders.width.sm} solid ${borders.color}`,
          borderRadius: '50%',
        },

        '&:after': {
          transition: 'opacity 250ms ease-in-out',
          content: `""`,
          position: 'absolute',
          width: '0.875rem',
          height: '0.875rem',
          borderRadius: '50%',
          backgroundImage: linearGradient(usedColor, usedColor),
          opacity: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 'auto',
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
