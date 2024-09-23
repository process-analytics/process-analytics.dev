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

import type { ThemeComponentOptions } from '../../theme';

import { borders, boxShadows, dark, darker, fontSize } from '../..';

export const MuiAutocomplete: ThemeComponentOptions['MuiAutocomplete'] = {
  styleOverrides: {
    popper: ({ theme: { palette } }) => ({
      boxShadow: boxShadows.lg,
      padding: '0.5rem',
      fontSize: fontSize.sm,
      color: palette.text.primary,
      textAlign: 'left',
      backgroundColor: 'White !important',
      borderRadius: borders.radius.md,
    }),

    paper: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },

    option: ({ theme: { palette } }) => ({
      padding: '0.3rem 1rem',
      borderRadius: borders.radius.md,
      fontSize: fontSize.sm,
      color: palette.text.primary,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus':
        {
          backgroundColor: palette.grey.A200,
          color: dark,
        },

      '&[aria-selected="true"]': {
        backgroundColor: `${palette.grey.A200} !important`,
        color: `${dark} !important`,
      },
    }),

    noOptions: ({ theme: { palette } }) => ({
      fontSize: fontSize.sm,
      color: palette.text.primary,
    }),

    groupLabel: {
      color: dark,
    },

    loading: ({ theme: { palette } }) => ({
      fontSize: fontSize.sm,
      color: palette.text.primary,
    }),

    tag: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      padding: '0.25rem',
      backgroundColor: darker,
      color: 'White',

      '& .MuiChip-label': {
        lineHeight: 1.2,
        padding: '0 0.625rem 0 0.25rem',
      },

      '& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus':
        {
          color: 'White',
          marginRight: 0,
        },
    },
  },
};
