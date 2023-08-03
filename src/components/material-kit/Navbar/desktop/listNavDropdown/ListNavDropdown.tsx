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

import { HeaderMenu, isHeaderMenuWithItems } from '../../../../Header';

import { HoverStyle } from '../../common';

import { DropdownDropdown } from './DropdownDropdown';
import { DropdownLink } from './DropdownLink';

type ListNavDropdownProps = {
  content: HeaderMenu[];
  setDropdownDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setDropdownDropdownName: Dispatch<SetStateAction<string | undefined>>;
  hoverStyle: HoverStyle;
};

export const ListNavDropdown: FC<ListNavDropdownProps> = ({
  content,
  setDropdownDropdownElement,
  setDropdownDropdownName,
  hoverStyle,
}) => (
  <>
    {content.map(menu =>
      isHeaderMenuWithItems(menu) ? (
        <DropdownDropdown
          key={menu.name}
          content={menu}
          hoverStyle={hoverStyle}
          onMouseEnter={({
            currentTarget,
          }: React.MouseEvent<HTMLSpanElement | HTMLLinkElement>) => {
            if (menu.isCollapsed) {
              setDropdownDropdownElement(currentTarget ?? undefined);
              setDropdownDropdownName(menu.name);
            }
          }}
          onMouseLeave={() => {
            if (menu.isCollapsed) {
              setDropdownDropdownElement(undefined);
              setDropdownDropdownName(undefined);
            }
          }}
        />
      ) : (
        <DropdownLink key={menu.name} content={menu} hoverStyle={hoverStyle} />
      ),
    )}
  </>
);
