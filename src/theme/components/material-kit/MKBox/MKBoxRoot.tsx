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
  BorderRadius,
  BoxShadowColor,
  CustomPalette,
  GreyColorName,
  Palette,
  PaletteColorKey,
  ShadowSize,
  styled,
} from '@mui/material/styles';
import {
  isGreyColorName,
  isPaletteColorName,
} from '../../../../assets/theme/base/colors';

interface MKBoxRootProps {
  ownerState: {
    variant?: 'gradient' | 'contained';
    bgColor?:
      | PaletteColorKey
      | GreyColorName
      | 'transparent'
      | 'light'
      | 'dark'
      | 'default'
      | 'inherit'
      | string;
    color?: PaletteColorKey | GreyColorName | 'white' | 'inherit' | string;
    opacity?: number;
    borderRadius?: keyof BorderRadius;
    shadow?: keyof ShadowSize;
    shadowColor?: keyof BoxShadowColor;
  };
}

const getGreyColor = (
  palette: Palette & CustomPalette,
  color: GreyColorName,
): string => palette.grey[color.substr(5) as keyof Color];

const getColor = (
  palette: Palette & CustomPalette,
  color: PaletteColorKey | GreyColorName,
): string =>
  isPaletteColorName(color)
    ? palette[color].main
    : getGreyColor(palette, color);

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
        ? functions.linearGradient(palette[bgColor].main, palette[bgColor].dark)
        : 'White';
    } else if (!bgColor || bgColor === 'transparent') {
      backgroundValue = 'transparent';
    } else if (bgColor === 'inherit') {
      backgroundValue = 'inherit';
    } else if (bgColor === 'default') {
      backgroundValue = palette.background.default;
    } else if (isPaletteColorName(bgColor) || isGreyColorName(bgColor)) {
      backgroundValue = getColor(palette, bgColor);
    } else {
      backgroundValue = bgColor;
    }

    // color value
    let colorValue;
    if (color && (isPaletteColorName(color) || isGreyColorName(color))) {
      colorValue = getColor(palette, color);
    } else if (!bgColor) {
      colorValue = color;
    } else if (bgColor === 'inherit') {
      colorValue = 'inherit';
    } else if (isPaletteColorName(bgColor)) {
      colorValue = palette[bgColor].contrastText;
    } else {
      colorValue = palette.text;
    }

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
