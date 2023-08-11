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

import React, { Dispatch, SetStateAction } from 'react';

import { Grow, Popper } from '@mui/material';

import { DropdownStyle } from './Dropdown';
import { DropdownLink } from './DropdownLink';
import { MKBox } from '../..';

import { HeaderMenuWithItems } from '../../../Header';

import { HoverStyle } from '../common';

export type DropdownDropdownProps = {
  content: HeaderMenuWithItems[];
  dropdownDropdownElement?: EventTarget & HTMLSpanElement;
  dropdownDropdownName?: string;
  setDropdownDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setDropdownDropdownName: Dispatch<SetStateAction<string | undefined>>;
  dropdownStyle?: DropdownStyle;
  hoverStyle: HoverStyle;
};

export const DropdownDropdown = ({
  content,
  dropdownDropdownElement,
  dropdownDropdownName,
  setDropdownDropdownElement,
  setDropdownDropdownName,
  dropdownStyle,
  hoverStyle,
}: DropdownDropdownProps): JSX.Element => (
  <Popper
    anchorEl={dropdownDropdownElement}
    popperRef={null}
    open={!!dropdownDropdownName}
    placement="right-start"
    transition
    style={{ zIndex: 10 }}
    onMouseEnter={() => {
      setDropdownDropdownElement(dropdownDropdownElement);
    }}
    onMouseLeave={() => {
      setDropdownDropdownElement(undefined);
      setDropdownDropdownName(undefined);
    }}
  >
    {({ TransitionProps }) => (
      <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
        <MKBox ml={2.5} mt={-2.5} borderRadius="lg" {...dropdownStyle}>
          <MKBox
            shadow={{ size: 'lg' }}
            borderRadius="lg"
            py={1.5}
            px={1}
            mt={2}
          >
            {content.map(({ items, isCollapsed }) =>
              items.map(link => (
                <DropdownLink
                  content={link}
                  isCollapsed={isCollapsed}
                  hoverStyle={hoverStyle}
                />
              )),
            )}
          </MKBox>
        </MKBox>
      </Grow>
    )}
  </Popper>
);
