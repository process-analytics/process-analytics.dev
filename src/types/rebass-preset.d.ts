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
declare module '@rebass/preset' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
    fontSizes?: number[];
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    space?: number[];
    sizes: Sizes;
    radii: Radii;
    shadows: Shadows;
    text: Text;
    variants: Variants;
    buttons: Buttons;
    styles: Styles;
    queries: Queries;
  }

  interface Colors {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    muted: string;
    gray?: string;
    highlight?: string;
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
    heading: HeadingOrRoot;
    display: Display;
    caps: Caps;
  }

  interface HeadingOrRoot {
    fontFamily: string;
    lineHeight: string;
    fontWeight: string;
  }

  interface Display {
    fontFamily: string;
    fontWeight: string;
    lineHeight: string;
    fontSize: number[];
  }

  interface Caps {
    textTransform: string;
    letterSpacing: string;
  }

  interface Variants {
    avatar: Avatar;
    card: Card;
    link: Link;
    nav: Nav;
  }

  interface Avatar {
    width: string;
    height: string;
    borderRadius: string;
  }

  interface Card {
    p: number;
    bg: string;
    boxShadow: string;
  }

  interface Link {
    color: string;
  }

  interface Nav {
    fontSize: number;
    fontWeight: string;
    display: string;
    p: number;
    color: string;
    textDecoration: string;
    ':hover,:focus,.active': Event;
  }

  interface Event {
    color: string;
  }

  interface Buttons {
    primary?: Button;
    outline?: Button;
    empty?: Button;
  }

  interface Button {
    p?: number | string;
    m?: number;
    variant?: string;
    color?: string;
    bg?: string;
    border?: number | string;
    borderRadius?: string;
    textDecoration?: string;
    fontSize?: number;
    fontWeight?: string;
    boxShadow?: string;
  }

  interface Styles {
    root: HeadingOrRoot;
  }

  interface Queries {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }
}

declare module '*.svg' {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const content: any;
  export default content;
}

declare module '*.json' {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const value: any;
  export default value;
}
