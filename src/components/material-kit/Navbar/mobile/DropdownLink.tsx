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

import { getHoverConfiguration, HoverStyle } from '../common/HoverStyle';

import { Link } from '../../../../types';
import { MKBox, MKTypography } from '../..';
import { getLinkAttributes } from '../../../Link';

type DropdownLinkProps = Link & {
  id: number;
  hoverStyle: HoverStyle;
};
export const DropdownLink = ({
  name,
  description,
  type,
  url,
  id,
  hoverStyle,
}: DropdownLinkProps): JSX.Element => (
  <MKBox
    key={`${name}_${id}`}
    display="block"
    {...getLinkAttributes({ type, url })}
    sx={({ palette, borders: { borderRadius } }: Theme) => ({
      borderRadius: borderRadius.md,
      cursor: 'pointer',
      transition: 'all 300ms linear',
      py: 1,
      px: 1.625,
      ...getHoverConfiguration(palette, hoverStyle),
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