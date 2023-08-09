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
import {
  BorderSize,
  BoxShadowColor,
  GreyColorName,
  Palette,
  PaletteColorKey,
  ShadowSize,
  styled,
  Box,
  Color,
} from '@mui/material';

import {
  borders,
  boxShadows,
  isGreyColorName,
  isPaletteColorName,
  linearGradient,
} from '../../../assets/theme';

export type BoxProps = {
  variant?: 'gradient' | 'contained';
  bgColor?: PaletteColorKey | GreyColorName | 'transparent' | 'inherit';
  color?: PaletteColorKey | GreyColorName | 'inherit';
  opacity?: number;
  borderRadius?: keyof BorderSize;
  shadow?: {
    size?: keyof ShadowSize;
    color?: keyof BoxShadowColor;
  };
};

type MKBoxRootProps = {
  ownerState: BoxProps;
};

const getGreyColor = (palette: Palette, color: GreyColorName): string =>
  palette.grey[color.substr(5) as keyof Color];

const getColor = (
  palette: Palette,
  color: PaletteColorKey | GreyColorName,
): string =>
  isPaletteColorName(color)
    ? palette[color].main
    : getGreyColor(palette, color);

export const MKBoxRoot = styled(Box)<MKBoxRootProps>(({
  theme,
  ownerState,
}) => {
  const { palette } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState;

  // background value
  let backgroundValue;
  if (variant === 'gradient') {
    backgroundValue =
      bgColor && isPaletteColorName(bgColor)
        ? linearGradient(palette[bgColor].main, palette[bgColor].dark)
        : 'White';
  } else if (!bgColor || bgColor === 'transparent') {
    backgroundValue = 'transparent';
  } else if (bgColor === 'inherit') {
    backgroundValue = 'inherit';
  } else if (isPaletteColorName(bgColor) || isGreyColorName(bgColor)) {
    backgroundValue = getColor(palette, bgColor);
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue;
  if (color && (isPaletteColorName(color) || isGreyColorName(color))) {
    colorValue = getColor(palette, color);
  } else if (color && !bgColor) {
    colorValue = color;
  } else if (bgColor === 'inherit') {
    colorValue = 'inherit';
  } else if (bgColor && isPaletteColorName(bgColor)) {
    colorValue = palette[bgColor].contrastText;
  } else {
    colorValue = palette.text.primary;
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadius ? borders.radius[borderRadius] : 'none',
    boxShadow: shadow?.size
      ? boxShadows[shadow.size]
      : shadow?.color
      ? boxShadows.colored[shadow.color]
      : 'none',
  };
});
