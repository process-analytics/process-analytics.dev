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
import React, { PropsWithChildren } from 'react';

// @mui material components
import { BoxProps, Collapse, SvgIconProps } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

// Material Kit 2 React components
import { MKBox, MKTypography } from '..';

export const NavbarDropdown = ({
  name,
  icon,
  children,
  isCollapsible,
  isCollapsed,
  ...rest
}: PropsWithChildren<NavbarDropdownProps>): JSX.Element => (
  <>
    <MKBox
      {...rest}
      mx={1}
      p={1}
      display="flex"
      alignItems="baseline"
      //opacity={isMobileView && open ? 1 : 0.6}
      sx={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <MKTypography
        variant="body2"
        lineHeight={1}
        color="inherit"
        sx={{ alignSelf: 'center', '& *': { verticalAlign: 'middle' } }}
      >
        {icon}
      </MKTypography>
      <MKTypography
        variant="button"
        fontWeight="regular"
        textTransform="capitalize"
        color="inherit"
        sx={{ fontWeight: '100%', ml: 1, mr: 0.25 }}
      >
        {name}
      </MKTypography>

      <MKTypography variant="body2" color="inherit" ml="auto">
        {isCollapsible && (
          <KeyboardArrowDown
            sx={{ fontWeight: 'normal', verticalAlign: 'middle' }}
          />
        )}
      </MKTypography>
    </MKBox>

    {children && (
      <Collapse in={isCollapsed} timeout={400} unmountOnExit>
        {children}
      </Collapse>
    )}
  </>
);

type NavbarDropdownProps = React.PropsWithoutRef<{
  name: string;
  icon: React.ReactElement<SvgIconProps>;
  isCollapsible: boolean;
  isCollapsed: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}>;
