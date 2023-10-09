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

import type { FC, PropsWithChildren } from 'react';
import React, { useState } from 'react';

import { Box, Grow, Popper } from '@mui/material';
import { ArrowDropUp } from '@mui/icons-material';

import type { DropdownStyle } from '../Dropdown';
import { MKBox, MKTypography } from '../../..';

export type NavDropdownProps = {
  expandedNavDropdownElement?: EventTarget & HTMLSpanElement;
  expandedNavDropdownName?: string;
  dropdownStyle?: DropdownStyle;
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const NavDropdown: FC<PropsWithChildren<NavDropdownProps>> = ({
  expandedNavDropdownElement,
  expandedNavDropdownName,
  dropdownStyle,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
              {children}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );
};
