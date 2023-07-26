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
import { Collapse, SvgIcon, Theme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import { getHoverConfiguration, HoverStyle } from './HoverStyle';

// Material Kit 2 React components
import { MKBox, MKTypography } from '../..';

type TitleContainerProps = {
  isMobileView: boolean;
  isCollapsible?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  hoverStyle: HoverStyle;
};
const TitleContainer = ({
  isCollapsible,
  isMobileView,
  hoverStyle,
  children,
  ...rest
}: PropsWithChildren<TitleContainerProps>): JSX.Element => (
  <MKBox
    {...rest}
    mx={1}
    p={1}
    display="flex"
    alignItems="baseline"
    //opacity={isMobileView && open ? 1 : 0.6}
    sx={({ palette }: Theme) => ({
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'all 300ms linear',

      ...((!isMobileView || (isMobileView && !isCollapsible)) &&
        getHoverConfiguration(palette, hoverStyle)),
    })}
  >
    {children}
  </MKBox>
);

type TitleProps = TitleContainerProps & {
  name: string;
  icon?: typeof SvgIcon;
};

const Title = ({
  icon,
  name,
  isCollapsible,
  isMobileView,
  ...rest
}: TitleProps): JSX.Element => (
  <TitleContainer
    isMobileView={isMobileView}
    isCollapsible={isCollapsible}
    {...rest}
  >
    {icon && (
      <MKTypography
        variant="body2"
        lineHeight={1}
        color="inherit"
        sx={{ alignSelf: 'center', '& *': { verticalAlign: 'middle' } }}
      >
        {icon}
      </MKTypography>
    )}

    <MKTypography
      variant="button"
      // variant="body2"
      fontWeight="regular"
      textTransform="capitalize"
      color="inherit"
      sx={{
        // fontWeight: 'bold',
        ml: 1,
        mr: 0.25,
        alignSelf: 'center',
      }}
    >
      {name}
    </MKTypography>

    {isCollapsible && (
      <MKTypography variant="body2" color="inherit" ml="auto">
        <KeyboardArrowDown
          sx={{ fontWeight: 'normal', verticalAlign: 'middle' }}
        />
      </MKTypography>
    )}
  </TitleContainer>
);

export type NavbarItemProps = React.PropsWithoutRef<
  TitleProps & {
    isCollapsed?: boolean;
  }
>;
export const NavbarItem = ({
  name,
  icon,
  children,
  isCollapsible,
  isCollapsed,
  isMobileView,
  ...rest
}: PropsWithChildren<NavbarItemProps>): JSX.Element => (
  <>
    <Title
      isMobileView={isMobileView}
      isCollapsible={isCollapsible}
      icon={icon}
      name={name}
      {...rest}
    />

    {children && (
      <Collapse in={isCollapsed} timeout={400} unmountOnExit>
        {children}
      </Collapse>
    )}
  </>
);
