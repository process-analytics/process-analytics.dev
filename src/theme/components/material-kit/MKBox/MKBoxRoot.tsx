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

import { BgColor, Color, ColoredShadow } from '../../../types';

interface MKBoxRootProps {
  ownerState: {
    variant?: 'gradient' | 'contained';
    bgColor?: BgColor;
    color?: Color;
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
    coloredShadow?: ColoredShadow;
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

  // background value
  let backgroundValue;
  if (variant === 'gradient') {
    backgroundValue = bgColor
      ? linearGradient(gradient[bgColor].main, gradient[bgColor].dark)
      : 'White';
  } else {
    backgroundValue =
      bgColor && palette[bgColor]
        ? palette[bgColor].main
        : greyColors
        ? bgColor &&
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          greyColors[bgColor]
        : undefined;
  }

  // color value
  const colorValue =
    color && palette[color]
      ? palette[color].main
      : greyColors
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        greyColors[color]
      : undefined;

  // borderRadius value
  let borderRadiusValue = 'none';
  if (borderRadius && borderRadius !== 'none') {
    borderRadiusValue = radius[borderRadius];
  }

  // boxShadow value
  let boxShadowValue = 'none';
  if (shadow && shadow !== 'none') {
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
