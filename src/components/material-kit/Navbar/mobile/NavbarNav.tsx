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
import { HoverStyle } from '../common';

import { HeaderRoute, isHeaderRouteWithMenus } from '../../../Header';

// Material Kit 2 React example components
import { NavLink } from './NavLink';
import { NavDropdown } from './NavDropdown';

export const NavbarNav = ({
  routes,
  isOpen,
  dropdownStyle,
  hoverStyle,
}: NavbarNavProps): JSX.Element => {
  const [collapse, setCollapseElement] = useState<string>();

  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2} {...dropdownStyle}>
        {routes.map(route => {
          const isCollapsed = route.name === collapse;
          return isHeaderRouteWithMenus(route) ? (
            <NavDropdown
              key={route.name}
              name={route.name}
              icon={route.icon}
              menus={route.menus}
              isCollapsed={isCollapsed}
              onClick={() =>
                setCollapseElement(isCollapsed ? undefined : route.name)
              }
              hoverStyle={hoverStyle}
            />
          ) : (
            <NavLink key={route.name} {...route} hoverStyle={hoverStyle} />
          );
        })}
      </MKBox>
    </Collapse>
  );
};

type NavbarNavProps = {
  routes: HeaderRoute[];
  isOpen: boolean;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
  hoverStyle: HoverStyle;
};
