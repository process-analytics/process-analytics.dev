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

import React, { forwardRef } from 'react';

import { AvatarProps, BoxShadowColor } from '@mui/material';
import { BoxProps } from '@mui/material/Box/Box';

// Custom styles for MKBox
import { MKBoxRoot } from './MKBoxRoot';

import {
  BorderRadius,
  GreyColorName,
  PaletteColorName,
  ShadowSize,
} from '../../types';

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
      shadowColor,
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
        shadowColor,
      }}
    />
  ),
);

// Setting default values for the props of MKBox
MKBox.defaultProps = {
  variant: 'contained',
  color: 'primary',
  opacity: 1,
};

// Typechecking props for the MKBox
interface MKBoxProps {
  variant?: 'gradient' | 'contained';
  bgColor?: GreyColorName | PaletteColorName | 'transparent' | 'light' | 'dark';
  color?: GreyColorName | PaletteColorName | 'white';
  opacity?: number;
  borderRadius?: BorderRadius;
  shadow?: ShadowSize;

  /*    const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section'];
    const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset'];*/

  shadowColor?: keyof BoxShadowColor;
  to?: string;
  method?: string;
  autocomplete?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default MKBox;
