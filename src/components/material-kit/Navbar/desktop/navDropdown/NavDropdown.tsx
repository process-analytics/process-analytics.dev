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

import React, { Dispatch, SetStateAction, useState } from 'react';

import { Box, Grow, Popper } from '@mui/material';
import { ArrowDropUp } from '@mui/icons-material';

import { ColumnNavDropdown } from '../columnNavDropdown';
import { ListNavDropdown } from '../listNavDropdown';

import { MKBox, MKBoxProps, MKTypography } from '../../..';

import {
  HeaderRoute,
  HeaderRouteWithMenus,
  isHeaderRouteWithMenus,
} from '../../../../Header';

import { HoverStyle } from '../../common';

export type NavDropdownProps = {
  routes: HeaderRoute[];
  expandedNavDropdownElement?: EventTarget & HTMLSpanElement;
  expandedNavDropdownName?: string;
  setExpandedNavDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  dropdownDropdownName?: string;
  setExpandedNavDropdownName: Dispatch<SetStateAction<string | undefined>>;
  setDropdownDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setDropdownDropdownName: Dispatch<SetStateAction<string | undefined>>;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
  hoverStyle: HoverStyle;
};
export const NavDropdown = ({
  routes,
  expandedNavDropdownElement,
  expandedNavDropdownName,
  setExpandedNavDropdownElement,
  dropdownDropdownName,
  setExpandedNavDropdownName,
  setDropdownDropdownElement,
  setDropdownDropdownName,
  dropdownStyle,
  hoverStyle,
}: NavDropdownProps): JSX.Element => {
  const [arrowRef, setArrowRef] = useState();

  return (
    <Popper
      anchorEl={expandedNavDropdownElement}
      popperRef={null}
      open={!!expandedNavDropdownName}
      placement="bottom"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: 'arrow',
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
        {
          name: 'preventOverflow',
          enabled: true,
          options: {
            altAxis: true,
            altBoundary: true,
            tether: true,
            rootBoundary: 'document',
            padding: 8,
          },
        },
      ]}
      onMouseEnter={() => {
        setExpandedNavDropdownElement(expandedNavDropdownElement);
      }}
      onMouseLeave={() => {
        if (!dropdownDropdownName) {
          setExpandedNavDropdownName(undefined);
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
          <MKBox borderRadius="lg" {...dropdownStyle}>
            <MKTypography variant="h1">
              {/*<MKTypography variant="h1" color="quaternary">*/}
              <Box ref={setArrowRef}>
                <ArrowDropUp sx={{ mt: -3 }} />
              </Box>
            </MKTypography>

            <MKBox shadow={{ size: 'lg' }} borderRadius="lg" p={2} mt={2}>
              {(
                routes.filter(
                  route =>
                    isHeaderRouteWithMenus(route) &&
                    route.name === expandedNavDropdownName &&
                    route.menus,
                ) as HeaderRouteWithMenus[]
              ).map(({ name, menus, withColumns, rowsPerColumn }) =>
                withColumns ? (
                  // Render the dropdown menu that should be display as columns
                  <ColumnNavDropdown
                    menus={menus}
                    name={name}
                    rowsPerColumn={rowsPerColumn}
                    hoverStyle={hoverStyle}
                  />
                ) : (
                  // Render the dropdown menu that should be display as list items
                  <ListNavDropdown
                    menus={menus}
                    setDropdownDropdownElement={setDropdownDropdownElement}
                    setDropdownDropdownName={setDropdownDropdownName}
                    hoverStyle={hoverStyle}
                  />
                ),
              )}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );
};
