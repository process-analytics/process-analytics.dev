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
import { MKBox, MKBoxProps, MKTypography } from '..';

// Material Kit 2 React example components
import { NavbarDropdown } from './NavbarDropdown';

import {
  HeaderMenu,
  HeaderRoute,
  HeaderSubItem,
} from '../../../../content/HeaderRoutes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { getLinkAttributes } from '../../Link';

const MenuWithSubItems = ({
  name,
  subItems,
}: {
  name: string;
  subItems: HeaderSubItem[];
}): JSX.Element => {
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

      {subItems.map(subItem => (
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
          sx={({ palette: { grey }, borders: { borderRadius } }) => ({
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

const MenuWithoutSubItems = ({
  menu,
  id,
}: {
  menu: HeaderMenu;
  id: number;
}): JSX.Element => {
  return (
    <MKBox
      key={`${menu.name}_${id}`}
      display="block"
      {...getLinkAttributes(menu)}
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
        {menu.name}
      </MKTypography>

      <MKTypography
        display="block"
        variant="button"
        fontWeight="regular"
        sx={{ transition: 'all 300ms linear' }}
      >
        {menu.description}
      </MKTypography>
    </MKBox>
  );
};

const Menu = ({ menu, id }: { menu: HeaderMenu; id: number }): JSX.Element => {
  return (
    <MKBox key={menu.name} px={2}>
      {menu.subItems ? (
        <MenuWithSubItems name={menu.name} subItems={menu.subItems} />
      ) : (
        <MenuWithoutSubItems menu={menu} id={id} />
      )}
    </MKBox>
  );
};

const Route = ({
  name,
  icon,
  setCollapseElement,
  collapse,
  href,
  route,
  menus,
}: {
  name: string;
  icon: IconDefinition;
  setCollapseElement: Dispatch<SetStateAction<string | undefined>>;
  collapse?: string;
  href?: string;
  route?: string;
  menus?: HeaderMenu[];
}): JSX.Element => (
  <NavbarDropdown
    key={name}
    name={name}
    icon={<FontAwesomeIcon icon={icon} />}
    onClick={() => setCollapseElement(collapse === name ? undefined : name)}
    {...getLinkAttributes({ href, route })}
    isCollapsible={Boolean(menus)}
    isCollapsed={name === collapse}
  >
    <MKBox sx={{ height: '15rem', maxHeight: '15rem', overflowY: 'scroll' }}>
      {menus && menus.map((menu, id) => <Menu menu={menu} id={id} />)}
    </MKBox>
  </NavbarDropdown>
);

export const NavbarMobile = ({
  routes,
  open,
  dropdownStyle,
}: NavbarMobileProps): JSX.Element => {
  const [collapse, setCollapseElement] = useState<string>();

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2} {...dropdownStyle}>
        {routes.map(({ name, icon, menus, href, route }) => (
          <Route
            key={name}
            name={name}
            icon={icon}
            setCollapseElement={setCollapseElement}
            collapse={collapse}
            href={href}
            route={route}
            menus={menus}
          />
        ))}
      </MKBox>
    </Collapse>
  );
};

interface NavbarMobileProps {
  routes: HeaderRoute[];
  open: boolean;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
}
