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

import React, { Dispatch, FC, SetStateAction } from 'react';

import { Theme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import { MKBox, MKTypography } from '../../..';

import { HeaderMenu, isHeaderMenuWithItems } from '../../../../Header';
import { Link } from '../../../..';

import { HoverStyle, getHoverConfiguration } from '../../common';

type ListNavDropdownProps = {
  menus: HeaderMenu[];
  setDropdownDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setDropdownDropdownName: Dispatch<SetStateAction<string | undefined>>;
  hoverStyle: HoverStyle;
};

export const ListNavDropdown: FC<ListNavDropdownProps> = ({
  menus,
  setDropdownDropdownElement,
  setDropdownDropdownName,
  hoverStyle,
}) => (
  <>
    {menus.map(menu =>
      isHeaderMenuWithItems(menu) ? (
        <MKTypography
          key={menu.name}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          variant="button"
          textTransform="capitalize"
          minWidth={menu.description ? '14rem' : '12rem'}
          fontWeight={menu.description ? 'bold' : 'regular'}
          py={menu.description ? 1 : 0.625}
          px={2}
          sx={({ palette, borders: { borderRadius } }: Theme) => ({
            borderRadius: borderRadius.md,
            cursor: 'pointer',
            transition: 'all 300ms linear',
            ...getHoverConfiguration(palette, hoverStyle),
          })}
          onMouseEnter={({
            currentTarget,
          }: React.MouseEvent<HTMLSpanElement | HTMLLinkElement>) => {
            if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
              setDropdownDropdownElement(currentTarget ?? undefined);
              setDropdownDropdownName(menu.name);
            }
          }}
          onMouseLeave={() => {
            if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
              setDropdownDropdownElement(undefined);
              setDropdownDropdownName(undefined);
            }
          }}
        >
          {menu.description ? (
            <MKBox>
              {menu.name}

              <MKTypography
                display="block"
                variant="button"
                fontWeight="regular"
                sx={{ transition: 'all 300ms linear' }}
              >
                {menu.description}
              </MKTypography>
            </MKBox>
          ) : (
            menu.name
          )}
          <KeyboardArrowDown
            fontSize="small"
            sx={{
              fontWeight: 'normal',
              verticalAlign: 'middle',
              mr: -0.5,
            }}
          />
        </MKTypography>
      ) : (
        <Link
          component={MKTypography}
          type={menu.type}
          url={menu.url}
          key={menu.name}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          variant="button"
          textTransform="capitalize"
          minWidth={menu.description ? '14rem' : '12rem'}
          fontWeight={menu.description ? 'bold' : 'regular'}
          py={menu.description ? 1 : 0.625}
          px={2}
          sx={({ palette, borders: { borderRadius } }: Theme) => ({
            borderRadius: borderRadius.md,
            cursor: 'pointer',
            transition: 'all 300ms linear',
            ...getHoverConfiguration(palette, hoverStyle),
          })}
          onMouseEnter={({
            currentTarget,
          }: React.MouseEvent<HTMLSpanElement | HTMLLinkElement>) => {
            if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
              setDropdownDropdownElement(currentTarget ?? undefined);
              setDropdownDropdownName(menu.name);
            }
          }}
          onMouseLeave={() => {
            if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
              setDropdownDropdownElement(undefined);
              setDropdownDropdownName(undefined);
            }
          }}
        >
          {menu.description ? (
            <MKBox>
              {menu.name}

              <MKTypography
                display="block"
                variant="button"
                fontWeight="regular"
                sx={{ transition: 'all 300ms linear' }}
              >
                {menu.description}
              </MKTypography>
            </MKBox>
          ) : (
            menu.name
          )}
        </Link>
      ),
    )}
  </>
);
