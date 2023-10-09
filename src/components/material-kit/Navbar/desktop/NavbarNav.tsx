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

import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import type { HoverStyle } from '../common';
import { NavbarItem, NavLink } from '../common';

import type { HeaderRoute } from '../../../Header';
import { isHeaderRouteWithMenus } from '../../../Header';
import { MKBox } from '../..';

type NavbarNavProps = {
  content: HeaderRoute[];
  isCenter?: boolean;
  setExpandedNavDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setExpandedNavDropdownName: Dispatch<SetStateAction<string | undefined>>;
  expandedNavDropdownName?: string;
  hoverStyle: HoverStyle;
};

export const NavbarNav = ({
  content,
  isCenter,
  setExpandedNavDropdownElement,
  setExpandedNavDropdownName,
  expandedNavDropdownName,
  hoverStyle,
}: NavbarNavProps): JSX.Element => (
  <MKBox
    color="inherit"
    display={{ xs: 'none', lg: 'flex' }}
    ml="auto"
    mr={isCenter ? 'auto' : 2}
  >
    {content.map(route =>
      isHeaderRouteWithMenus(route) ? (
        <NavbarItem
          key={route.name}
          name={route.name}
          hoverStyle={hoverStyle}
          icon={route.icon}
          isCollapsible={!!route.menus}
          isCollapsed={route.name === expandedNavDropdownName}
          onMouseEnter={({
            currentTarget,
          }: React.MouseEvent<HTMLDivElement>): void => {
            setExpandedNavDropdownElement(currentTarget);
            setExpandedNavDropdownName(route.name);
          }}
          onMouseLeave={(): void => {
            setExpandedNavDropdownElement(undefined);
            setExpandedNavDropdownName(undefined);
          }}
        />
      ) : (
        <NavLink key={route.name} hoverStyle={hoverStyle} {...route} />
      ),
    )}
  </MKBox>
);
