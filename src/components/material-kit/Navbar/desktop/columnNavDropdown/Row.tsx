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

import { Theme } from '@mui/material';

import { borders } from '../../../../../assets/theme';

import { Link, LinkContent } from '../../../../Link';
import { MKTypography } from '../../..';
import { getHoverConfiguration, HoverStyle } from '../../common';
import { HeaderMenu, isHeaderMenuWithItems } from '../../../../Header';

type MenuProps = { isFirstRow: boolean; name: string };
const Menu = ({ isFirstRow, name }: MenuProps): JSX.Element => (
  <MKTypography
    display="block"
    variant="button"
    fontWeight="bold"
    textTransform="capitalize"
    py={1}
    px={0.5}
    mt={isFirstRow ? 0 : 2}
  >
    {name}
  </MKTypography>
);

type SubMenuProps = {
  item: LinkContent;
  hoverStyle: HoverStyle;
};

const SubMenu = ({ item, hoverStyle }: SubMenuProps): JSX.Element => (
  <Link
    component={MKTypography}
    type={item.type}
    url={item.url}
    key={item.name}
    minWidth="11.25rem"
    display="block"
    variant="button"
    textTransform="capitalize"
    fontWeight="regular"
    py={0.625}
    px={2}
    sx={({ palette }: Theme) => ({
      borderRadius: borders.radius.md,
      cursor: 'pointer',
      transition: 'all 300ms linear',
      ...getHoverConfiguration(palette, hoverStyle),
    })}
  >
    {item.name}
  </Link>
);

type RowProps = {
  menu: HeaderMenu;
  index: number;
  hoverStyle: HoverStyle;
};
export const Row = ({ menu, index, hoverStyle }: RowProps): JSX.Element => (
  <>
    <Menu isFirstRow={index === 0} name={menu.name} />

    {isHeaderMenuWithItems(menu) &&
      menu.items.map(item => (
        <SubMenu key={item.name} item={item} hoverStyle={hoverStyle} />
      ))}
  </>
);
