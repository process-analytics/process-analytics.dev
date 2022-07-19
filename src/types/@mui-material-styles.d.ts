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
import { Mixins } from '@mui/material/styles/createMixins';
import { Transitions } from '@mui/material/styles/createTransitions';
import { Shadows } from '@mui/material/styles/shadows';
import { Color } from 'chroma-js';

declare module '@mui/material/styles' {
  interface Theme {
    /*    mixins: Mixins;
    shadows: Shadows;
    transitions: Transitions; */

    palette: Palette & CustomPalette;
    typography: Typography & CustomTypography;

    boxShadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      inset: string;
      colored: {
        primary: string;
        secondary: string;
        info: string;
        success: string;
        warning: string;
        error: string;
        light: string;
        dark: string;
        white: string;
      };
      sliderBoxShadow: {
        thumb: string;
      };
      tabsBoxShadow: {
        indicator: string;
      };
    };
    borders: {
      borderColor?: string;
      borderWidth: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
      borderRadius: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        section: string;
      };
    };
    functions: {
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
  }

  interface CustomPalette {
    light: PaletteColor;
    dark: PaletteColor;
    gradient: Palette;
    socialMediaColors: {
      twitter: PaletteColor;
      pinterest: PaletteColor;
      youtube: PaletteColor;
      slack: PaletteColor;
      github: PaletteColor;
    };
    badgeColors: Palette;
    spicy: PaletteColor;
    sweet: PaletteColor;
    manufacture: PaletteColor;
    education: PaletteColor;
    telecom: PaletteColor;
    financial: PaletteColor;
    energy: PaletteColor;
    health: PaletteColor;
    government: PaletteColor;
    distribution: PaletteColor;
  }

  interface CustomTypography {
    fontWeightLighter: number;
    d1: any;
    d2: any;
    d3: any;
    d4: any;
    d5: any;
    d6: any;
    size: any;
    lineHeight: any;
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette: PaletteOptions & CustomPaletteOptions;
    typography: TypographyOptions & CustomTypography;

    boxShadows?: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      inset: string;
      colored: {
        primary: string;
        secondary: string;
        info: string;
        success: string;
        warning: string;
        error: string;
        light: string;
        dark: string;
        white: string;
      };
      sliderBoxShadow: {
        thumb: string;
      };
      tabsBoxShadow: {
        indicator: string;
      };
    };
    borders?: {
      borderColor?: string;
      borderWidth: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
      borderRadius: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        section: string;
      };
    };
    functions?: {
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
  }

  interface CustomPaletteOptions {
    light?: PaletteColorOptions;
    dark?: PaletteColorOptions;
    gradient?: PaletteOptions;
    socialMediaColors?: {
      twitter: PaletteColorOptions;
      pinterest: PaletteColorOptions;
      youtube: PaletteColorOptions;
      slack: PaletteColorOptions;
      github: PaletteColorOptions;
    };
    badgeColors?: PaletteOptions;
    spicy?: PaletteColorOptions;
    sweet?: PaletteColorOptions;
    manufacture?: PaletteColorOptions;
    education?: PaletteColorOptions;
    telecom?: PaletteColorOptions;
    financial?: PaletteColorOptions;
    energy?: PaletteColorOptions;
    health?: PaletteColorOptions;
    government?: PaletteColorOptions;
    distribution?: PaletteColorOptions;
  }
}
