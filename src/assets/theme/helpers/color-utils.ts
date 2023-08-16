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

// chroma-js is a library for all kinds of color conversions and color scales.
import chroma, { Color } from 'chroma-js';

import { GreyColorName, PaletteColorKey, PaletteOptions } from '@mui/material';

export const paletteKeys: (keyof PaletteOptions)[] = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
  'tertiary',
  'quaternary',
  'primaryLight',
  'secondaryLight',
  'spicy',
  'sweet',
  'manufacture',
  'education',
  'telecom',
  'financial',
  'energy',
  'health',
  'government',
  'distribution',
];

export const isPaletteColorName = (color: string): color is PaletteColorKey =>
  paletteKeys.includes(color as keyof PaletteOptions);

export const isGreyColorName = (color: string): color is GreyColorName =>
  color === 'grey-100' ||
  color === 'grey-200' ||
  color === 'grey-300' ||
  color === 'grey-400' ||
  color === 'grey-500' ||
  color === 'grey-600' ||
  color === 'grey-700' ||
  color === 'grey-800' ||
  color === 'grey-900';

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

export const light = '#f0f2f5';
export const dark = '#344767';
export const darker = '#191919';

/**
 The hexToRgb() function helps you to change the hex color code to rgb
 using chroma-js library.
 */

export const hexToRgb = (color: string | number | Color): string =>
  chroma(color).rgb(false).join(', ');

/**
 The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
 to convert the hex code into rgb for using it inside the rgba color format.
 */

export const rgba = (color: string | number | Color, opacity: number): string =>
  `rgba(${hexToRgb(color)}, ${opacity})`;

/**
 The linearGradient() function helps you to create a linear gradient color background
 */

export const linearGradient = (
  color: string | number | Color,
  colorState: string | number | Color,
  angle = 195,
): string => `linear-gradient(${angle}deg, ${color}, ${colorState})`;
