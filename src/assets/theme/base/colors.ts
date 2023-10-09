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

import type { PaletteOptions, SocialPaletteOptions } from '@mui/material';

/**
 * The base colors for the Material Kit 2 React.
 * You can add new color using this file.
 * You can customize the colors for the entire Material Kit 2 React using the file.
 *
 * @see https://material-ui.com/customization/color/
 */
export const palette: PaletteOptions & SocialPaletteOptions = {
  mode: 'light',
  contrastThreshold: 4.5,

  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },

  common: {
    black: '#ffffff',
    white: '#000000',
  },

  text: {
    primary: '#002395',
    secondary: '#DBEFFF',
    disabled: '#7b809a',
  },

  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  // See https://mui.com/material-ui/customization/palette/#providing-the-colors-directly
  primary: {
    main: '#002395',
  },

  secondary: {
    main: '#E20613',
  },

  info: {
    main: '#1A73E8',
    light: '#69a1ff',
    dark: '#0049b5',
    contrastText: '#ffffff',
  },

  success: {
    main: '#4CAF50',
    light: '#80e27e',
    dark: '#087f23',
    contrastText: 'white',
  },

  warning: {
    main: '#fb8c00',
    light: '#ffbd45',
    dark: '#c25e00',
    contrastText: '#000000',
  },

  error: {
    main: '#F44335',
    light: '#ff7960',
    dark: '#b9000b',
    contrastText: '#000000',
  },

  grey: {
    '100': '#f8f9fa',
    '200': '#f0f2f5',
    '300': '#dee2e6',
    '400': '#ced4da',
    '500': '#adb5bd',
    '600': '#6c757d',
    '700': '#495057',
    '800': '#343a40',
    '900': '#212529',
  },

  // Provide every color token (light, main, dark, and contrastText) when using
  // custom colors for props in Material UI's components.
  tertiary: {
    main: '#EDEEF5',
    light: 'rgb(240, 241, 247)',
    dark: 'rgb(165, 166, 171)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  quaternary: {
    main: '#FFFFFF',
    light: 'rgb(255, 255, 255)',
    dark: 'rgb(178, 178, 178)',
    contrastText: '#002395',
  },

  primaryLight: {
    main: '#DBEFFE',
    light: 'rgb(226, 242, 254)',
    dark: 'rgb(153, 167, 177)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondaryLight: {
    main: '#F9DADC',
    light: 'rgb(250, 225, 227)',
    dark: 'rgb(174, 152, 154)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  spicy: {
    main: '#05D99E',
    light: 'rgb(55, 224, 177)',
    dark: 'rgb(3, 151, 110)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  sweet: {
    main: '#FFD560',
    light: 'rgb(255, 221, 127)',
    dark: 'rgb(178, 149, 67)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  manufacture: {
    main: '#E86A63',
    light: 'rgb(236, 135, 130)',
    dark: 'rgb(162, 74, 69)',
    contrastText: '#fff',
  },
  education: {
    main: '#FFD560',
    light: 'rgb(255, 221, 127)',
    dark: 'rgb(178, 149, 67)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  telecom: {
    main: '#F1ACC6',
    light: 'rgb(243, 188, 209)',
    dark: 'rgb(168, 120, 138)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  financial: {
    main: '#62BFEC',
    light: 'rgb(129, 203, 239)',
    dark: 'rgb(68, 133, 165)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  energy: {
    main: '#2A574A',
    light: 'rgb(84, 120, 110)',
    dark: 'rgb(29, 60, 51)',
    contrastText: '#fff',
  },
  health: {
    main: '#05D99E',
    light: 'rgb(55, 224, 177)',
    dark: 'rgb(3, 151, 110)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  government: {
    main: '#86BEC2',
    light: 'rgb(158, 203, 206)',
    dark: 'rgb(93, 133, 135)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  distribution: {
    main: '#7E4F95',
    light: 'rgb(151, 114, 170)',
    dark: 'rgb(88, 55, 104)',
    contrastText: '#fff',
  },

  twitter: {
    main: '#55acee',
    light: 'rgb(119, 188, 241)',
    dark: '#3ea1ec',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  pinterest: {
    main: '#cc2127',
    light: 'rgb(214, 77, 82)',
    dark: '#b21d22',
    contrastText: '#fff',
  },

  youtube: {
    main: '#e52d27',
    light: 'rgb(234, 87, 82)',
    dark: '#d41f1a',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  slack: {
    main: '#3aaf85',
    light: 'rgb(97, 191, 157)',
    dark: '#329874',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  github: {
    main: '#24292e',
    light: 'rgb(79, 83, 87)',
    dark: '#171a1d',
    contrastText: '#fff',
  },
};
