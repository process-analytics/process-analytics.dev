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

import { HeaderMenuWithItems } from '../../../../types';
import { MKTypography } from '../..';
import { getLinkAttributes } from '../../../Link';

export const DropdownDropdown = ({
  name,
  items,
}: HeaderMenuWithItems): JSX.Element => (
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
        sx={({
          palette: { quaternary, spicy },
          borders: { borderRadius },
        }: Theme) => ({
          borderRadius: borderRadius.md,
          cursor: 'pointer',
          transition: 'all 300ms linear',

          // TODO Make configurable color
          '&:hover': {
            backgroundColor: quaternary.main,
            color: spicy.main,
            borderRadius: '5px',
          },
        })}
      >
        {subItem.name}
      </MKTypography>
    ))}
  </>
);