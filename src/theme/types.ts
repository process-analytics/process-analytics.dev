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
  /**
   * The icon of the route on the Navbar
   */
  icon: IconDefinition;
  /**
   * For making a collapsible item on the Navbar that contains other routes inside (nested routes)
   */
  menus: HeaderMenu[];
  /**
   * To define that how the content should look inside the dropdown menu as columns, you can set the columns amount based on this key
   */
  withColumns?: boolean;
  /**
   * To define that how many rows should be in a column
   */
  rowsPerColumn?: number;
};

/**
 * @field url To store the route location which is used for the React router or to store the external link location
 */
export type HeaderRouteAsLink = Omit<Link, 'description'>;

/**
 * @field name The name of the route on the Navbar
 */
export type HeaderRoute = HeaderRouteAsLink | HeaderRouteWithMenus;

export const isHeaderRouteWithMenus = (
  route: HeaderRoute,
): route is HeaderRouteWithMenus => {
  return 'icon' in route && 'menus' in route;
};

/**
 * @field description To define the description of a route under its name
 */
export type HeaderMenuWithSubMenus = Pick<Link, 'name' | 'description'> & {
  /**
   * To define that the item should open a dropdown for its collapse items
   */
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
