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
import type {JSX} from "react";
import React, {forwardRef} from 'react';

import type { BoxTypeMap } from '@mui/system';
import type { BoxProps as MuiBoxProps } from '@mui/material';

// Custom styles for MKBox
import type { BoxProps } from './MKBoxRoot';
import { MKBoxRoot } from './MKBoxRoot';

export const MKBox = forwardRef<JSX.Element, MKBoxProps<React.ElementType>>(
  (
    {
      variant,
      bgcolor,
      color,
      opacity,
      borderRadius,
      shadow,
      children,
      ...rest
    },
    ref,
  ) => (
    <MKBoxRoot
      {...rest}
      ref={ref}
      ownerState={{
        variant,
        bgcolor,
        color,
        opacity,
        borderRadius,
        shadow,
      }}
    >
      {children}
    </MKBoxRoot>
  ),
);

export type MKBoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
> = React.PropsWithChildren<Partial<BoxProps>> & MuiBoxProps<D>;
