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
import LinearProgress from '@mui/material/LinearProgress';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { CustomTheme } from '../../assets/theme';
import { Colors } from '../../assets/theme/base/colors';

interface MKProgressRootProps {
  ownerState: any;
}

export default styled(LinearProgress)<MKProgressRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme as CustomTheme;
    const { color, value, variant } = ownerState;

    const { text, gradient } = palette as unknown as Colors;
    const { linearGradient } = functions;

    // background value
    let backgroundValue;

    if (variant === 'gradient') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const gradient = gradient[color];
      const gradientInfo = gradient.info as SimplePaletteColorOptions;
      backgroundValue = gradient
        ? linearGradient(gradient.main, gradient.dark)
        : linearGradient(gradientInfo?.main, gradientInfo?.dark);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const paletteColor = palette[color];
      backgroundValue = paletteColor ? paletteColor.main : palette.info?.main;
    }

    return {
      width: '100%',

      '& .MuiLinearProgress-bar': {
        background: backgroundValue,
        width: `${value}%`,
        color: (text as SimplePaletteColorOptions)?.main,
      },
    };
  },
);
