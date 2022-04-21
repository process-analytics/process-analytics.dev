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

import { AvatarProps } from '@mui/material';
import { BoxProps } from '@mui/material/Box/Box';
import React, { forwardRef } from 'react';

// Custom styles for MKBox
import MKBoxRoot from './MKBoxRoot';

const MKBox = forwardRef<
  JSX.Element,
  React.PropsWithChildren<MKBoxProps & (BoxProps | AvatarProps)>
>(
  (
    {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      coloredShadow,
      ...rest
    },
    ref,
  ) => (
    <MKBoxRoot
      {...rest}
      ref={ref}
      ownerState={{
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow,
      }}
    />
  ),
);

// Setting default values for the props of MKBox
MKBox.defaultProps = {
  variant: 'contained',
  bgColor: 'transparent',
  color: 'dark',
  opacity: 1,
  borderRadius: 'none',
  shadow: 'none',
  coloredShadow: 'none',
};

// Typechecking props for the MKBox
interface MKBoxProps {
  variant?: 'gradient' | 'contained';
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'none';
  to?: string;
  method?: string;
  autocomplete?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default MKBox;
