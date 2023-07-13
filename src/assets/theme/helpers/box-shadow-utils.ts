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
 * The base box-shadow styles for the Material Kit 2 React.
 * You can add new box-shadow using this file.
 * You can customize the box-shadow for the entire Material Kit 2 React using this file.
 */
import grey from '@mui/material/colors/grey';
import {
  PaletteColor,
  BoxShadowColor,
  PaletteOptions,
  ShadowSize,
} from '@mui/material';

import { Color } from 'chroma-js';

import { paletteKeys, rgba } from './color-utils';
import { pxToRem } from './px-to-rem';
import { paletteLight } from '../base';

export type BoxShadows = ShadowSize & {
  colored: BoxShadowColor;
  sliderBoxShadow: {
    thumb: string;
  };
  tabsBoxShadow: {
    indicator: string;
  };
};

export const boxShadow = (
  offset: { x: number; y: number },
  radius: { blur: number; spread: number },
  color: string | number | Color,
  opacity: number,
  inset = '',
): string =>
  `${inset} ${pxToRem(offset.x)} ${pxToRem(offset.y)} ${pxToRem(
    radius.blur,
  )} ${pxToRem(radius.spread)} ${rgba(color, opacity)}`;

const buildBoxShadowForPaletteColor = (
  color: PaletteColor,
): string => `${boxShadow(
  { x: 0, y: 4 },
  { blur: 20, spread: 0 },
  paletteLight.grey?.['900'] ?? grey[900],
  0.14,
)}, 
  ${boxShadow({ x: 0, y: 7 }, { blur: 10, spread: -5 }, color.main, 0.4)}`;

const getColored = (): BoxShadowColor => {
  const colored = {} as Partial<BoxShadowColor>;
  paletteKeys.forEach(key => {
    colored[key as keyof BoxShadowColor] = buildBoxShadowForPaletteColor(
      <PaletteColor>paletteLight[key as keyof PaletteOptions],
    );
  });
  return {
    ...colored,
    white: `${boxShadow(
      { x: 0, y: 4 },
      { blur: 20, spread: 0 },
      grey[50],
      0.14,
    )}, 
    ${boxShadow({ x: 0, y: 7 }, { blur: 10, spread: -5 }, grey[50], 0.4)}`,
  } as BoxShadowColor;
};

export const boxShadows: BoxShadows = {
  xs: boxShadow({ x: 0, y: 2 }, { blur: 9, spread: -5 }, grey[900], 0.15),
  sm: boxShadow({ x: 0, y: 5 }, { blur: 10, spread: 0 }, grey[900], 0.12),
  md: `${boxShadow({ x: 0, y: 4 }, { blur: 6, spread: -1 }, grey[900], 0.1)}, 
  ${boxShadow({ x: 0, y: 2 }, { blur: 4, spread: -1 }, grey[900], 0.06)}`,
  lg: `${boxShadow({ x: 0, y: 10 }, { blur: 15, spread: -3 }, grey[900], 0.1)}, 
    ${boxShadow({ x: 0, y: 4 }, { blur: 6, spread: -6 }, grey[900], 0.05)}`,
  xl: `${boxShadow({ x: 0, y: 20 }, { blur: 25, spread: -5 }, grey[900], 0.1)}, 
    ${boxShadow({ x: 0, y: 10 }, { blur: 10, spread: -5 }, grey[900], 0.04)}`,
  xxl: boxShadow({ x: 0, y: 20 }, { blur: 27, spread: 0 }, grey[900], 0.05),
  inset: boxShadow(
    { x: 0, y: 1 },
    { blur: 2, spread: 0 },
    grey[900],
    0.075,
    'inset',
  ),
  colored: getColored(),

  sliderBoxShadow: {
    thumb: boxShadow({ x: 0, y: 1 }, { blur: 13, spread: 0 }, grey[900], 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow({ x: 0, y: 1 }, { blur: 5, spread: 1 }, '#ddd', 1),
  },
};
