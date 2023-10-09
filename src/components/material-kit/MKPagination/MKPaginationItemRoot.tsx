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

// @mui material components
import { styled } from '@mui/material/styles';

// Material Kit 2 React components
import { MKButton } from '../MKButton';
import { borders, fontSize, fontWeight } from '../../../assets/theme';

interface MKPaginationItemRootProps {
  ownerState: {
    variant: 'gradient' | 'contained' | string;
    paginationSize: 'small' | 'medium' | 'large';
    active: boolean;
  };
}

export const MKPaginationItemRoot = styled(MKButton)<MKPaginationItemRootProps>(
  ({ theme, ownerState }) => {
    const { palette } = theme;
    const { variant, paginationSize, active } = ownerState;

    const { grey } = palette;

    // width, height, minWidth and minHeight values
    let sizeValue = '2.25rem';

    if (paginationSize === 'small') {
      sizeValue = '1.875rem';
    } else if (paginationSize === 'large') {
      sizeValue = '2.875rem';
    }

    return {
      borderColor: borders.color,
      margin: `0 0.125`,
      pointerEvents: active ? 'none' : 'auto',
      fontWeight: fontWeight.regular,
      fontSize: fontSize.sm,
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,

      '&:hover, &:focus, &:active': {
        transform: 'none',
        boxShadow:
          variant !== 'gradient' && variant !== 'contained'
            ? 'none !important'
            : undefined,
        opacity: '1 !important',
      },

      '&:hover': {
        backgroundColor: grey?.['50'],
        borderColor: borders.color,
      },
    };
  },
);
