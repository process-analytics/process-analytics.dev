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
// @mui material components
import Avatar from '@mui/material/Avatar';
import { ShadowSize, styled } from '@mui/material/styles';
import {
  boxShadows,
  fontSize,
  fontWeight,
  linearGradient,
} from '../../../assets/theme';

interface MKAvatarProps {
  ownerState: {
    shadow?: keyof ShadowSize;
    bgColor?: PaletteColorKey | 'transparent';
    size?: keyof ShadowSize;
  };
}

export const MKAvatarRoot = styled(Avatar)<MKAvatarProps>(({
  theme,
  ownerState,
}) => {
  const { palette } = theme;
  const { shadow, bgColor, size } = ownerState;

  // backgroundImage value
  const backgroundValue = bgColor
    ? bgColor === 'transparent'
      ? 'transparent'
      : linearGradient(palette[bgColor].main, palette[bgColor].dark)
    : undefined;

  // size value
  let sizeValue;
  if (size) {
    switch (size) {
      case 'xs':
        sizeValue = {
          width: '1.5rem',
          height: '1.5rem',
          fontSize: fontSize.xs,
        };
        break;
      case 'sm':
        sizeValue = {
          width: '2.25rem',
          height: '2.25rem',
          fontSize: fontSize.sm,
        };
        break;
      case 'lg':
        sizeValue = {
          width: '3.625rem',
          height: '3.625rem',
          fontSize: fontSize.sm,
        };
        break;
      case 'xl':
        sizeValue = {
          width: '4.625rem',
          height: '4.625rem',
          fontSize: fontSize.md,
        };
        break;
      case 'xxl':
        sizeValue = {
          width: '6.875rem',
          height: '6.875rem',
          fontSize: fontSize.md,
        };
        break;
      default: {
        sizeValue = {
          width: '3rem',
          height: '3rem',
          fontSize: fontSize.md,
        };
      }
    }
  }

  return {
    background: backgroundValue,
    color: 'white',
    fontWeight: fontWeight.regular,
    boxShadow: shadow ? boxShadows[shadow] : 'none',
    ...sizeValue,
  };
});
