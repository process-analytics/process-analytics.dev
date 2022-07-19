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
 * You can customized the box-shadow for the entire Material Kit 2 React using thie file.
 */

// Material Kit 2 React Helper Functions
import boxShadow from '../functions/boxShadow';
import grey from '@mui/material/colors/grey';

const coloredShadows = {
  primary: '#e91e62',
  secondary: '#110e0e',
  info: '#00bbd4',
  success: '#4caf4f',
  warning: '#ff9900',
  error: '#f44336',
  light: '#adb5bd',
  dark: '#404040',
};

export const boxShadows = {
  xs: boxShadow([0, 2], [9, -5], grey[900], 0.15),
  sm: boxShadow([0, 5], [10, 0], grey[900], 0.12),
  md: `${boxShadow([0, 4], [6, -1], grey[900], 0.1)}, ${boxShadow(
    [0, 2],
    [4, -1],
    grey[900],
    0.06,
  )}`,
  lg: `${boxShadow([0, 10], [15, -3], grey[900], 0.1)}, ${boxShadow(
    [0, 4],
    [6, -2],
    grey[900],
    0.05,
  )}`,
  xl: `${boxShadow([0, 20], [25, -5], grey[900], 0.1)}, ${boxShadow(
    [0, 10],
    [10, -5],
    grey[900],
    0.04,
  )}`,
  xxl: boxShadow([0, 20], [27, 0], grey[900], 0.05),
  inset: boxShadow([0, 1], [2, 0], grey[900], 0.075, 'inset'),
  colored: {
    primary: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.primary,
      0.4,
    )}`,
    secondary: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.secondary,
      0.4,
    )}`,
    info: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.info,
      0.4,
    )}`,
    success: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.success,
      0.4,
    )}`,
    warning: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.warning,
      0.4,
    )}`,
    error: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.error,
      0.4,
    )}`,
    light: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.light,
      0.4,
    )}`,
    dark: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.dark,
      0.4,
    )}`,
    white: `${boxShadow([0, 4], [20, 0], grey[50], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      grey[50],
      0.4,
    )}`,
  },

  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], grey[900], 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], '#ddd', 1),
  },
};
