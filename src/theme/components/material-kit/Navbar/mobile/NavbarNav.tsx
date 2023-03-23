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
import React, { Dispatch, SetStateAction, useState } from 'react';

// @mui material components
import { Collapse, Theme } from '@mui/material';

// Material Kit 2 React components
import { MKBox, MKBoxProps, MKTypography } from '../..';

// Material Kit 2 React example components
import { NavbarItem } from '../NavbarItem';

import {
  HeaderMenuWithItems,
  HeaderRoute,
  HeaderRouteAsLink,
  HeaderRouteWithMenus,
  isHeaderMenuWithItems,
  isHeaderRouteWithMenus,
  Link,
} from '../../../../types';
import { getLinkAttributes } from '../../../Link';

const DropdownDropdown = ({
  name,
  items,
}: HeaderMenuWithItems): JSX.Element => {
  return (
    <>
      <MKTypography
        display="block"
        variant="button"
        fontWeight="bold"
        textTransform="capitalize"
        py={1}
        px={0.5}
      >
        {name}
      </MKTypography>

      {items.map(subItem => (
        <MKTypography
          key={subItem.name}
          {...getLinkAttributes(subItem)}
          minWidth="11.25rem"
          display="block"
          variant="button"
          textTransform="capitalize"
          fontWeight="regular"
          py={0.625}
          px={2}
          sx={({ palette: { grey }, borders: { borderRadius } }: Theme) => ({
            borderRadius: borderRadius.md,
            cursor: 'pointer',
            transition: 'all 300ms linear',

            // TODO Make configurable color
            '&:hover': {
              backgroundColor: grey[200],
              color: grey?.A700,
            },
          })}
        >
          {subItem.name}
        </MKTypography>
      ))}
    </>
  );
};

const DropdownLink = ({
  name,
  description,
  type,
  url,
  id,
}: {
  id: number;
} & Link): JSX.Element => {
  return (
    <MKBox
      key={`${name}_${id}`}
      display="block"
      {...getLinkAttributes({ type, url })}
      sx={({ palette: { grey }, borders: { borderRadius } }: Theme) => ({
        borderRadius: borderRadius.md,
        cursor: 'pointer',
        transition: 'all 300ms linear',
        py: 1,
        px: 1.625,

        // TODO Make configurable color
        '&:hover': {
          backgroundColor: grey[200],
          color: grey?.A700,

          '& *': {
            color: grey?.A700,
          },
        },
      })}
    >
      <MKTypography
        display="block"
        variant="button"
        fontWeight="bold"
        textTransform="capitalize"
      >
        {name}
      </MKTypography>

      <MKTypography
        display="block"
        variant="button"
        fontWeight="regular"
        sx={{ transition: 'all 300ms linear' }}
      >
        {description}
      </MKTypography>
    </MKBox>
  );
};

const NavLink = (route: HeaderRouteAsLink): JSX.Element => (
  <NavbarItem
    key={route.name}
    name={route.name}
    {...getLinkAttributes(route)}
  />
);

const NavDropdown = (
  route: HeaderRouteWithMenus & {
    setCollapseElement: Dispatch<SetStateAction<string | undefined>>;
    collapse?: string;
  },
): JSX.Element => (
  <NavbarItem
    key={route.name}
    name={route.name}
    icon={route.icon}
    onClick={() =>
      route.setCollapseElement(
        route.collapse === route.name ? undefined : route.name,
      )
    }
    isCollapsible={Boolean(route.menus)}
    isCollapsed={route.name === route.collapse}
  >
    <MKBox sx={{ height: '15rem', maxHeight: '15rem', overflowY: 'scroll' }}>
      {route.menus.map((menu, id) => (
        <MKBox key={menu.name} px={2}>
          {isHeaderMenuWithItems(menu) ? (
            <DropdownDropdown {...menu} />
          ) : (
            <DropdownLink id={id} {...menu} />
          )}
        </MKBox>
      ))}
    </MKBox>
  </NavbarItem>
);

export const NavbarNav = ({
  routes,
  open,
  dropdownStyle,
}: NavbarNavProps): JSX.Element => {
  const [collapse, setCollapseElement] = useState<string>();

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2} {...dropdownStyle}>
        {routes.map(route =>
          isHeaderRouteWithMenus(route) ? (
            <NavDropdown
              key={route.name}
              setCollapseElement={setCollapseElement}
              collapse={collapse}
              {...route}
            />
          ) : (
            <NavLink key={route.name} {...route} />
          ),
        )}
      </MKBox>
    </Collapse>
  );
};

type NavbarNavProps = {
  routes: HeaderRoute[];
  open: boolean;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
};
