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

// @mui material components
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface MKBoxRootProps {
  ownerState: {
    variant?: 'gradient' | 'contained';
    bgColor?: string;
    color?: string;
    opacity?: number;
    borderRadius?:
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | 'section'
      | 'none';
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inset' | 'none';
    coloredShadow?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'info'
      | 'warning'
      | 'error'
      | 'light'
      | 'dark'
      | 'none';
  };
}

export default styled(Box)<MKBoxRootProps>(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const {
    variant,
    bgColor,
    color,
    opacity,
    borderRadius,
    shadow,
    coloredShadow,
  } = ownerState;

  const { gradient, grey } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = grey
    ? {
        'grey-100': grey[100],
        'grey-200': grey[200],
        'grey-300': grey[300],
        'grey-400': grey[400],
        'grey-500': grey[500],
        'grey-600': grey[600],
        'grey-700': grey[700],
        'grey-800': grey[800],
        'grey-900': grey[900],
      }
    : undefined;

  const validGradients = [
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
  ];

  const validColors = [
    'transparent',
    'white',
    'black',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
    'text',
    'grey-100',
    'grey-200',
    'grey-300',
    'grey-400',
    'grey-500',
    'grey-600',
    'grey-700',
    'grey-800',
    'grey-900',
  ];

  const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section'];
  const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset'];

  // background value
  let backgroundValue = bgColor;

  if (variant === 'gradient') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const gradientBgColor = gradient[bgColor];
    backgroundValue = validGradients.find(el => el === bgColor)
      ? linearGradient(gradientBgColor.main, gradientBgColor.dark)
      : 'White';
  } else if (validColors.find(el => el === bgColor)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteBgColor = palette[bgColor];

    backgroundValue = paletteBgColor
      ? paletteBgColor.main
      : greyColors
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        greyColors[bgColor]
      : undefined;
  }

  // color value
  let colorValue = color;

  if (validColors.find(el => el === color)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    colorValue = palette[color]
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        palette[color].main
      : greyColors
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        greyColors[color]
      : undefined;
  }

  // borderRadius value
  let borderRadiusValue = '';
  if (
    borderRadius &&
    borderRadius !== 'none' &&
    validBorderRadius.find(el => el === borderRadius)
  ) {
    borderRadiusValue = radius[borderRadius];
  } else if (borderRadius) {
    borderRadiusValue = borderRadius;
  }

  // boxShadow value
  let boxShadowValue = 'none';

  if (
    shadow &&
    shadow !== 'none' &&
    validBoxShadows.find(el => el === shadow)
  ) {
    boxShadowValue = boxShadows[shadow];
  } else if (coloredShadow && coloredShadow !== 'none') {
    boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : 'none';
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});
