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

import React, { Dispatch, FC, SetStateAction, useState } from 'react';

import { ColumnNavDropdown } from './columnNavDropdown';
import { ListNavDropdown } from './listNavDropdown';

import { NavDropdown } from './navDropdown';
import { DropdownDropdown } from './dropdownDropdown';
import { HoverStyle } from '../common';

import {
  HeaderMenuWithItems,
  HeaderRouteWithMenus,
  isHeaderMenuWithItems,
} from '../../../Header';
import { MKBoxProps } from '../..';

export type DropdownProps = {
  content: HeaderRouteWithMenus[];
  expandedNavDropdownElement?: EventTarget & HTMLSpanElement;
  setExpandedNavDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setExpandedNavDropdownName: Dispatch<SetStateAction<string | undefined>>;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
  hoverStyle: HoverStyle;
};

export const Dropdown: FC<DropdownProps> = ({
  content,
  expandedNavDropdownElement,
  setExpandedNavDropdownElement,
  setExpandedNavDropdownName,
  dropdownStyle,
  hoverStyle,
}) => {
  const [dropdownDropdownName, setDropdownDropdownName] = useState<string>();
  const [dropdownDropdownElement, setDropdownDropdownElement] = useState<
    EventTarget & HTMLSpanElement
  >();

  return (
    <>
      <NavDropdown
        expandedNavDropdownElement={expandedNavDropdownElement}
        dropdownStyle={dropdownStyle}
        onMouseLeave={() => {
          if (!dropdownDropdownName) {
            setExpandedNavDropdownName(undefined);
            setExpandedNavDropdownElement(undefined);
            setDropdownDropdownName(undefined);
            setDropdownDropdownElement(undefined);
          }
        }}
      >
        {content.map(({ name, menus, withColumns, rowsPerColumn }) =>
          withColumns ? (
            // Render the dropdown menu that should be display as columns
            <ColumnNavDropdown
              key={name}
              content={menus}
              rowsPerColumn={rowsPerColumn}
              hoverStyle={hoverStyle}
            />
          ) : (
            // Render the dropdown menu that should be display as list items
            <ListNavDropdown
              content={menus}
              setDropdownDropdownElement={setDropdownDropdownElement}
              setDropdownDropdownName={setDropdownDropdownName}
              hoverStyle={hoverStyle}
            />
          ),
        )}
      </NavDropdown>
      <DropdownDropdown
        content={
          content
            .filter(route => !route.withColumns)
            .map(({ menus }) =>
              menus.filter(
                menu =>
                  isHeaderMenuWithItems(menu) &&
                  menu.name === dropdownDropdownName,
              ),
            )
            .flat() as HeaderMenuWithItems[]
        }
        dropdownDropdownElement={dropdownDropdownElement}
        dropdownDropdownName={dropdownDropdownName}
        dropdownStyle={dropdownStyle}
        hoverStyle={hoverStyle}
        onMouseLeave={() => {
          setDropdownDropdownElement(undefined);
          setDropdownDropdownName(undefined);
        }}
      />
    </>
  );
};
