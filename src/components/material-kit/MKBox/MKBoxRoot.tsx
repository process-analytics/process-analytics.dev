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
import type {
  BorderSize,
  BoxShadowColor,
  GreyColorName,
  Palette,
  PaletteColorKey,
  ShadowSize,
  Color,
} from '@mui/material';
import { styled, Box } from '@mui/material';

import {
  borders,
  boxShadows,
  isGreyColorName,
  isPaletteColorName,
  linearGradient,
} from '../../../assets/theme';

export type BoxProps = {
  variant?: 'gradient' | 'contained';
  bgcolor?: PaletteColorKey | GreyColorName | 'transparent' | 'inherit';
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
  const {
    variant = 'contained',
    bgcolor = 'inherit',
    color,
    opacity,
    borderRadius,
    shadow,
  } = ownerState;

  // background value
  let backgroundValue;
  if (variant === 'gradient') {
    backgroundValue =
      bgcolor && isPaletteColorName(bgcolor)
        ? linearGradient(palette[bgcolor].main, palette[bgcolor].dark)
        : 'White';
  } else if (isPaletteColorName(bgcolor) || isGreyColorName(bgcolor)) {
    backgroundValue = getColor(palette, bgcolor);
  } else {
    backgroundValue = bgcolor;
  }

  // color value
  let colorValue;
  if (color && (isPaletteColorName(color) || isGreyColorName(color))) {
    colorValue = getColor(palette, color);
  } else if (color && !bgcolor) {
    colorValue = color;
  } else if (bgcolor === 'inherit') {
    colorValue = 'inherit';
  } else if (bgcolor && isPaletteColorName(bgcolor)) {
    colorValue = palette[bgcolor].contrastText;
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
