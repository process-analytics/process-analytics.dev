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

import { Grow, Popper, Theme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import { getHoverConfiguration, HoverStyle } from '../common';

import {
  HeaderMenuWithItems,
  HeaderRouteWithMenus,
  isHeaderMenuWithItems,
  isHeaderRouteWithMenus,
  HeaderRoute,
} from '../../../Header';
import { MKTypography, MKBox, MKBoxProps } from '../..';
import { LinkContent, Link } from '../../..';

type DropdownLinkProps = {
  isCollapsed?: boolean;
  hoverStyle: HoverStyle;
} & LinkContent;
const DropdownLink = ({
  description,
  name,
  url,
  type,
  hoverStyle,
  isCollapsed = false,
}: DropdownLinkProps): JSX.Element => (
  <Link
    component={MKTypography}
    key={name}
    type={type}
    url={url}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    variant="button"
    textTransform="capitalize"
    minWidth={description ? '14rem' : '12rem'}
    color={'primary'}
    fontWeight={description ? 'bold' : 'regular'}
    py={description ? 1 : 0.625}
    px={2}
    sx={({ palette, borders: { borderRadius } }: Theme) => ({
      borderRadius: borderRadius.md,
      cursor: 'pointer',
      transition: 'all 300ms linear',
      ...getHoverConfiguration(palette, hoverStyle),
    })}
  >
    {description ? (
      <MKBox>
        {name}
        <MKTypography
          display="block"
          variant="button"
          color="text"
          fontWeight="regular"
          sx={{ transition: 'all 300ms linear' }}
        >
          {description}
        </MKTypography>
      </MKBox>
    ) : (
      name
    )}

    {isCollapsed && (
      <KeyboardArrowDown
        fontSize="small"
        sx={{
          fontWeight: 'normal',
          verticalAlign: 'middle',
          mr: -0.5,
        }}
      />
    )}
  </Link>
);

export type DropdownDropdownProps = {
  routes: HeaderRoute[];
  dropdownDropdownElement?: EventTarget & HTMLSpanElement;
  dropdownDropdownName?: string;
  setDropdownDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setDropdownDropdownName: Dispatch<SetStateAction<string | undefined>>;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
  hoverStyle: HoverStyle;
};

export const DropdownDropdown = ({
  routes,
  dropdownDropdownElement,
  dropdownDropdownName,
  setDropdownDropdownElement,
  setDropdownDropdownName,
  dropdownStyle,
  hoverStyle,
}: DropdownDropdownProps): JSX.Element => (
  <Popper
    anchorEl={dropdownDropdownElement}
    popperRef={null}
    open={!!dropdownDropdownName}
    placement="right-start"
    transition
    style={{ zIndex: 10 }}
    onMouseEnter={() => {
      setDropdownDropdownElement(dropdownDropdownElement);
    }}
    onMouseLeave={() => {
      setDropdownDropdownElement(undefined);
      setDropdownDropdownName(undefined);
    }}
  >
    {({ TransitionProps }) => (
      <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
        <MKBox ml={2.5} mt={-2.5} borderRadius="lg" {...dropdownStyle}>
          <MKBox
            shadow={{ size: 'lg' }}
            borderRadius="lg"
            py={1.5}
            px={1}
            mt={2}
          >
            {(
              routes.filter(
                route => isHeaderRouteWithMenus(route) && !route.withColumns,
              ) as HeaderRouteWithMenus[]
            ).map(({ menus }) =>
              (
                menus.filter(
                  menu =>
                    menu.name === dropdownDropdownName &&
                    isHeaderMenuWithItems(menu),
                ) as HeaderMenuWithItems[]
              ).map(({ items, isCollapsed }) =>
                items.map(subItem => (
                  <DropdownLink
                    isCollapsed={isCollapsed}
                    {...subItem}
                    hoverStyle={hoverStyle}
                  />
                )),
              ),
            )}
          </MKBox>
        </MKBox>
      </Grow>
    )}
  </Popper>
);
