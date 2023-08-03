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

import { Divider, Grid } from '@mui/material';

import { splitArrayByColumns } from '../../../../../helper';

import { DropdownItem } from './DropdownItem';

import { HeaderMenu } from '../../../../Header';

import { HoverStyle } from '../../common';

type ColumnNavDropdownProps = {
  menus: HeaderMenu[];
  name: string;
  hoverStyle: HoverStyle;
  rowsPerColumn?: number;
};

type ColumnProps = {
  rowsPerColumn: number;
  menus: HeaderMenu[];
  isNotFirstColumn: boolean;
  hoverStyle: HoverStyle;
};
const Column: FC<ColumnProps> = ({
  rowsPerColumn,
  menus,
  isNotFirstColumn,
  hoverStyle,
}) => (
  <Grid item xs={12 / rowsPerColumn} sx={{ position: 'relative' }}>
    {isNotFirstColumn && (
      <Divider
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

    {menus.map((menu, index) => (
      <DropdownItem
        key={menu.name}
        menu={menu}
        index={index}
        hoverStyle={hoverStyle}
      />
    ))}
  </Grid>
);

export const ColumnNavDropdown: FC<ColumnNavDropdownProps> = ({
  menus,
  name,
  hoverStyle,
  rowsPerColumn = 3,
}) => (
  <Grid key={name} container spacing={3} py={1} px={1.5}>
    {splitArrayByColumns(menus, rowsPerColumn).map((menus, index) => (
      <Column
        key={`divider-${index}`}
        rowsPerColumn={rowsPerColumn}
        menus={menus}
        hoverStyle={hoverStyle}
        isNotFirstColumn={index !== 0}
      />
    ))}
  </Grid>
);
