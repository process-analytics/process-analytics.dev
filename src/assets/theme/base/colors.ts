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

import { PaletteOptions, SocialPaletteOptions } from '@mui/material';

/**
 * The base colors for the Material Kit 2 React.
 * You can add new color using this file.
 * You can customize the colors for the entire Material Kit 2 React using the file.
 *
 * @see https://material-ui.com/customization/color/
 */
export const paletteLight: PaletteOptions & SocialPaletteOptions = {
  mode: 'light',
  contrastThreshold: 4.5,

  background: {
    default: '#ffffff',
    paper: '#f8fdff',
  },

  common: {
    black: '#ffffff',
    white: '#000000',
  },

  text: {
    primary: '#001f25',
    secondary: '#001f25',
    disabled: '#767680',
  },

  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  // See https://mui.com/material-ui/customization/palette/#providing-the-colors-directly
  primary: {
    main: '#3e54c1',
    light: '#6476CD',
    dark: '#2B3A87',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: '#c0000d',
    light: '#CC333D',
    dark: '#860009',
    contrastText: '#FFFFFF',
  },

  info: {
    main: '#005bc0',
    light: '#337BCC',
    dark: '#003F86',
    contrastText: '#FFFFFF',
  },

  success: {
    main: '#006e1c',
    light: '#338B49',
    dark: '#004D13',
    contrastText: '#FFFFFF',
  },

  warning: {
    main: '#8f4e00',
    light: '#A57133',
    dark: '#643600',
    contrastText: '#FFFFFF',
  },

  error: {
    main: '#bb1712',
    light: '#C84541',
    dark: '#82100C',
    contrastText: '#FFFFFF',
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
    main: '#1c5fa5',
    light: '#497FB7',
    dark: '#134273',
    contrastText: '#FFFFFF',
  },

  quaternary: {
    main: '#FFFFFF',
    light: '#FFFFFF',
    dark: '#B2B2B2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  primaryLight: {
    main: '#00658b',
    light: '#3383A2',
    dark: '#004661',
    contrastText: '#FFFFFF',
  },
  secondaryLight: {
    main: '#9b404f',
    light: '#AF6672',
    dark: '#6C2C37',
    contrastText: '#FFFFFF',
  },
  spicy: {
    main: '#006c4d',
    light: '#338970',
    dark: '#004B35',
    contrastText: '#FFFFFF',
  },
  sweet: {
    main: '#755b00',
    light: '#907B33',
    dark: '#513F00',
    contrastText: '#FFFFFF',
  },
  manufacture: {
    main: '#a63935',
    light: '#B7605D',
    dark: '#742725',
    contrastText: '#FFFFFF',
  },
  education: {
    main: '#755b00',
    light: '#907B33',
    dark: '#513F00',
    contrastText: '#FFFFFF',
  },
  telecom: {
    main: '#964068',
    light: '#AB6686',
    dark: '#692C48',
    contrastText: '#FFFFFF',
  },
  financial: {
    main: '#006688',
    light: '#33849F',
    dark: '#00475F',
    contrastText: '#FFFFFF',
  },
  energy: {
    main: '#006b56',
    light: '#338877',
    dark: '#004A3C',
    contrastText: '#FFFFFF',
  },
  health: {
    main: '#006c4d',
    light: '#338970',
    dark: '#004B35',
    contrastText: '#FFFFFF',
  },
  government: {
    main: '#00696e',
    light: '#33878B',
    dark: '#00494D',
    contrastText: '#FFFFFF',
  },
  distribution: {
    main: '#7c4996',
    light: '#966DAB',
    dark: '#563369',
    contrastText: '#FFFFFF',
  },

  twitter: {
    main: '#55acee',
    light: '#77BCF1',
    dark: '#3B78A6',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  pinterest: {
    main: '#cc2127',
    light: '#D64D52',
    dark: '#8E171B',
    contrastText: '#FFFFFF',
  },

  youtube: {
    main: '#e52d27',
    light: '#EA5752',
    dark: '#A01F1B',
    contrastText: '#FFFFFF',
  },

  slack: {
    main: '#3aaf85',
    light: '#61BF9D',
    dark: '#287A5D',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  github: {
    main: '#24292e',
    light: '#4F5357',
    dark: '#191C20',
    contrastText: '#FFFFFF',
  },
};

export const paletteDark: PaletteOptions & SocialPaletteOptions = {
  mode: 'dark',
  contrastThreshold: 4.5,

  background: {
    default: '#001f25',
    paper: '#001f25',
  },

  common: {
    black: '#ffffff',
    white: '#000000',
  },

  text: {
    primary: '#a6eeff',
    /* secondary: '#a6eeff',
      disabled: '#90909a',*/
  },

  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  // See https://mui.com/material-ui/customization/palette/#providing-the-colors-directly
  primary: {
    main: '#bac3ff',
    light: '#C7CFFF',
    dark: '#8288B2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  secondary: {
    main: '#ffb4aa',
    light: '#FFC3BB',
    dark: '#B27D76',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  info: {
    main: '#adc7ff',
    light: '#BDD2FF',
    dark: '#798BB2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  success: {
    main: '#78dc77',
    light: '#93E392',
    dark: '#549A53',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  warning: {
    main: '#ffb77b',
    light: '#FFC595',
    dark: '#B28056',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  error: {
    main: '#ffb4ab',
    light: '#FFC3BB',
    dark: '#B27D77',
    contrastText: 'rgba(0, 0, 0, 0.87)',
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
    main: '#a5c8ff',
    light: '#B7D3FF',
    dark: '#738CB2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  quaternary: {
    main: '#001f25',
    light: '#334B50',
    dark: '#001519',
    contrastText: '#FFFFFF',
  },

  primaryLight: {
    main: '#7ed0ff',
    light: '#97D9FF',
    dark: '#5891B2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondaryLight: {
    main: '#ffb2ba',
    light: '#FFC1C7',
    dark: '#B27C82',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  spicy: {
    main: '#21e1a5',
    light: '#4DE7B7',
    dark: '#179D73',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  sweet: {
    main: '#ecc248',
    light: '#EFCE6C',
    dark: '#A58732',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  manufacture: {
    main: '#ffb3ad',
    light: '#FFC2BD',
    dark: '#B27D79',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  education: {
    main: '#ecc248',
    light: '#EFCE6C',
    dark: '#A58732',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  telecom: {
    main: '#ffb0ce',
    light: '#FFBFD7',
    dark: '#B27B90',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  financial: {
    main: '#75d1ff',
    light: '#90DAFF',
    dark: '#5192B2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  energy: {
    main: '#5fdbba',
    light: '#7FE2C7',
    dark: '#429982',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  health: {
    main: '#21e1a5',
    light: '#4DE7B7',
    dark: '#179D73',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  government: {
    main: '#4cd9e2',
    light: '#6FE0E7',
    dark: '#35979E',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  distribution: {
    main: '#e8b3ff',
    light: '#ECC2FF',
    dark: '#A27DB2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  twitter: {
    main: '#93ccff',
    light: '#A8D6FF',
    dark: '#668EB2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  pinterest: {
    main: '#ffb3ad',
    light: '#FFC2BD',
    dark: '#B27D79',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  youtube: {
    main: '#ffb4aa',
    light: '#FFC3BB',
    dark: '#B27D76',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  slack: {
    main: '#6adbae',
    light: '#87E2BE',
    dark: '#4A9979',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  github: {
    main: '#90cdff',
    light: '#A6D7FF',
    dark: '#648FB2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
};
