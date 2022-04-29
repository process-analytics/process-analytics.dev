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

import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
// Material Kit 2 React base styles
import colors from '../base/colors';

// Material Kit 2 React helper functions
import rgba from '../functions/rgba';

const { info, white, gradient } = colors;

const infoMain = (info as SimplePaletteColorOptions)?.main;
const infoContrastText = (info as SimplePaletteColorOptions)?.contrastText;

export default {
  '.flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus':
    {
      background: rgba(infoMain, 0.28),
      border: 'none',
    },

  '.flatpickr-day.today': {
    background: infoMain,
    color: white.main,
    border: 'none',

    '&:hover, &:focus': {
      background: `${infoContrastText} !important`,
    },
  },

  '.flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus':
    {
      background: `${
        (gradient.info as SimplePaletteColorOptions)?.dark
      } !important`,
      color: white.main,
      border: 'none',
    },

  '.flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg':
    {
      color: `${infoMain} !important`,
      fill: `${infoMain} !important`,
    },
};
