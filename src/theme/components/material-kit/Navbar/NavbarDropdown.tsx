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

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

// @mui material components
import { Collapse, Link as MuiLink, SvgIconProps } from '@mui/material';

import { Link } from 'gatsby';

// Material Kit 2 React components
import { MKBox, MKTypography } from '..';

export function NavbarDropdown({
  name,
  icon,
  children,
  light,
  href,
  route,
  collapse,
  ...rest
}: NavbarDropdownProps): JSX.Element {
  const linkComponent = {
    component: MuiLink,
    href,
    target: '_blank',
    rel: 'noreferrer',
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? 'white' : 'dark'}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: 'pointer', userSelect: 'none' }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
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
          color={light ? 'white' : 'dark'}
          sx={{ fontWeight: '100%', ml: 1, mr: 0.25 }}
        >
          {name}
        </MKTypography>

        <MKTypography
          variant="body2"
          color={light ? 'white' : 'dark'}
          ml="auto"
        >
          {collapse && (
            /*            <KeyboardArrowDown
              sx={{ fontWeight: 'normal', verticalAlign: 'middle' }}
            />*/
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </MKTypography>
      </MKBox>

      {children && (
        <Collapse in={collapse} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

interface NavbarDropdownProps {
  name: string;
  icon: React.ReactElement<SvgIconProps>;
  children?: JSX.Element;
  light?: boolean;
  href?: string;
  route?: string;
  collapse: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}
