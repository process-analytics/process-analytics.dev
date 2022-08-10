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
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {
  PaletteColor,
  SimplePaletteColorOptions,
} from '@mui/material/styles/createPalette';

interface MKAlertRootProps {
  ownerState: any;
}

export default styled(Box)<MKAlertRootProps>(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color } = ownerState;

  const { white, gradient } = palette;
  const { fontSize, fontWeightMedium } = typography;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  // backgroundImage value
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const gradientColor = gradient[color];
  const info: PaletteColor = gradientColor.info as PaletteColor;
  const backgroundImageValue = gradientColor
    ? linearGradient(gradientColor.main, gradientColor.dark)
    : linearGradient((info as SimplePaletteColorOptions)?.main, info.dark);

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: 'white',
    position: 'relative',
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSize,
    fontWeight: fontWeightMedium,
  };
});
