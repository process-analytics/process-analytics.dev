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
import colors from '../../base/colors';
import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';

// Material Kit 2 React helper functions
import pxToRem from '../../functions/pxToRem';
import linearGradient from '../../functions/linearGradient';

const { white, gradient, grey, transparent } = colors;
const { borderWidth } = borders;
const { md } = boxShadows;

const info = gradient.info as SimplePaletteColorOptions;
const grey400 = grey ? grey[400] : undefined;

export default {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradient.dark.main,

      '&:hover': {
        backgroundColor: transparent.main,
      },

      '&.Mui-checked': {
        color: gradient.dark.main,

        '&:hover': {
          backgroundColor: transparent.main,
        },

        '& .MuiSwitch-thumb': {
          borderColor: `${gradient.dark.main} !important`,
        },

        '& + .MuiSwitch-track': {
          backgroundColor: `${gradient.dark.main} !important`,
          borderColor: `${gradient.dark.main} !important`,
          opacity: 1,
        },
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: '0.3 !important',
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
        backgroundImage: linearGradient(info?.main, info?.dark),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey400}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey400,
      border: `${borderWidth[1]} solid ${grey400}`,
      opacity: 1,
    },

    checked: {},
  },
};
