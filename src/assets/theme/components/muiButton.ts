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

import { Components, Theme } from '@mui/material';

import { borders, fontSize, fontWeight } from '..';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: false,
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '0.5rem',
      padding: '0.625rem 1.5rem',
      minHeight: '2.5rem',
      lineHeight: 1.4,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xs,
      letterSpacing: '0.02857em',
      textAlign: 'center',
      textTransform: 'uppercase',
      userSelect: 'none',
      backgroundSize: '150% !important',
      backgroundPositionX: '25% !important',
      transition: 'all 150ms ease-in',

      '&:disabled': {
        pointerEvent: 'none',
        opacity: 0.65,
      },

      '& .material-icons': {
        fontSize: '0.9375rem',
        marginTop: '-0.125rem',
      },
      '& .material-icon, .material-icons-round, svg': {
        fontSize: `${fontSize.md} !important`,
      },

      ...(ownerState.circular === true && {
        borderRadius: borders.radius.section,
      }),
    }),

    containedSizeSmall: {
      minHeight: '2rem',
      padding: '0.375rem 1rem',
      fontSize: fontSize.xs,

      '& .material-icon, .material-icons-round, svg': {
        fontSize: `${fontSize.xs} !important`,
      },
    },
    containedSizeLarge: {
      minHeight: '2.9375rem',
      padding: '0.75rem 1.75rem',
      fontSize: fontSize.sm,

      '& .material-icon, .material-icons-round, svg': {
        fontSize: '1.375rem !important',
      },
    },
    outlinedSizeSmall: {
      minHeight: '2rem',
      padding: '0.375rem 1rem',
      fontSize: fontSize.xs,

      '& .material-icon, .material-icons-round, svg': {
        fontSize: `${fontSize.xs} !important`,
      },
    },
    outlinedSizeLarge: {
      minHeight: '2.9375rem',
      padding: '0.75rem 1.75rem',
      fontSize: fontSize.sm,

      '& .material-icon, .material-icons-round, svg': {
        fontSize: '1.375rem !important',
      },
    },
    text: {
      boxShadow: 'none',

      '&:active, &:active:focus, &:active:hover': {
        opacity: 0.85,
      },
    },
    textSizeSmall: {
      minHeight: '2rem',
      padding: '0.375rem 1rem',
      fontSize: fontSize.xs,

      '& .material-icon, .material-icons-round, svg': {
        fontSize: `${fontSize.xs} !important`,
      },
    },
    textSizeLarge: {
      minHeight: '2.9375rem',
      padding: '0.75rem 1.75rem',
      fontSize: fontSize.sm,

      '& .material-icon, .material-icons-round, svg': {
        fontSize: '1.375rem !important',
      },
    },
  },
};
