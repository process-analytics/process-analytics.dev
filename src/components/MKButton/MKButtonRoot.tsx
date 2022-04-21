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

// @mui material components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { CustomTheme } from '../../assets/theme';
import { Colors } from '../../assets/theme/base/colors';

interface MKButtonRootProps {
  ownerState: {
    color:
      | 'white'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'light'
      | 'dark'
      | 'default';
    variant: 'text' | 'contained' | 'outlined' | 'gradient';
    size?: 'small' | 'medium' | 'large';
    circular?: boolean;
    iconOnly?: boolean;
  };
}

export default styled(Button)<MKButtonRootProps>(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme as CustomTheme;
  const { color, variant, size, circular, iconOnly } = ownerState;

  const { white, text, transparent, gradient, dark } =
    palette as unknown as Colors;
  const { boxShadow, linearGradient, pxToRem, rgba } = functions;
  const { borderRadius } = borders;
  const { colored } = boxShadows;

  // styles for the button with variant="contained"
  const containedStyles = (): any => {
    // background color value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteColor = palette[color];
    const backgroundValue = paletteColor ? paletteColor.main : white.main;

    // backgroundColor value when button is focused
    const focusedBackgroundValue = paletteColor
      ? paletteColor.contrastText
      : white.contrastText;

    // boxShadow value
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], [3, 0], paletteColor.main, 0.15)}, ${boxShadow(
          [0, 3],
          [1, -2],
          paletteColor.main,
          0.2,
        )}, ${boxShadow([0, 1], [5, 0], paletteColor.main, 0.15)}`
      : 'none';

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], [26, -12], paletteColor.main, 0.4)}, ${boxShadow(
          [0, 4],
          [23, 0],
          paletteColor.main,
          0.15,
        )}, ${boxShadow([0, 8], [10, -5], paletteColor.main, 0.2)}`
      : 'none';

    // color value
    let colorValue = white.main;

    if (color === 'default' || !paletteColor) {
      colorValue = (text as SimplePaletteColorOptions)?.main;
    } else if (color === 'white' || color === 'light') {
      colorValue = dark.main;
    }

    // color value when button is focused
    let focusedColorValue = white.main;

    if (color === 'default') {
      focusedColorValue = (text as SimplePaletteColorOptions)?.main;
    } else if (color === 'white') {
      focusedColorValue = dark.main;
    } else if (color === 'primary' || color === 'error' || color === 'dark') {
      focusedColorValue = white.main;
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
          ? boxShadow([0, 0], [0, 3.2], paletteColor.main, 0.5)
          : boxShadow([0, 0], [0, 3.2], white.main, 0.5),
      },

      '&:disabled': {
        backgroundColor: backgroundValue,
        color: focusedColorValue,
      },
    };
  };

  // styles for the button with variant="outlined"
  const outlinedStyles = (): any => {
    // background color value
    const backgroundValue =
      color === 'white' ? rgba(white.main, 0.1) : transparent.main;

    // color value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteColor = palette[color];
    const colorValue = paletteColor ? paletteColor.main : white.main;

    // boxShadow value
    const boxShadowValue = paletteColor
      ? boxShadow([0, 0], [0, 3.2], paletteColor.main, 0.5)
      : boxShadow([0, 0], [0, 3.2], white.main, 0.5);

    // border color value
    let borderColorValue = paletteColor
      ? paletteColor.main
      : rgba(white.main, 0.75);

    if (color === 'white') {
      borderColorValue = rgba(white.main, 0.75);
    }

    return {
      background: backgroundValue,
      color: colorValue,
      borderColor: borderColorValue,

      '&:hover': {
        background: transparent.main,
        borderColor: colorValue,
      },

      '&:focus:not(:hover)': {
        background: transparent.main,
        boxShadow: boxShadowValue,
      },

      '&:active:not(:hover)': {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85,
      },

      '&:disabled': {
        color: colorValue,
        borderColor: colorValue,
      },
    };
  };

  // styles for the button with variant="gradient"
  const gradientStyles = (): any => {
    // background value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const gradientColor = gradient[color];
    const backgroundValue =
      color === 'white' || !gradientColor
        ? white.main
        : linearGradient(gradientColor.main, gradientColor.dark);

    // boxShadow value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteColor = palette[color];
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], [3, 0], paletteColor.main, 0.15)}, ${boxShadow(
          [0, 3],
          [1, -2],
          paletteColor.main,
          0.2,
        )}, ${boxShadow([0, 1], [5, 0], paletteColor.main, 0.15)}`
      : 'none';

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], [26, -12], paletteColor.main, 0.4)}, ${boxShadow(
          [0, 4],
          [23, 0],
          paletteColor.main,
          0.15,
        )}, ${boxShadow([0, 8], [10, -5], paletteColor.main, 0.2)}`
      : 'none';

    // color value
    let colorValue: string | undefined = white.main;

    if (color === 'white') {
      colorValue = (text as SimplePaletteColorOptions)?.main;
    } else if (color === 'light') {
      colorValue = gradient.dark.dark;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      '&:hover': {
        backgroundColor: white.main,
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
  const textStyles = (): any => {
    // color value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteColor = palette[color];
    const colorValue = paletteColor ? paletteColor.main : white.main;

    // color value when button is focused
    const focusedColorValue = paletteColor
      ? paletteColor.contrastText
      : white.contrastText;

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
  const circularStyles = (): any => ({
    borderRadius: borderRadius.section,
  });

  // styles for the button with iconOnly={true}
  const iconOnlyStyles = (): any => {
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

  return {
    ...(variant === 'contained' && containedStyles()),
    ...(variant === 'outlined' && outlinedStyles()),
    ...(variant === 'gradient' && gradientStyles()),
    ...(variant === 'text' && textStyles()),
    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});
