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

/**
 =========================================================
 * Material Kit 2 React - v2.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import React, { Dispatch, SetStateAction } from 'react';

import { NavbarItem, NavbarItemProps } from '.';

import { HeaderRoute, isHeaderRouteWithMenus } from '../../../../types';
import { MKBox } from '../../MKBox';
import { getLinkAttributes } from '../../../Link';

const getNavbarItemAttributes = (
  route: HeaderRoute,
  setCollapseElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >,
  setCollapseName: Dispatch<SetStateAction<string | undefined>>,
  collapseName?: string,
): Omit<NavbarItemProps, 'name'> =>
  isHeaderRouteWithMenus(route)
    ? {
        icon: route.icon,
        isCollapsible: !!route.menus,
        isCollapsed: route.name === collapseName,
        isMobileMenuView: false,
        onMouseEnter: ({ currentTarget }) => {
          setCollapseElement(currentTarget);
          setCollapseName(route.name);
        },
        onMouseLeave: () => {
          setCollapseElement(undefined);
          setCollapseName(undefined);
        },
      }
    : {
        isMobileMenuView: false,
        ...getLinkAttributes(route),
      };

type NavbarItemsProps = {
  routes: HeaderRoute[];
  isCenter?: boolean;
  setCollapseElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setCollapseName: Dispatch<SetStateAction<string | undefined>>;
  collapseName?: string;
};

export const NavbarItems = ({
  routes,
  isCenter,
  setCollapseElement,
  setCollapseName,
  collapseName,
}: NavbarItemsProps): JSX.Element => (
  <MKBox
    color="inherit"
    display={{ xs: 'none', lg: 'flex' }}
    ml="auto"
    mr={isCenter ? 'auto' : 2}
  >
    {routes.map(route => (
      <NavbarItem
        key={route.name}
        name={route.name}
        {...getNavbarItemAttributes(
          route,
          setCollapseElement,
          setCollapseName,
          collapseName,
        )}
      />
    ))}
  </MKBox>
);
