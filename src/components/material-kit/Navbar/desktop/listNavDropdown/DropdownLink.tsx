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

import type { Theme } from '@mui/material';

import { borders } from '../../../../../assets/theme';

import type { LinkContent } from '../../../..';
import { Link } from '../../../..';
import { MKBox, MKTypography } from '../../..';
import type { HoverStyle } from '../../common';
import { getHoverConfiguration } from '../../common';

type DropdownLinkProps = {
  content: LinkContent;
  hoverStyle: HoverStyle;
};

export const DropdownLink: FC<DropdownLinkProps> = ({
  content,
  hoverStyle,
}) => (
  <Link
    component={MKTypography}
    type={content.type}
    url={content.url}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    variant="button"
    textTransform="capitalize"
    minWidth={content.description ? '14rem' : '12rem'}
    fontWeight={content.description ? 'bold' : 'regular'}
    py={content.description ? 1 : 0.625}
    px={2}
    sx={({ palette }: Theme) => ({
      borderRadius: borders.radius.md,
      cursor: 'pointer',
      transition: 'all 300ms linear',
      ...getHoverConfiguration(palette, hoverStyle),
    })}
  >
    {content.description ? (
      <MKBox>
        {content.name}

        <MKTypography
          display="block"
          variant="button"
          fontWeight="regular"
          sx={{ transition: 'all 300ms linear' }}
        >
          {content.description}
        </MKTypography>
      </MKBox>
    ) : (
      content.name
    )}
  </Link>
);
