/**
 * Copyright 2021 Bonitasoft S.A.
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
/* eslint-disable  @typescript-eslint/no-explicit-any */
declare module '@rebass/preset' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
    fontSizes?: number[] | null;
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    space?: number[] | null;
    sizes: Sizes;
    radii: Radii;
    shadows: Shadows;
    text: Text;
    queries: Queries;
    variants: any;
    buttons: any;
  }

  interface Colors {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    muted: string;
    highlight: string;
  }

  interface Fonts {
    body: string;
    heading: string;
    monospace: string;
  }

  interface FontWeights {
    body: number;
    heading: number;
    bold: number;
  }

  interface LineHeights {
    body: number;
    heading: number;
  }

  interface Sizes {
    avatar: number;
  }

  interface Radii {
    default: number;
    circle: number;
  }

  interface Shadows {
    card: string;
  }

  interface Text {
    /*    heading: HeadingOrRoot;
    display: Display;
    caps: Caps;*/
    heading: string;
    display: string;
    caps: string;
  }

  interface Queries {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}
