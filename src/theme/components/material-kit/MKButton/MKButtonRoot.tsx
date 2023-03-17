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
 * Material Kit 2 React - v2.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import {
  Palette,
  Button,
  ButtonProps as MuiButtonProps,
  styled,
  BoxShadows,
  Functions,
  Borders,
} from '@mui/material';

import { isPaletteColorName } from '../../../../assets/theme/base/colors';

export type ButtonProps = MuiButtonProps & {
  circular?: boolean;
  iconOnly?: boolean;
};

type MKButtonRootProps = {
  ownerState: ButtonProps;
};

const containedStyles = (
  palette: Palette,
  { boxShadow }: Functions,
  { colored }: BoxShadows,
  color: ButtonProps['color'],
) => {
  // background color value
  const paletteColor = color && isPaletteColorName(color) && palette[color];

  return {
    background: paletteColor ? paletteColor.main : 'white',
    color: !paletteColor ? palette.text.primary : 'white',
    //color && isPaletteColorName(color) && colored[color]
    boxShadow: paletteColor
      ? `${boxShadow([0, 3], [3, 0], paletteColor.main, 0.15)}, 
    ${boxShadow([0, 3], [1, -2], paletteColor.main, 0.2)}, 
    ${boxShadow([0, 1], [5, 0], paletteColor.main, 0.15)}`
      : 'none',

    '&:hover': {
      // backgroundColor: backgroundValue,
      boxShadow: paletteColor
        ? `${boxShadow([0, 14], [26, -12], paletteColor.main, 0.4)}, 
          ${boxShadow([0, 4], [23, 0], paletteColor.main, 0.15)}, 
          ${boxShadow([0, 8], [10, -5], paletteColor.main, 0.2)}`
        : 'none',
    },

    '&:focus:not(:hover)': {
      backgroundColor: paletteColor ? paletteColor.contrastText : 'white',
      boxShadow: paletteColor
        ? boxShadow([0, 0], [0, 3.2], paletteColor.main, 0.5)
        : boxShadow([0, 0], [0, 3.2], 'white', 0.5),
    },

    '&:disabled': {
      // backgroundColor: backgroundValue,
      color: 'white',
    },
  };
};

const outlinedStyles = (
  palette: Palette,
  { rgba, boxShadow }: Functions,
  color: ButtonProps['color'],
) => {
  // color value
  const paletteColor = color && isPaletteColorName(color) && palette[color];
  const colorValue = paletteColor ? paletteColor.main : 'white';

  return {
    background: color === 'quaternary' ? rgba('white', 0.1) : 'transparent',
    color: colorValue,
    borderColor:
      color === 'quaternary'
        ? rgba('white', 0.75)
        : paletteColor
        ? paletteColor.main
        : rgba('white', 0.75),

    '&:hover': {
      background: 'transparent',
      borderColor: colorValue,
    },

    '&:focus:not(:hover)': {
      background: 'transparent',
      boxShadow: paletteColor
        ? boxShadow([0, 0], [0, 3.2], paletteColor.main, 0.5)
        : boxShadow([0, 0], [0, 3.2], 'white', 0.5),
    },

    '&:active:not(:hover)': {
      backgroundColor: colorValue,
      color: 'white',
      opacity: 0.85,
    },

    '&:disabled': {
      color: colorValue,
      borderColor: colorValue,
    },
  };
};

const gradientStyles = (
  palette: Palette,
  { linearGradient, boxShadow }: Functions,
  { colored }: BoxShadows,
  color: ButtonProps['color'],
) => {
  const paletteColor = color && isPaletteColorName(color) && palette[color];

  // boxShadow value
  const boxShadowValue =
    color !== 'quaternary' && paletteColor
      ? `${boxShadow([0, 3], [3, 0], paletteColor.main, 0.15)}, 
      ${boxShadow([0, 3], [1, -2], paletteColor.main, 0.2)}, 
      ${boxShadow([0, 1], [5, 0], paletteColor.main, 0.15)}`
      : 'none';

  const colorValue = color === 'quaternary' ? palette.text.primary : 'white';

  return {
    background:
      color === 'quaternary' || !paletteColor
        ? 'white'
        : linearGradient(palette[color].main, palette[color].dark),
    color: colorValue,
    boxShadow: boxShadowValue,

    '&:hover': {
      backgroundColor: 'white',
      boxShadow: paletteColor
        ? `${boxShadow([0, 14], [26, -12], paletteColor.main, 0.4)}, 
      ${boxShadow([0, 4], [23, 0], paletteColor.main, 0.15)}, 
      ${boxShadow([0, 8], [10, -5], paletteColor.main, 0.2)}`
        : 'none',
    },

    '&:focus:not(:hover)': {
      boxShadow: boxShadowValue,
    },

    '&:disabled': {
      /* background:
        color === 'quaternary' || !paletteColor
          ? 'white'
          : linearGradient(palette[color].main, palette[color].dark),*/
      color: colorValue,
    },
  };
};

const textStyles = (palette: Palette, color: ButtonProps['color']) => {
  const paletteColor = color && isPaletteColorName(color) && palette[color];

  /*  return {
    color: paletteColor ? paletteColor.main : 'white',

    '&:hover, &:focus:not(:hover)': {
      color: paletteColor ? paletteColor.contrastText : 'white',
    },

    /!*  '&:hover': {
      color: paletteColor ? paletteColor.contrastText : 'white',
    },

    '&:focus:not(:hover)': {
      color: paletteColor ? paletteColor.contrastText : 'white',
    },*!/
  };*/

  return paletteColor
    ? {
        color: paletteColor.main,

        '&:hover, &:focus:not(:hover)': {
          color: paletteColor.contrastText,
        },
      }
    : { color: 'white' };
};

const circularStyles = ({ borderRadius }: Borders) => ({
  borderRadius: borderRadius.section,
});

const iconOnlyStyles = ({ pxToRem }: Functions, size: ButtonProps['size']) => {
  // width, height, minWidth and minHeight values
  let sizeValue = pxToRem(38);
  if (size === 'small') {
    sizeValue = pxToRem(25.4);
  } else if (size === 'large') {
    sizeValue = pxToRem(52);
  }

  // padding value
  let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;
  if (size === 'small') {
    paddingValue = pxToRem(4.5);
  } else if (size === 'large') {
    paddingValue = pxToRem(16);
  }

  return {
    width: sizeValue,
    minWidth: sizeValue,
    height: sizeValue,
    minHeight: sizeValue,
    padding: paddingValue,

    '& .material-icons': {
      marginTop: 0,
    },

    '&:hover, &:focus, &:active': {
      transform: 'none',
    },
  };
};

export const MKButtonRoot = styled(Button)<MKButtonRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions, borders, boxShadows } = theme;
    const { color, variant, size, circular, iconOnly } = ownerState;

    return {
      ...(variant === 'contained' &&
        containedStyles(palette, functions, boxShadows, color)),
      ...(variant === 'outlined' && outlinedStyles(palette, functions, color)),
      ...(variant === 'gradient' &&
        gradientStyles(palette, functions, boxShadows, color)),
      ...(variant === 'text' && textStyles(palette, color)),
      ...(circular && circularStyles(borders)),
      ...(iconOnly && iconOnlyStyles(functions, size)),
    };
  },
);
