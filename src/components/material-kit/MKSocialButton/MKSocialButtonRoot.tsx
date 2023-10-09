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

import { SocialPalette } from '@mui/material';
// @mui material components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface MKSocialButtonRootProps {
  ownerState: {
    color: keyof SocialPalette;
    size: 'small' | 'medium' | 'large';
    iconOnly: boolean;
    circular: boolean;
  };
}

export const MKSocialButtonRoot = styled(Button)<MKSocialButtonRootProps>(({
  theme,
  ownerState,
}) => {
  const { palette } = theme;
  const { color, size, iconOnly, circular } = ownerState;

  const backgroundColorValue = palette[color].main;
  const focusedBackgroundColorValue = palette[color].dark;

  // styles for the button with iconOnly={true}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconOnlyStyles = (): any => {
    // width, height, minWidth and minHeight values
    let sizeValue = '2.375rem';
    if (size === 'small') {
      sizeValue = '1.588rem';
    } else if (size === 'large') {
      sizeValue = '3.25rem';
    }

    // padding value
    let paddingValue = `0.688rem 0.688rem 0.625rem`;
    if (size === 'small') {
      paddingValue = '0.281rem';
    } else if (size === 'large') {
      paddingValue = '1rem';
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,
    };
  };

  return {
    backgroundColor: backgroundColorValue,
    color: 'white',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: focusedBackgroundColorValue,
      boxShadow: 'none',
    },

    '&:focus:not(:hover)': {
      backgroundColor: palette[color].dark,
      boxShadow: 'none',
    },

    '&:disabled': {
      backgroundColor: backgroundColorValue,
      color: 'white',
    },

    ...(circular && {
      borderRadius: '50%',
    }),
    ...(iconOnly && iconOnlyStyles()),
  };
});
