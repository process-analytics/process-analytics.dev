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

import React, { PropsWithChildren } from 'react';

import { HeaderRouteWithMenus } from '../../../Header';

import { NavbarItem, HoverStyle } from '../common';

type NavDropdownProps = HeaderRouteWithMenus & {
  isMobileView: boolean;
  isCollapsed: boolean;
  isCollapsible: boolean;
  hoverStyle: HoverStyle;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
export const NavDropdown = ({
  name,
  icon,
  isMobileView,
  isCollapsed,
  isCollapsible,
  hoverStyle,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: PropsWithChildren<NavDropdownProps>): JSX.Element => (
  <NavbarItem
    key={name}
    name={name}
    icon={icon}
    isCollapsed={isCollapsed}
    isCollapsible={isCollapsible}
    isMobileView={isMobileView}
    hoverStyle={hoverStyle}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </NavbarItem>
);
