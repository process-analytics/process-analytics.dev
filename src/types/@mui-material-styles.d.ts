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
import type {} from '@mui/material/styles';
import {
  FontStyle,
  TypographyStyle,
  TypographyUtils,
  Variant,
} from '@mui/material/styles/createTypography';
import { Color } from 'chroma-js';
import type {} from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface BreakpointOverrides {
    xxl: true;
  }

  interface Typography
    extends Record<Variant, TypographyStyle>,
      FontStyle,
      TypographyUtils {
    [key: string]: TypographyStyle; // add index signature to allow any string keys
  }

  type BoxShadowColor = {
    white: string;

    /* [key: PaletteColorKey]: string;*/

    primary: string;
    secondary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    tertiary: string;
    quaternary: string;
    primaryLight: string;
    secondaryLight: string;
    spicy: string;
    sweet: string;
    manufacture: string;
    education: string;
    telecom: string;
    financial: string;
    energy: string;
    health: string;
    government: string;
    distribution: string;
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
  type Borders = {
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

    palette: Palette & SocialPalette;
    boxShadows: BoxShadows;
    borders: Borders;
    functions: Functions;
  }

  interface Palette {
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
    primaryLight: Palette['primary'];
    secondaryLight: Palette['primary'];
    spicy: Palette['primary'];
    sweet: Palette['primary'];
    manufacture: Palette['primary'];
    education: Palette['primary'];
    telecom: Palette['primary'];
    financial: Palette['primary'];
    energy: Palette['primary'];
    health: Palette['primary'];
    government: Palette['primary'];
    distribution: Palette['primary'];
  }
  interface SocialPalette {
    twitter: Palette['primary'];
    pinterest: Palette['primary'];
    youtube: Palette['primary'];
    slack: Palette['primary'];
    github: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette: PaletteOptions & SocialPaletteOptions;
    boxShadows?: BoxShadows;
    borders?: Borders;
    functions?: Functions;
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    quaternary: PaletteOptions['primary'];
    primaryLight: PaletteOptions['primary'];
    secondaryLight: PaletteOptions['primary'];
    spicy: PaletteOptions['primary'];
    sweet: PaletteOptions['primary'];
    manufacture: PaletteOptions['primary'];
    education: PaletteOptions['primary'];
    telecom: PaletteOptions['primary'];
    financial: PaletteOptions['primary'];
    energy: PaletteOptions['primary'];
    health: PaletteOptions['primary'];
    government: PaletteOptions['primary'];
    distribution: PaletteOptions['primary'];
  }
  interface SocialPaletteOptions {
    twitter: PaletteOptions['primary'];
    pinterest: PaletteOptions['primary'];
    youtube: PaletteOptions['primary'];
    slack: PaletteOptions['primary'];
    github: PaletteOptions['primary'];
  }

  type GreyColorName =
    | 'grey-100'
    | 'grey-200'
    | 'grey-300'
    | 'grey-400'
    | 'grey-500'
    | 'grey-600'
    | 'grey-700'
    | 'grey-800'
    | 'grey-900';

  type PaletteColorKey =
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'tertiary'
    | 'quaternary'
    | 'primaryLight'
    | 'secondaryLight'
    | 'spicy'
    | 'sweet'
    | 'manufacture'
    | 'education'
    | 'telecom'
    | 'financial'
    | 'energy'
    | 'health'
    | 'government'
    | 'distribution';

  type FontWeight = 'light' | 'regular' | 'medium' | 'bold' | string;

  type TextTransform = 'capitalize' | 'uppercase' | 'lowercase';

  type VerticalAlign =
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
