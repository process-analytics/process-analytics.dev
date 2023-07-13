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

/*
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
import { createTheme, PaletteMode, Theme } from '@mui/material';

import { responsiveFontSizes } from './responsiveFont';

// Material Kit 2 React base styles
import { paletteLight, paletteDark, breakpoints, typography } from './base';

// Material Kit 2 React components base styles for @mui material components
import {
  MuiAppBar,
  MuiAutocomplete,
  MuiAvatar,
  MuiBreadcrumbs,
  MuiButton,
  MuiButtonBase,
  MuiCard,
  MuiCardContent,
  MuiCardMedia,
  MuiCheckbox,
  MuiContainer,
  MuiCssBaseline,
  MuiDialog,
  MuiDialogActions,
  MuiDialogContent,
  MuiDialogContentText,
  MuiDialogTitle,
  MuiDivider,
  MuiIcon,
  MuiIconButton,
  MuiInput,
  MuiInputLabel,
  MuiInputBase,
  MuiFormControlLabel,
  MuiFormLabel,
  MuiLinearProgress,
  MuiLink,
  MuiList,
  MuiListItem,
  MuiListItemText,
  MuiMenu,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiPopover,
  MuiRadio,
  MuiSelect,
  MuiSlider,
  MuiStep,
  MuiStepConnector,
  MuiStepIcon,
  MuiStepLabel,
  MuiStepper,
  MuiSvgIcon,
  MuiSwitch,
  MuiTableCell,
  MuiTableContainer,
  MuiTableHead,
  MuiTab,
  MuiTabs,
  MuiTextField,
  MuiTooltip,
} from './components';

export const createResponsiveTheme = (mode: PaletteMode): Theme => {
  const generatedTheme = createTheme({
    breakpoints,
    palette: mode === 'light' ? paletteLight : paletteDark,
    typography,
    components: {
      MuiAppBar,
      MuiAutocomplete,
      MuiAvatar,
      MuiBreadcrumbs,
      MuiButton,
      MuiButtonBase,
      MuiCard,
      MuiCardContent,
      MuiCardMedia,
      MuiCheckbox,
      MuiContainer,
      MuiCssBaseline,
      MuiDialog,
      MuiDialogActions,
      MuiDialogContent,
      MuiDialogContentText,
      MuiDialogTitle,
      MuiDivider,
      MuiFormControlLabel,
      MuiFormLabel,
      MuiIcon,
      MuiIconButton,
      MuiInput,
      MuiInputBase,
      MuiInputLabel,
      MuiLinearProgress,
      MuiLink,
      MuiList,
      MuiListItem,
      MuiListItemText,
      MuiMenu,
      MuiMenuItem,
      MuiOutlinedInput,
      MuiPopover,
      MuiRadio,
      MuiSelect,
      MuiSlider,
      MuiStep,
      MuiStepConnector,
      MuiStepIcon,
      MuiStepLabel,
      MuiStepper,
      MuiSvgIcon,
      MuiSwitch,
      MuiTableCell,
      MuiTableContainer,
      MuiTableHead,
      MuiTab,
      MuiTabs,
      MuiTextField,
      MuiTooltip,
    },
  });

  //Generate responsive typography settings based on the options received.
  return responsiveFontSizes(generatedTheme, {
    breakpoints: generatedTheme.breakpoints.keys,
  });
};
