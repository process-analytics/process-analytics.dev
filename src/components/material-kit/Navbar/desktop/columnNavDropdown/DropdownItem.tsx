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

import { DropdownDropdown } from './DropdownDropdown';

import { HeaderMenu, isHeaderMenuWithItems } from '../../../../Header';
import { Link } from '../../../..';

import { MKTypography } from '../../..';

import { HoverStyle } from '../../common';

type DropdownItemProps = {
  content: HeaderMenu;
  isFirstRow: boolean;
  hoverStyle: HoverStyle;
};

const Title: FC<DropdownItemProps> = ({ isFirstRow, content, hoverStyle }) =>
  isHeaderMenuWithItems(content) ? (
    <MKTypography
      display="block"
      variant="button"
      fontWeight="bold"
      textTransform="capitalize"
      py={1}
      px={0.5}
      mt={isFirstRow ? 0 : 2}
    >
      {content.name}
    </MKTypography>
  ) : (
    <Link
      component={MKTypography}
      type={content.type}
      url={content.url}
      hoverStyle={hoverStyle}
      display="block"
      variant="button"
      fontWeight="bold"
      textTransform="capitalize"
      py={1}
      px={0.5}
      mt={isFirstRow ? 0 : 2}
    >
      {content.name}
    </Link>
  );

export const DropdownItem: FC<DropdownItemProps> = ({
  content,
  isFirstRow,
  hoverStyle,
}) => (
  <>
    <Title isFirstRow={isFirstRow} content={content} hoverStyle={hoverStyle} />

    {isHeaderMenuWithItems(content) &&
      content.items.map(item => (
        <DropdownDropdown
          key={item.name}
          hoverStyle={hoverStyle}
          content={item}
        />
      ))}
  </>
);
