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

import { borders, boxShadow } from '..';

export const MuiSlider: Components<Theme>['MuiSlider'] = {
  styleOverrides: {
    root: {
      width: '100%',

      '& .MuiSlider-active, & .Mui-focusVisible': {
        boxShadow: 'none !important',
      },

      '& .MuiSlider-valueLabel': {
        color: 'black',
      },
    },

    rail: {
      height: '0.125rem',
      background: grey[200],
      borderRadius: borders.radius.sm,
      opacity: 1,
    },

    track: {
      background: info.main,
      height: '0.125rem',
      position: 'relative',
      border: 'none',
      borderRadius: borders.radius.lg,
      zIndex: 1,
    },

    thumb: {
      width: '0.875rem',
      height: '0.875rem',
      backgroundColor: 'white',
      zIndex: 10,
      boxShadow: boxShadow(
        { x: 0, y: 1 },
        { blur: 13, spread: 0 },
        'black',
        0.2,
      ),
      border: `${borders.width.sm} solid ${info.main}`,
      transition: 'all 200ms linear',

      '&:hover': {
        boxShadow: 'none',
      },

      '&:active': {
        transform: 'translate(-50%, -50%) scale(1.4)',
      },

      '&.Mui-active': {
        boxShadow: boxShadow(
          { x: 0, y: 0 },
          {
            blur: 0,
            spread: 14,
          },
          info.main,
          0.16,
        ),
      },
    },
  },
};
