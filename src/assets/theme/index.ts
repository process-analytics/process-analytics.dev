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
import { createTheme, Theme } from '@mui/material';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';

// Material Kit 2 React base styles
import {
  palette,
  breakpoints,
  typography,
  boxShadows,
  borders,
  globals,
} from './base';

// Material Kit 2 React helper functions
import {
  boxShadow,
  hexToRgb,
  linearGradient,
  pxToRem,
  rgba,
} from './functions';

// Material Kit 2 React components base styles for @mui material components
import {
  MuiIconButton,
  MuiTooltip,
  MuiAppBar,
  MuiContainer,
  MuiIcon,
  MuiSvgIcon,
  MuiLink,
  MuiCard,
} from './components';

const generatedTheme = createTheme({
  breakpoints,
  palette,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        globals,
      },
    },
    MuiIconButton,
    MuiTooltip,
    MuiAppBar,
    MuiIcon,
    MuiSvgIcon,
    MuiLink,
    MuiContainer,
    MuiCard,
  },
});

export const theme: Theme = {
  //Generate responsive typography settings based on the options received.
  ...responsiveFontSizes(generatedTheme, {
    breakpoints: generatedTheme.breakpoints.keys,
  }),
  borders,
  boxShadows,
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
};
