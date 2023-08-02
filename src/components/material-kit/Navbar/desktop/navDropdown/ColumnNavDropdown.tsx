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

import React, { FC } from 'react';

import { Divider, Grid, Theme } from '@mui/material';

import { MKTypography } from '../../..';
import { Link } from '../../../..';

import { HeaderMenu, isHeaderMenuWithItems } from '../../../../Header';

import { getHoverConfiguration, HoverStyle } from '../../common';

type ColumnNavDropdownProps = {
  menus: HeaderMenu[];
  name: string;
  hoverStyle: HoverStyle;
  rowsPerColumn?: number;
};

function splitArrayByColumns<T>(array: T[], rowsPerColumn: number): T[][] {
  return array.reduce((resultArray: T[][], item, index) => {
    const chunkIndex = Math.floor(index / rowsPerColumn);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}

const DropdownItem = ({
  menu,
  index,
  hoverStyle,
}: {
  menu: HeaderMenu;
  index: number;
  hoverStyle: HoverStyle;
}): JSX.Element => (
  <>
    <MKTypography
      display="block"
      variant="button"
      fontWeight="bold"
      textTransform="capitalize"
      py={1}
      px={0.5}
      mt={index !== 0 ? 2 : 0}
    >
      {menu.name}
    </MKTypography>

    {isHeaderMenuWithItems(menu) &&
      menu.items.map(item => (
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
          sx={({ palette, borders: { borderRadius } }: Theme) => ({
            borderRadius: borderRadius.md,
            cursor: 'pointer',
            transition: 'all 300ms linear',
            ...getHoverConfiguration(palette, hoverStyle),
          })}
        >
          {item.name}
        </Link>
      ))}
  </>
);

export const ColumnNavDropdown: FC<ColumnNavDropdownProps> = ({
  menus,
  name,
  hoverStyle,
  rowsPerColumn = 3,
}) => {
  const calculateColumns = splitArrayByColumns(menus, rowsPerColumn);

  return (
    <Grid key={name} container spacing={3} py={1} px={1.5}>
      {calculateColumns.map((menus, key) => {
        const gridKey = `grid-${key}`;
        const dividerKey = `divider-${key}`;

        return (
          <Grid
            key={gridKey}
            item
            xs={12 / (rowsPerColumn ?? 5)}
            sx={{ position: 'relative' }}
          >
            {menus.map((menu, index) => (
              <DropdownItem
                key={menu.name}
                menu={menu}
                index={index}
                hoverStyle={hoverStyle}
              />
            ))}
            {key !== 0 && (
              <Divider
                key={dividerKey}
                orientation="vertical"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '-4px',
                  transform: 'translateY(-45%)',
                  height: '90%',
                }}
              />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};
