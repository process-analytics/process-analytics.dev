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
import { Color } from '@mui/material';
import Box from '@mui/material/Box';
import {
  BoxShadowColor,
  CustomPalette,
  Palette,
  styled,
} from '@mui/material/styles';

import {
  BorderRadius,
  GreyColorName,
  PaletteColorName,
  ShadowSize,
} from '../../../types';

interface MKBoxRootProps {
  ownerState: {
    variant?: 'gradient' | 'contained';
    bgColor?: PaletteColorName | GreyColorName | 'transparent';
    color?: PaletteColorName | GreyColorName;
    opacity?: number;
    borderRadius?: BorderRadius;
    shadow?: ShadowSize;
    shadowColor?: keyof BoxShadowColor;
  };
}

function getGreyColor(
  palette: Palette & CustomPalette,
  color: GreyColorName,
): string {
  return palette.grey[color.substr(5) as keyof Color];
}

function getColor(
  palette: Palette & CustomPalette,
  color: PaletteColorName | GreyColorName,
): string {
  return color !== 'grey-100' &&
    color !== 'grey-200' &&
    color !== 'grey-300' &&
    color !== 'grey-400' &&
    color !== 'grey-500' &&
    color !== 'grey-600' &&
    color !== 'grey-700' &&
    color !== 'grey-800' &&
    color !== 'grey-900'
    ? palette[color].main
    : getGreyColor(palette, color);
}

export const MKBoxRoot = styled(Box)<MKBoxRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions, borders, boxShadows } = theme;
    const {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      shadowColor,
    } = ownerState;

    // background value
    let backgroundValue;
    if (variant === 'gradient') {
      backgroundValue = bgColor
        ? functions.linearGradient(
            palette.gradient[bgColor].main,
            palette.gradient[bgColor].dark,
          )
        : 'White';
    } else {
      backgroundValue =
        bgColor &&
        (bgColor === 'transparent'
          ? 'transparent'
          : getColor(palette, bgColor));
    }

    // color value
    const colorValue = color && getColor(palette, color);

    // boxShadow value
    const boxShadowValue = shadow
      ? boxShadows[shadow]
      : shadowColor
      ? boxShadows.colored[shadowColor]
      : 'none';

    return {
      opacity,
      background: backgroundValue,
      color: colorValue,
      borderRadius: borderRadius ? borders.borderRadius[borderRadius] : 'none',
      boxShadow: boxShadowValue,
    };
  },
);
