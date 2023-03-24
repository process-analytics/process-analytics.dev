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
import { Theme } from '@mui/material';
import {
  CSSProperties,
  Typography,
  TypographyStyle,
} from '@mui/material/styles/createTypography';
import {
  alignProperty,
  convertLength,
  fontGrid,
  isUnitless,
  ResponsivePropertyParams,
} from '@mui/material/styles/cssUtils';
import { ResponsiveFontSizesOptions } from '@mui/material/styles/responsiveFontSizes';
import { formatMuiErrorMessage as _formatMuiErrorMessage } from '@mui/utils';

// ---------- OVERRIDE SOME FUNCTIONS OF MATERIAL UI ----------
// Because it doesn't take in consideration the value unit of the breakpoints :(

const responsiveFontVariant = (
  convert: (length: string, toUnit: string) => string,
  style: CSSProperties,
  factor: number,
  disableAlign: boolean,
  typography: Typography,
  remFontSize: number,
  breakpointValues: number[],
  breakpointUnit = 'rem',
): TypographyStyle => {
  const maxFontSize = remFontSize;
  const minFontSize = 1 + (maxFontSize - 1) / factor;
  let { lineHeight } = style;

  if (lineHeight && !isUnitless(String(lineHeight))) {
    if (!disableAlign) {
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.`
          : _formatMuiErrorMessage(6),
      );
    }

    // make it unitless
    lineHeight =
      parseFloat(convert(String(lineHeight), 'rem')) /
      parseFloat(String(remFontSize));
  }

  let transform;
  if (!disableAlign) {
    transform = (value: number): number =>
      alignProperty({
        size: value,
        grid: fontGrid({
          pixels: 4,
          lineHeight: Number(lineHeight),
          htmlFontSize: typography.htmlFontSize,
        }),
      });
  }

  return {
    ...style,
    ...responsiveProperty({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      breakpointUnit,
      transform,
    }),
  };
};

export const responsiveFontSizes = (
  theme: Theme,
  options: ResponsiveFontSizesOptions = {},
): Theme => {
  const {
    breakpoints = ['sm', 'md', 'lg'],
    disableAlign = false,
    factor = 2,
    variants = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption',
      'button',
      'overline',
    ],
  } = options;
  const typography = theme.typography;

  // Convert between CSS lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).
  const convert = convertLength(String(typography.htmlFontSize));
  const breakpointValues = breakpoints.map(x => theme.breakpoints.values[x]);
  const breakpointUnit = theme.breakpoints.unit;

  variants.forEach(variant => {
    const style = typography[variant] as TypographyStyle;
    if (!style) {
      return;
    }
    const remFontSize = parseFloat(convert(String(style.fontSize), 'rem'));
    if (remFontSize <= 1) {
      return;
    }

    // Will be fix in another PR
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typography[variant] = responsiveFontVariant(
      convert,
      style,
      factor,
      disableAlign,
      typography,
      remFontSize,
      breakpointValues,
      breakpointUnit,
    );
  });
  return theme;
};

const responsiveProperty = ({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 900, 1200],
  breakpointUnit = 'px',
  transform,
}: ResponsivePropertyParams & { breakpointUnit?: string }): CSSProperties => {
  const output: CSSProperties = {
    [cssProperty]: `${min}${unit}`,
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint;
    if (transform) {
      value = transform(value);
    }
    output[`@media (min-width:${breakpoint}${breakpointUnit})`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`,
    };
  });
  return output;
};
