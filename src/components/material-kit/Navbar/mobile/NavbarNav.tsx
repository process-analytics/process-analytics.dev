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
import React, { useState } from 'react';

// @mui material components
import { Collapse } from '@mui/material';

// Material Kit 2 React components
import { MKBox, MKBoxProps } from '../..';
import { HoverStyle, NavLink } from '../common';

import { HeaderRoute, isHeaderRouteWithMenus } from '../../../Header';

// Material Kit 2 React example components
import { NavDropdown } from './NavDropdown';

export const NavbarNav = ({
  content,
  isOpen,
  dropdownStyle,
  hoverStyle,
}: NavbarNavProps): JSX.Element => {
  const [collapse, setExpandedNavDropdownElement] = useState<string>();

  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2} {...dropdownStyle}>
        {content.map(route => {
          const isCollapsed = route.name === collapse;
          return isHeaderRouteWithMenus(route) ? (
            <NavDropdown
              key={route.name}
              name={route.name}
              icon={route.icon}
              menus={route.menus}
              isCollapsed={isCollapsed}
              onClick={() =>
                setExpandedNavDropdownElement(
                  isCollapsed ? undefined : route.name,
                )
              }
              hoverStyle={hoverStyle}
            />
          ) : (
            <NavLink key={route.name} hoverStyle={hoverStyle} {...route} />
          );
        })}
      </MKBox>
    </Collapse>
  );
};

type NavbarNavProps = {
  content: HeaderRoute[];
  isOpen: boolean;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
  hoverStyle: HoverStyle;
};
