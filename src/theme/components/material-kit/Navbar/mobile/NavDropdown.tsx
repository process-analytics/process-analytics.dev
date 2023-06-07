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

import React from 'react';

import { HeaderRouteWithMenus, isHeaderMenuWithItems } from '../../../../types';

import { MKBox } from '../..';

import { NavbarItem, HoverStyle } from '../common';
import { DropdownDropdown } from './DropdownDropdown';
import { DropdownLink } from './DropdownLink';

type NavDropdownProps = Omit<
  HeaderRouteWithMenus,
  'withColumns' | 'rowsPerColumn'
> & {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  isCollapsed: boolean;
  hoverStyle: HoverStyle;
};
export const NavDropdown = ({
  name,
  icon,
  menus,
  isCollapsed,
  onClick,
  hoverStyle,
}: NavDropdownProps): JSX.Element => (
  <NavbarItem
    key={name}
    name={name}
    icon={icon}
    onClick={onClick}
    isCollapsed={isCollapsed}
    isCollapsible
    isMobileView
    hoverStyle={hoverStyle}
  >
    <MKBox sx={{ height: '15rem', maxHeight: '15rem', overflowY: 'scroll' }}>
      {menus.map((menu, id) => (
        <MKBox key={menu.name} px={2}>
          {isHeaderMenuWithItems(menu) ? (
            <DropdownDropdown {...menu} hoverStyle={hoverStyle} />
          ) : (
            <DropdownLink id={id} {...menu} hoverStyle={hoverStyle} />
          )}
        </MKBox>
      ))}
    </MKBox>
  </NavbarItem>
);
