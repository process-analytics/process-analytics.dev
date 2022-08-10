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

import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';
import { TypographyStyle } from '@mui/material/styles/createTypography';
import { Color } from 'chroma-js';

declare module '@mui/material/styles' {
  type BoxShadowColor = {
    primary: string;
    secondary: string;
    tertiary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    white: string;
  };

  type ShadowSize = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    inset: string;
  };

  type BoxShadows = ShadowSize & {
    colored: BoxShadowColor;
    sliderBoxShadow: {
      thumb: string;
    };
    tabsBoxShadow: {
      indicator: string;
    };
  };

  type BorderRadius = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    section: string;
  };
  export type Borders = {
    borderColor?: string;
    borderWidth: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    borderRadius: BorderRadius;
  };

  type Functions = {
    boxShadow: (
      offset?: number[],
      radius?: number[],
      color: string | number | Color,
      opacity: number,
      inset?: string,
    ) => string;
    hexToRgb: (color: string | number | Color) => string;
    linearGradient: (
      color: string | number | Color,
      colorState: string | number | Color,
      angle?: number,
    ) => string;
    pxToRem: (number: number, baseNumber?: number) => string;
    rgba: (color: string | number | Color, opacity: number) => string;
  };

  interface Theme {
    /*    mixins: Mixins;
    shadows: Shadows;
    transitions: Transitions; */

    palette: Palette & CustomPalette;
    typography: Typography & CustomTypography;

    boxShadows: BoxShadows;
    borders: Borders;
    functions: Functions;
  }

  export interface CustomPalette {
    tertiary: PaletteColor;
  }

  export interface SocialPalette {
    twitter: PaletteColor;
    pinterest: PaletteColor;
    youtube: PaletteColor;
    slack: PaletteColor;
    github: PaletteColor;
  }

  export interface CustomTypography {
    fontWeightLighter: number;
    d1: TypographyStyle;
    d2: TypographyStyle;
    d3: TypographyStyle;
    d4: TypographyStyle;
    d5: TypographyStyle;
    d6: TypographyStyle;
    size: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };

    lineHeight: {
      sm: number;
      md: number;
      lg: number;
    };
  }

  // allow configuration using `createTheme`
  export interface ThemeOptions {
    palette: PaletteOptions & CustomPaletteOptions & SocialPaletteOptions;
    typography: TypographyOptions & CustomTypography;

    boxShadows?: BoxShadows;
    borders?: Borders;
    functions?: Functions;
  }

  interface CustomPaletteOptions {
    tertiary: PaletteColorOptions;
  }

  export interface SocialPaletteOptions {
    twitter: PaletteColorOptions;
    pinterest: PaletteColorOptions;
    youtube: PaletteColorOptions;
    slack: PaletteColorOptions;
    github: PaletteColorOptions;
  }

  export type GreyColorName =
    | 'grey-100'
    | 'grey-200'
    | 'grey-300'
    | 'grey-400'
    | 'grey-500'
    | 'grey-600'
    | 'grey-700'
    | 'grey-800'
    | 'grey-900';

  export type PaletteColorKey =
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | keyof CustomPaletteOptions;

  export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';

  export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase';

  export type VerticalAlign =
    | 'unset'
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom';
}
