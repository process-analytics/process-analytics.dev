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

import { Components, Theme } from '@mui/material';

import { borders, boxShadows } from '../base';
import { rgba } from '../functions';

const { width, radius } = borders;
const { md } = boxShadows;

export const MuiCard: Components<Theme>['MuiCard'] = {
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: palette.quaternary.main,
      backgroundClip: 'border-box',
      border: `${width.xs} solid ${rgba('#000000', 0.125)}`,
      borderRadius: radius.xl,
      boxShadow: md,
      overflow: 'visible',

      ':hover': {
        boxShadow: '0 0.75rem 1rem rgba(0, 0, 0, 0.2)',
      },
    }),
  },
};
