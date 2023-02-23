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
  BoxShadows,
  PaletteColor,
  BoxShadowColor,
  PaletteOptions,
} from '@mui/material';

// Material Kit 2 React Helper Functions
import { boxShadow } from '../functions/boxShadow';

import { palette, paletteKeys } from './colors';

function buildBoxShadowForPaletteColor(color: PaletteColor): string {
  return `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, 
  ${boxShadow([0, 7], [10, -5], color.main, 0.4)}`;
}

function getColored(): BoxShadowColor {
  const colored = {} as Partial<BoxShadowColor>;
  paletteKeys.forEach(key => {
    colored[key as keyof BoxShadowColor] = buildBoxShadowForPaletteColor(
      <PaletteColor>palette[key as keyof PaletteOptions],
    );
  });
  return {
    ...colored,
    white: `${boxShadow([0, 4], [20, 0], grey[50], 0.14)}, 
    ${boxShadow([0, 7], [10, -5], grey[50], 0.4)}`,
  } as BoxShadowColor;
}

export const boxShadows: BoxShadows = {
  xs: boxShadow([0, 2], [9, -5], grey[900], 0.15),
  sm: boxShadow([0, 5], [10, 0], grey[900], 0.12),
  md: `${boxShadow([0, 4], [6, -1], grey[900], 0.1)}, 
  ${boxShadow([0, 2], [4, -1], grey[900], 0.06)}`,
  lg: `${boxShadow([0, 10], [15, -3], grey[900], 0.1)}, 
    ${boxShadow([0, 4], [6, -2], grey[900], 0.05)}`,
  xl: `${boxShadow([0, 20], [25, -5], grey[900], 0.1)}, 
    ${boxShadow([0, 10], [10, -5], grey[900], 0.04)}`,
  xxl: boxShadow([0, 20], [27, 0], grey[900], 0.05),
  inset: boxShadow([0, 1], [2, 0], grey[900], 0.075, 'inset'),
  colored: getColored(),

  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], grey[900], 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], '#ddd', 1),
  },
};
