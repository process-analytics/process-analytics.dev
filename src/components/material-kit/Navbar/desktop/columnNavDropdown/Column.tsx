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

import type { FC } from 'react';
import React from 'react';

import { Divider, Grid } from '@mui/material';

import { DropdownItem } from './DropdownItem';
import type { HeaderMenu } from '../../../../Header';
import type { HoverStyle } from '../../common';

type ColumnProps = {
  rowsPerColumn: number;
  content: HeaderMenu[];
  isNotFirstColumn: boolean;
  hoverStyle: HoverStyle;
};

export const Column: FC<ColumnProps> = ({
  rowsPerColumn,
  content,
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

    {content.map((menu, index) => (
      <DropdownItem
        key={menu.name}
        content={menu}
        isFirstRow={index == 0}
        hoverStyle={hoverStyle}
      />
    ))}
  </Grid>
);
