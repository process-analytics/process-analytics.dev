/**
 * Copyright 2022 Bonitasoft S.A.
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

// @mui material components
import Collapse from '@mui/material/Collapse';
import { KeyboardArrowDown } from '@mui/icons-material';

import { Link } from 'gatsby';

// Material Kit 2 React components
import { MKBox } from '../../../components/MKBox';
import { MKTypography } from '../../../components/MKTypography';

import React from 'react';

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}: DefaultNavbarDropdownProps): JSX.Element {
  const linkComponent = {
    component: 'a',
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
            <KeyboardArrowDown
              sx={{ fontWeight: 'normal', verticalAlign: 'middle' }}
            />
          )}
        </MKTypography>
      </MKBox>

      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: '',
  route: '',
};

// Typechecking props for the DefaultNavbarDropdown
interface DefaultNavbarDropdownProps {
  name: string;
  icon: JSX.Element;
  children?: JSX.Element;
  collapseStatus?: boolean;
  light?: boolean;
  href?: string;
  route?: string;
  collapse: boolean;
  onClick?: () => void;
  onMouseEnter?: ({ currentTarget }: any) => void;
  onMouseLeave?: () => void;
}

export default DefaultNavbarDropdown;
