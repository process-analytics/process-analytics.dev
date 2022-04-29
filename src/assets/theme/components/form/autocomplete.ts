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

import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';
// Material Kit 2 React base styles
import boxShadows from '../../base/boxShadows';
import typography from '../../base/typography';
import colors from '../../base/colors';
import borders from '../../base/borders';

// Material Kit 2 React helper functions
import pxToRem from '../../functions/pxToRem';

const { lg } = boxShadows;
const { size } = typography;
const { text, white, transparent, light, dark, gradient } = colors;
const { borderRadius } = borders;

const autocomplete: {
  defaultProps?: ComponentsProps['MuiAutocomplete'];
  styleOverrides?: ComponentsOverrides['MuiAutocomplete'];
  variants?: ComponentsVariants['MuiAutocomplete'];
} = {
  styleOverrides: {
    popper: {
      boxShadow: lg,
      padding: pxToRem(8),
      fontSize: size.sm,
      color: text?.primary,
      textAlign: 'left',
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: 'none',
      backgroundColor: transparent.main,
    },

    option: {
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text?.primary,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus':
        {
          backgroundColor: light.main,
          color: dark.main,
        },

      '&[aria-selected="true"]': {
        backgroundColor: `${light.main} !important`,
        color: `${dark.main} !important`,
      },
    },

    noOptions: {
      fontSize: size.sm,
      color: text?.primary,
    },

    groupLabel: {
      color: dark.main,
    },

    loading: {
      fontSize: size.sm,
      color: text?.primary,
    },

    tag: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      padding: pxToRem(4),
      backgroundColor: gradient.dark.contrastText,
      color: white.main,

      '& .MuiChip-label': {
        lineHeight: 1.2,
        padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
      },

      '& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus':
        {
          color: white.main,
          marginRight: 0,
        },
    },
  },
};
export default autocomplete;
