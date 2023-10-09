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

import { PaletteColorKey, Box, styled } from '@mui/material';
// @mui material components
import {
  borders,
  fontSize,
  fontWeight,
  linearGradient,
} from '../../../assets/theme';

interface MKAlertRootProps {
  ownerState: { color: PaletteColorKey; variant?: 'gradient' | 'contained' };
}

export const MKAlertRoot = styled(Box)<MKAlertRootProps>(
  ({ theme: { palette }, ownerState: { color } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '3.75rem',
    backgroundImage: palette[color]
      ? linearGradient(palette[color].main, palette[color].dark)
      : linearGradient(palette.info.main, palette.info.dark),
    color: 'white',
    position: 'relative',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: borders.radius.md,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
  }),
);
