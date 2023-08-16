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

import { boxShadow } from '../..';

export const MuiStepIcon: Components<Theme>['MuiStepIcon'] = {
  styleOverrides: {
    root: {
      background: '#9fc9ff',
      fill: '#9fc9ff',
      stroke: '#9fc9ff',
      strokeWidth: '0.625rem',
      width: '0.8125rem',
      height: '0.8125rem',
      borderRadius: '50%',
      zIndex: 99,
      transition: 'all 200ms linear',

      '&.Mui-active': {
        background: 'white',
        fill: 'white',
        stroke: 'white',
        borderColor: 'white',
        boxShadow: boxShadow(
          { x: 0, y: 0 },
          { blur: 0, spread: 2 },
          'white',
          1,
        ),
      },

      '&.Mui-completed': {
        background: 'white',
        fill: 'white',
        stroke: 'white',
        borderColor: 'white',
        boxShadow: boxShadow(
          { x: 0, y: 0 },
          { blur: 0, spread: 2 },
          'white',
          1,
        ),
      },
    },
  },
};
