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

import { CustomPaletteOptions } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles/createPalette';

/**
 * The base colors for the Material Kit 2 React.
 * You can add new color using this file.
 * You can customized the colors for the entire Material Kit 2 React using the file.
 */
export const palette: PaletteOptions & CustomPaletteOptions = {
  background: {
    default: '#f0f2f5',
    paper: '#ffffff',
  },

  text: {
    primary: '#000000',
    secondary: '#DBEFFF',
    disabled: '#7b809a',
  },

  primary: {
    main: '#002395',
    light: '#DBEFFF',
    contrastText: '#DBEFFF',
  },

  secondary: {
    main: '#E20613',
    dark: '#E20613',
    light: '#F9DADC',
    contrastText: '#F9DADC',
  },

  info: {
    main: '#1A73E8',
    contrastText: '#1662C4',
  },

  success: {
    main: '#4CAF50',
    contrastText: '#67bb6a',
  },

  warning: {
    main: '#fb8c00',
    contrastText: '#fc9d26',
  },

  error: {
    main: '#F44335',
    contrastText: '#f65f53',
  },

  light: {
    main: '#EDEEF5',
    contrastText: '#f0f2f5',
  },

  spicy: {
    main: '#05D99E',
  },
  sweet: {
    main: '#FFD560',
  },
  manufacture: {
    main: '#E86A63',
  },
  education: {
    main: '#FFD560',
  },
  telecom: {
    main: '#F1ACC6',
  },
  financial: {
    main: '#62BFEC',
  },
  energy: {
    main: '#2A574A',
  },
  health: {
    main: '#05D99E',
  },
  government: {
    main: '#86BEC2',
  },
  distribution: {
    main: '#7E4F95',
  },

  dark: {
    main: '#344767',
    contrastText: '#2c3c58',
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

  gradient: {
    primary: {
      main: '#EC407A',
      dark: '#D81B60',
    },

    secondary: {
      main: '#E20613',
      dark: '#E20613',
      light: '#F9DADC',
      contrastText: '#F9DADC',
    },

    info: {
      main: '#49a3f1',
      dark: '#1A73E8',
    },

    success: {
      main: '#66BB6A',
      dark: '#43A047',
    },

    warning: {
      main: '#FFA726',
      dark: '#FB8C00',
    },

    error: {
      main: '#EF5350',
      dark: '#E53935',
    },

    light: {
      main: '#EBEFF4',
      dark: '#CED4DA',
    },

    dark: {
      main: '#42424a',
      dark: '#191919',
    },
  },

  socialMediaColors: {
    twitter: {
      main: '#55acee',
      dark: '#3ea1ec',
    },

    pinterest: {
      main: '#cc2127',
      dark: '#b21d22',
    },

    youtube: {
      main: '#e52d27',
      dark: '#d41f1a',
    },

    slack: {
      main: '#3aaf85',
      dark: '#329874',
    },

    github: {
      main: '#24292e',
      dark: '#171a1d',
    },
  },

  badgeColors: {
    primary: {
      main: '#f8b3ca',
      contrastText: '#cc084b',
    },

    secondary: {
      main: '#d7d9e1',
      contrastText: '#6c757d',
    },

    info: {
      main: '#aecef7',
      contrastText: '#095bc6',
    },

    success: {
      main: '#bce2be',
      contrastText: '#339537',
    },

    warning: {
      main: '#ffd59f',
      contrastText: '#c87000',
    },

    error: {
      main: '#fcd3d0',
      contrastText: '#f61200',
    },

    light: {
      main: '#ffffff',
      contrastText: '#c7d3de',
    },

    dark: {
      main: '#8097bf',
      contrastText: '#1e2e4a',
    },
  },
};
