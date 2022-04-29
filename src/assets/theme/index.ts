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
import { createTheme, Theme } from '@mui/material/styles';

// Material Kit 2 React base styles
import colors, { Colors } from './base/colors';
import breakpoints from './base/breakpoints';
import typography from './base/typography';
import boxShadows from './base/boxShadows';
import borders from './base/borders';
import globals from './base/globals';

// Material Kit 2 React helper functions
import boxShadow from './functions/boxShadow';
import hexToRgb from './functions/hexToRgb';
import linearGradient from './functions/linearGradient';
import pxToRem from './functions/pxToRem';
import rgba from './functions/rgba';

// Material Kit 2 React components base styles for @mui material components
import list from './components/list';
import listItem from './components/list/listItem';
import listItemText from './components/list/listItemText';
import card from './components/card';
import cardMedia from './components/card/cardMedia';
import cardContent from './components/card/cardContent';
import button from './components/button';
import iconButton from './components/iconButton';
import input from './components/form/input';
import inputLabel from './components/form/inputLabel';
import inputOutlined from './components/form/inputOutlined';
import textField from './components/form/textField';
import menu from './components/menu';
import menuItem from './components/menu/menuItem';
import switchButton from './components/form/switchButton';
import divider from './components/divider';
import tableContainer from './components/table/tableContainer';
import tableHead from './components/table/tableHead';
import tableCell from './components/table/tableCell';
import linearProgress from './components/linearProgress';
import breadcrumbs from './components/breadcrumbs';
import slider from './components/slider';
import avatar from './components/avatar';
import tooltip from './components/tooltip';
import appBar from './components/appBar';
import tabs from './components/tabs';
import tab from './components/tabs/tab';
import stepper from './components/stepper';
import step from './components/stepper/step';
import stepConnector from './components/stepper/stepConnector';
import stepLabel from './components/stepper/stepLabel';
import stepIcon from './components/stepper/stepIcon';
import select from './components/form/select';
import formControlLabel from './components/form/formControlLabel';
import formLabel from './components/form/formLabel';
import checkbox from './components/form/checkbox';
import radio from './components/form/radio';
import autocomplete from './components/form/autocomplete';
import flatpickr from './components/flatpickr';
import container from './components/container';
import popover from './components/popover';
import buttonBase from './components/buttonBase';
import icon from './components/icon';
import svgIcon from './components/svgIcon';
import link from './components/link';
import dialog from './components/dialog';
import dialogTitle from './components/dialog/dialogTitle';
import dialogContent from './components/dialog/dialogContent';
import dialogContentText from './components/dialog/dialogContentText';
import dialogActions from './components/dialog/dialogActions';

export type CustomTheme = Theme & {
  boxShadows: any;
  borders: any;
  functions: any;
};
const theme: CustomTheme = {
  ...createTheme({
    breakpoints: { ...breakpoints },
    palette: { ...colors },
    typography: { ...typography },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ...globals,
          ...flatpickr,
          ...container,
        },
      },
      MuiList: { ...list },
      MuiListItem: { ...listItem },
      MuiListItemText: { ...listItemText },
      MuiCard: { ...card },
      MuiCardMedia: { ...cardMedia },
      MuiCardContent: { ...cardContent },
      MuiButton: { ...button },
      MuiIconButton: { ...iconButton },
      MuiInput: { ...input },
      MuiInputLabel: { ...inputLabel },
      MuiOutlinedInput: { ...inputOutlined },
      MuiTextField: { ...textField },
      MuiMenu: { ...menu },
      MuiMenuItem: { ...menuItem },
      MuiSwitch: { ...switchButton },
      MuiDivider: { ...divider },
      MuiTableContainer: { ...tableContainer },
      MuiTableHead: { ...tableHead },
      MuiTableCell: { ...tableCell },
      MuiLinearProgress: { ...linearProgress },
      MuiBreadcrumbs: { ...breadcrumbs },
      MuiSlider: { ...slider },
      MuiAvatar: { ...avatar },
      MuiTooltip: { ...tooltip },
      MuiAppBar: { ...appBar },
      MuiTabs: { ...tabs },
      MuiTab: { ...tab },
      MuiStepper: { ...stepper },
      MuiStep: { ...step },
      MuiStepConnector: { ...stepConnector },
      MuiStepLabel: { ...stepLabel },
      MuiStepIcon: { ...stepIcon },
      MuiSelect: { ...select },
      MuiFormControlLabel: { ...formControlLabel },
      MuiFormLabel: { ...formLabel },
      MuiCheckbox: { ...checkbox },
      MuiRadio: { ...radio },
      MuiAutocomplete: { ...autocomplete },
      MuiPopover: { ...popover },
      MuiButtonBase: { ...buttonBase },
      MuiIcon: { ...icon },
      MuiSvgIcon: { ...svgIcon },
      MuiLink: { ...link },
      MuiDialog: { ...dialog },
      MuiDialogTitle: { ...dialogTitle },
      MuiDialogContent: { ...dialogContent },
      MuiDialogContentText: { ...dialogContentText },
      MuiDialogActions: { ...dialogActions },
    },
  }),
  borders: { ...borders },
  boxShadows: { ...boxShadows },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
};
export default theme;
