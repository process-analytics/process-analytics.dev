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

import { PaletteColorKey } from '@mui/material';
import React, { forwardRef } from 'react';

// Material Kit 2 React components
import { MKTypography } from '../MKTypography';

// Custom styles for MKProgress
import { MKProgressRoot } from './MKProgressRoot';

export const MKProgress = forwardRef<
  JSX.Element,
  React.PropsWithChildren<MKProgressProps>
>(
  (
    {
      variant = 'contained',
      color = 'info',
      value = 0,
      label = false,
      ...rest
    },
    ref,
  ) => (
    <>
      {label && (
        <MKTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </MKTypography>
      )}

      <MKProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  ),
);

// Typechecking props for the MKProgress
interface MKProgressProps {
  variant?: 'gradient' | 'contained';
  color?: PaletteColorKey;
  value?: number;
  label?: boolean;
}
