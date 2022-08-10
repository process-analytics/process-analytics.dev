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
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

interface MKTypographyRootProps {
  ownerState: any;
}

export default styled(Typography)<MKTypographyRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const {
      color,
      textTransform,
      verticalAlign,
      fontWeight,
      opacity,
      textGradient,
    } = ownerState;

    const { gradient, grey } = palette;
    const { linearGradient } = functions;

    // styles for the typography with textGradient={true}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const gradientColor = gradient[color];
    const gradientStyles = (): any => ({
      backgroundImage:
        color !== 'inherit' &&
        color !== 'text' &&
        color !== 'white' &&
        gradientColor
          ? linearGradient(gradientColor.main, gradientColor.dark)
          : linearGradient(grey?.A700, gradient.dark.dark),
      display: 'inline-block',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      position: 'relative',
      zIndex: 1,
    });

    // color value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const paletteColor = palette[color];
    const colorValue =
      color === 'inherit' || !paletteColor ? 'inherit' : paletteColor.main;

    return {
      opacity,
      textTransform,
      verticalAlign,
      textDecoration: 'none',
      color: colorValue,
      letterSpacing: '-0.125px',
      fontWeight: fontWeight,
      ...(textGradient && gradientStyles()),
    };
  },
);
