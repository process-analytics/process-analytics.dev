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
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { DefaultTheme } from 'styled-components';
import { Theme as RebassTheme } from '@rebass/preset';

export type Theme = DefaultTheme & RebassTheme;

export type ImagePosition = 'left' | 'right' | 'top' | 'bottom';
export type Image = {
  src: string;
  alt: string;
  positionFromMdx?: ImagePosition;
};

export type Library = {
  name: string;
  description: string;
  repository: string;
  documentation?: string;
  examples?: string;
  type: string;
};

export type About = AboutSubSection[];

export type AboutSubSection = {
  mdx: JSX.Element;
  image?: Image;
  withSeparator?: boolean;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName | JSX.Element;
};

export type PostDescription = {
  title: string;
  text: string;
  cover: string;
  url: string;
  date: string;
  time: number;
  isInModelGenerationAppPage?: boolean;
};

export type Landing = {
  title: string;
  presentation: string;
  socialLinks: SocialLink[];
};

export type FooterRoutes = {
  brand: Link & { image: string };
  copyright: { name: string; url: string };
  socials: Omit<SocialLink, 'name'>[];
  menus: Menu[];
};
export type Menu = { name: string; items: Link[] };
export type Link = { name: string; route: string };

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

export type PaletteColorName =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'tertiary';

export type SocialColorName =
  | 'twitter'
  | 'pinterest'
  | 'youtube'
  | 'slack'
  | 'github';

export type ShadowSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inset';

export type BorderRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'section';

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
