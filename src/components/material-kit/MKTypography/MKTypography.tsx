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
 =========================================================
 * Material Kit 2 React - v2.0.0
 =========================================================
 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 Coded by www.creative-tim.com
 =========================================================
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import React, { forwardRef } from 'react';

import {
  TypographyProps as MuiTypographyProps,
  TypographyTypeMap,
} from '@mui/material';

// Custom styles for MKTypography
import { MKTypographyRoot, TypographyProps } from './MKTypographyRoot';

export const MKTypography = forwardRef<
  HTMLSpanElement | HTMLLinkElement | HTMLElement,
  Partial<React.PropsWithChildren<MKTypographyProps<React.ElementType>>>
>(
  (
    {
      color = 'inherit',
      fontWeight,
      textTransform,
      verticalAlign = 'unset',
      textGradient = false,
      opacity = 1,
      children,
      ...rest
    },
    ref,
  ) => (
    <MKTypographyRoot
      {...rest}
      ref={ref}
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        fontWeight,
        opacity,
        textGradient,
      }}
    >
      {children}
    </MKTypographyRoot>
  ),
);

export type MKTypographyProps<
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
> = MuiTypographyProps<D> &
  TypographyProps & {
    size?: string;
  };
