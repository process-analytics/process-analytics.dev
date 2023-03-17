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

// Custom styles for MKButton
import { MKButtonRoot, ButtonProps } from './MKButtonRoot';

export const MKButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<MKButtonProps>
>(
  (
    {
      color = 'quaternary',
      variant = 'contained',
      size = 'medium',
      circular = false,
      iconOnly = false,
      children,
      ...rest
    },
    ref,
  ) => (
    <MKButtonRoot
      {...rest}
      ref={ref}
      color="primary"
      variant={variant === 'gradient' ? 'contained' : variant}
      size={size}
      ownerState={{
        color,
        variant,
        size,
        circular,
        iconOnly,
      }}
    >
      {children}
    </MKButtonRoot>
  ),
);

export type MKButtonProps = ButtonProps & {
  component?: React.ElementType;
  to?: string;
  target?: string;
  rel?: string;
};
