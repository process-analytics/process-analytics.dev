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
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
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

export type Link = {
  type: 'internal' | 'external';
  name: string;
  description?: string;
  url: string;
};

export type HeaderRouteWithMenus = Required<Pick<Link, 'name'>> & {
  icon: IconDefinition;
  menus: HeaderMenu[];
  withColumns?: boolean;
  rowsPerColumn?: number;
};
export type HeaderRouteAsLink = Omit<Link, 'description'>;
export type HeaderRoute = HeaderRouteAsLink | HeaderRouteWithMenus;

export const isHeaderRouteWithMenus = (
  route: HeaderRoute,
): route is HeaderRouteWithMenus => {
  return 'icon' in route && 'menus' in route;
};

export type HeaderMenuWithSubMenus = Pick<Link, 'name' | 'description'> & {
  isCollapsed?: boolean;
  subItems: HeaderSubItem[];
};
export type HeaderMenu = Link | HeaderMenuWithSubMenus;

export const isHeaderMenuWithSubMenus = (
  menu: HeaderMenu,
): menu is HeaderMenuWithSubMenus => {
  return 'subItems' in menu;
};

export type HeaderSubItem = Link;
