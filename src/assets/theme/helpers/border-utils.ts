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

/**
 * The base border styles for the Material Kit 2 React.
 * You can add new border width, border color or border radius using this file.
 * You can customize the borders value for the entire Material Kit 2 React using this file.
 */

import { BorderSize, BorderRadius } from '@mui/material';

// Material Kit 2 React Base Styles
import { palette } from '../base';

const { grey } = palette;

export type BorderUtils = {
  color?: string;
  width: BorderSize;
  radius: BorderRadius;
};

export const borders: BorderUtils = {
  color: grey ? grey[300] : undefined,

  width: {
    xs: '0rem',
    sm: '0.0625rem',
    md: '0.125rem',
    lg: '0.1875rem',
    xl: '0.25rem',
    xxl: '0.3125rem',
  },

  radius: {
    xs: '0.1rem',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    xxl: '1rem',
    section: '10rem',
  },
};
