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

import React, { useState } from 'react';

import { NavDropdown, NavDropdownProps } from './NavDropdown';
import { DropdownDropdown, DropdownDropdownProps } from './DropdownDropdown';

export const Dropdown = ({
  routes,
  expandedNavDropdownElement,
  expandedNavDropdownName,
  setExpandedNavDropdownElement,
  setExpandedNavDropdownName,
  dropdownStyle,
  hoverStyle,
}: Omit<
  NavDropdownProps,
  | 'dropdownDropdownName'
  | 'setDropdownDropdownName'
  | 'dropdownDropdownElement'
  | 'setDropdownDropdownElement'
> &
  Omit<
    DropdownDropdownProps,
    | 'dropdownDropdownName'
    | 'setDropdownDropdownName'
    | 'dropdownDropdownElement'
    | 'setDropdownDropdownElement'
  >): JSX.Element => {
  const [dropdownDropdownName, setDropdownDropdownName] = useState<string>();
  const [dropdownDropdownElement, setDropdownDropdownElement] = useState<
    EventTarget & HTMLSpanElement
  >();

  return (
    <>
      <NavDropdown
        routes={routes}
        expandedNavDropdownElement={expandedNavDropdownElement}
        expandedNavDropdownName={expandedNavDropdownName}
        setExpandedNavDropdownElement={setExpandedNavDropdownElement}
        dropdownDropdownName={dropdownDropdownName}
        setExpandedNavDropdownName={setExpandedNavDropdownName}
        setDropdownDropdownElement={setDropdownDropdownElement}
        setDropdownDropdownName={setDropdownDropdownName}
        dropdownStyle={dropdownStyle}
        hoverStyle={hoverStyle}
      />
      <DropdownDropdown
        routes={routes}
        dropdownDropdownElement={dropdownDropdownElement}
        dropdownDropdownName={dropdownDropdownName}
        setDropdownDropdownElement={setDropdownDropdownElement}
        setDropdownDropdownName={setDropdownDropdownName}
        dropdownStyle={dropdownStyle}
        hoverStyle={hoverStyle}
      />
    </>
  );
};
