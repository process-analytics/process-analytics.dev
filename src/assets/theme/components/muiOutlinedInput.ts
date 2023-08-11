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

import { Components, Palette, PaletteColor, Theme } from '@mui/material';
import grey from '@mui/material/colors/grey';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme, ownerState: { color } }) => ({
      backgroundColor: `${theme.palette.quaternary.main} !important`,
      fontSize: '0.875rem !important',
      borderRadius: '0.375rem',

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#d2d6da',
      },

      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: (theme.palette[color as keyof Palette] as PaletteColor)
            .main,
        },
      },
    }),

    notchedOutline: {
      borderColor: '#d2d6da',
    },

    input: {
      color: grey[700],
      padding: '0.75rem',
      backgroundColor: 'transparent',
    },

    inputSizeSmall: {
      fontSize: '0.75rem !important',
      padding: '0.625rem',
    },

    multiline: {
      color: grey[700],
      padding: 0,
    },
  },
};
