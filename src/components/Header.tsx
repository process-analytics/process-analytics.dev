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
import React from 'react';

import { SvgIcon } from '@mui/material';

import { BrandContent, LinkPlop } from '.';

import { Navbar } from './material-kit';

export type HeaderProps = {
  content: HeaderContent;
};

export type HeaderContent = {
  brand: BrandContent;
  routes: HeaderRoute[];
};

export type HeaderRouteWithMenus = Required<Pick<LinkPlop, 'name'>> & {
  /**
   * The icon of the route on the Navbar
   */
  icon: typeof SvgIcon;
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
}; //dropdown

/**
 * @field url To store the route location which is used for the React router or to store the external link location
 */
export type HeaderRouteAsLink = Omit<LinkPlop, 'description'>; // nav-link

/**
 * @field name The name of the route on the Navbar
 */
export type HeaderRoute = HeaderRouteAsLink | HeaderRouteWithMenus; // nav-item
// HeaderRoutes = navbar nav

export const isHeaderRouteWithMenus = (
  route: HeaderRoute,
): route is HeaderRouteWithMenus => {
  return 'icon' in route && 'menus' in route;
};

/**
 * @field description To define the description of a route under its name
 */
export type HeaderMenuWithItems = Pick<LinkPlop, 'name' | 'description'> & {
  /**
   * To define that the item should open a dropdown for its collapse items
   */
  isCollapsed?: boolean; // TODO Modify the code to remove this property
  items: LinkPlop[];
};

export type HeaderMenu =
  | LinkPlop // dropdown-item
  | HeaderMenuWithItems; //dropdown-menu

export const isHeaderMenuWithItems = (
  menu: HeaderMenu,
): menu is HeaderMenuWithItems => {
  return 'items' in menu;
};

export const Header = ({ content }: HeaderProps): JSX.Element => (
  <Navbar
    routes={content.routes}
    brandContent={content.brand}
    action={{
      type: 'external',
      url: 'https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html',
      label: 'Demo',
      color: 'secondary',
      variant: 'contained',
    }}
    isTransparent
    isSticky
    top="0"
    zIndex="10"
    bgColor="quaternary"
    width="100%"
    shadow={{ size: 'sm' }}
    py={0.25}
    dropdownStyle={{
      bgColor: 'secondaryLight',
      color: 'secondary',
    }}
  />
);
