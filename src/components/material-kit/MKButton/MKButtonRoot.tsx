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

import { PaletteColorKey } from '@mui/material';
// @mui material components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { TypeText } from '@mui/material/styles/createPalette';
import {
  borders,
  boxShadow,
  linearGradient,
  rgba,
} from '../../../assets/theme';

interface MKButtonRootProps {
  ownerState: {
    color: PaletteColorKey | 'white' | 'default';
    variant: 'text' | 'contained' | 'outlined' | 'gradient';
    size: 'small' | 'medium' | 'large';
    circular: boolean;
    iconOnly: boolean;
  };
}

export const MKButtonRoot = styled(Button)<MKButtonRootProps>(({
  theme,
  ownerState,
}) => {
  const { palette } = theme;
  const { color, variant, size, circular, iconOnly } = ownerState;

  const { text, grey } = palette;

  // styles for the button with variant="contained"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containedStyles = (): any => {
    // background color value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteColor = palette[color];
    const backgroundValue = paletteColor ? paletteColor.main : 'white';

    // backgroundColor value when button is focused
    const focusedBackgroundValue = paletteColor
      ? paletteColor.contrastText
      : 'white';

    // boxShadow value
    const coloredColor =
      color !== 'white' && color !== 'default' && paletteColor;
    const boxShadowValue = coloredColor
      ? `${boxShadow(
          { x: 0, y: 3 },
          { blur: 3, spread: 0 },
          paletteColor.main,
          0.15,
        )}, ${boxShadow(
          { x: 0, y: 3 },
          { blur: 1, spread: -1 },
          paletteColor.main,
          0.2,
        )}, ${boxShadow(
          { x: 0, y: 1 },
          { blur: 5, spread: 0 },
          paletteColor.main,
          0.15,
        )}`
      : 'none';

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = coloredColor
      ? `${boxShadow(
          { x: 0, y: 14 },
          { blur: 26, spread: -12 },
          paletteColor.main,
          0.4,
        )}, ${boxShadow(
          { x: 0, y: 4 },
          { blur: 23, spread: 0 },
          paletteColor.main,
          0.15,
        )}, ${boxShadow(
          { x: 0, y: 8 },
          { blur: 10, spread: -5 },
          paletteColor.main,
          0.2,
        )}`
      : 'none';

    // color value
    let colorValue = 'white';

    if (color === 'default' || !paletteColor) {
      colorValue = (text as TypeText).primary;
    } else if (color === 'white') {
      colorValue = grey?.A700;
    }

    // color value when button is focused
    let focusedColorValue = 'white';

    if (color === 'default') {
      focusedColorValue = (text as TypeText).primary;
    } else if (color === 'white') {
      focusedColorValue = grey?.A700;
    } else if (color === 'primary' || color === 'error') {
      focusedColorValue = 'white';
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      '&:hover': {
        backgroundColor: backgroundValue,
        boxShadow: hoveredBoxShadowValue,
      },

      '&:focus:not(:hover)': {
        backgroundColor: focusedBackgroundValue,
        boxShadow: paletteColor
          ? boxShadow(
              { x: 0, y: 0 },
              { blur: 0, spread: 3.2 },
              paletteColor.main,
              0.5,
            )
          : boxShadow({ x: 0, y: 0 }, { blur: 0, spread: 3.2 }, 'white', 0.5),
      },

      '&:disabled': {
        backgroundColor: backgroundValue,
        color: focusedColorValue,
      },
    };
  };

  // styles for the button with variant="outlined"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const outlinedStyles = (): any => {
    // background color value
    const backgroundValue =
      color === 'white' ? rgba('white', 0.1) : 'transparent';

    // color value
    const paletteColor =
      color !== 'white' && color !== 'default' && palette[color];
    const colorValue = paletteColor ? paletteColor.main : 'white';

    // boxShadow value
    const boxShadowValue = paletteColor
      ? boxShadow(
          { x: 0, y: 0 },
          { blur: 0, spread: 3.2 },
          paletteColor.main,
          0.5,
        )
      : boxShadow({ x: 0, y: 0 }, { blur: 0, spread: 3.2 }, 'white', 0.5);

    // border color value
    let borderColorValue = paletteColor
      ? paletteColor.main
      : rgba('white', 0.75);

    if (color === 'white') {
      borderColorValue = rgba('white', 0.75);
    }

    return {
      background: backgroundValue,
      color: colorValue,
      borderColor: borderColorValue,

      '&:hover': {
        background: 'transparent',
        borderColor: colorValue,
      },

      '&:focus:not(:hover)': {
        background: 'transparent',
        boxShadow: boxShadowValue,
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

  // styles for the button with variant="gradient"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gradientStyles = (): any => {
    // background value
    const backgroundValue =
      color === 'white' || color === 'default' || !palette[color]
        ? 'white'
        : linearGradient(palette[color].main, palette[color].dark);

    // boxShadow value
    const paletteColor =
      color !== 'white' && color !== 'default' && palette[color];
    const boxShadowValue = paletteColor
      ? `${boxShadow(
          { x: 0, y: 3 },
          { blur: 3, spread: 0 },
          paletteColor.main,
          0.15,
        )}, ${boxShadow(
          { x: 0, y: 3 },
          { blur: 1, spread: -2 },
          paletteColor.main,
          0.2,
        )}, ${boxShadow(
          { x: 0, y: 1 },
          { blur: 5, spread: 0 },
          paletteColor.main,
          0.15,
        )}`
      : 'none';

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue =
      color !== 'white' && color !== 'default' && paletteColor
        ? `${boxShadow(
            { x: 0, y: 14 },
            { blur: 26, spread: -12 },
            paletteColor.main,
            0.4,
          )}, ${boxShadow(
            { x: 0, y: 4 },
            { blur: 23, spread: 0 },
            paletteColor.main,
            0.15,
          )}, ${boxShadow(
            { x: 0, y: 8 },
            { blur: 10, spread: -5 },
            paletteColor.main,
            0.2,
          )}`
        : 'none';

    // color value
    let colorValue: string | undefined = 'white';

    if (color === 'white') {
      colorValue = (text as TypeText).primary;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      '&:hover': {
        backgroundColor: 'white',
        boxShadow: hoveredBoxShadowValue,
      },

      '&:focus:not(:hover)': {
        boxShadow: boxShadowValue,
      },

      '&:disabled': {
        background: backgroundValue,
        color: colorValue,
      },
    };
  };

  // styles for the button with variant="text"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textStyles = (): any => {
    // color value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteColor = palette[color];
    const colorValue = paletteColor ? paletteColor.main : 'white';

    // color value when button is focused
    const focusedColorValue = paletteColor
      ? paletteColor.contrastText
      : 'white';

    return {
      color: colorValue,
      '&:hover': {
        color: focusedColorValue,
      },

      '&:focus:not(:hover)': {
        color: focusedColorValue,
      },
    };
  };

  // styles for the button with circular={true}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const circularStyles = (): any => ({
    borderRadius: borders.radius.section,
  });

  // styles for the button with iconOnly={true}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconOnlyStyles = (): any => {
    // width, height, minWidth and minHeight values
    let sizeValue = '2.375rem';

    if (size === 'small') {
      sizeValue = '1.588rem';
    } else if (size === 'large') {
      sizeValue = '3.25rem';
    }

    // padding value
    let paddingValue = `0.688rem 0.688rem 0.625rem`;

    if (size === 'small') {
      paddingValue = '0.281rem';
    } else if (size === 'large') {
      paddingValue = '1rem';
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

  return {
    ...(variant === 'contained' && containedStyles()),
    ...(variant === 'outlined' && outlinedStyles()),
    ...(variant === 'gradient' && gradientStyles()),
    ...(variant === 'text' && textStyles()),
    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});
