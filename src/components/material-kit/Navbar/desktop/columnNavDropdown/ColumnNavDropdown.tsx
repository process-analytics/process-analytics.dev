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

import { Grid } from '@mui/material';

import { Column } from './Column';

import { splitArrayByColumns } from '../../../../../helper';

import { HeaderMenu } from '../../../../Header';

import { HoverStyle } from '../../common';

type ColumnNavDropdownProps = {
  content: HeaderMenu[];
  name: string;
  hoverStyle: HoverStyle;
  rowsPerColumn?: number;
};

export const ColumnNavDropdown: FC<ColumnNavDropdownProps> = ({
  content,
  name,
  hoverStyle,
  rowsPerColumn = 3,
}) => (
  <Grid key={name} container spacing={3} py={1} px={1.5}>
    {splitArrayByColumns(content, rowsPerColumn).map((menus, index) => (
      <Column
        key={`divider-${index}`}
        rowsPerColumn={rowsPerColumn}
        content={menus}
        hoverStyle={hoverStyle}
        isNotFirstColumn={index !== 0}
      />
    ))}
  </Grid>
);
