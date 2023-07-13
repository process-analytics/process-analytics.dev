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

import React, { FC, useState } from 'react';

// @mui material components
import { Container, IconButton, useTheme } from '@mui/material';

// Material Kit 2 React components
import { MKBox, MKBoxProps } from '..';

// Material Kit 2 React example components
import { Action, ActionButton, BrandLink, HoverStyle } from './common';
import { NavbarButton, NavbarNav as MobileNavbarNav } from './mobile';
import {
  Dropdown,
  NavbarNav as DesktopNavbarNav,
  DropdownStyle,
} from './desktop';

import { ColorModeContext } from '../../Layout';

import { useMobileViewStatus } from '../../../hooks';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { BrandContent } from '../..';
import {
  HeaderRoute,
  HeaderRouteWithMenus,
  isHeaderRouteWithMenus,
} from '../../Header';

type NavbarStyleProps = {
  isTransparent: boolean;
  isSticky: boolean;
  isRelative: boolean;
  isCenter: boolean;
  hoverStyle: HoverStyle;
};

type CommonProps = {
  brandContent: BrandContent;
  routeContent: HeaderRoute[];
  action: Action;
  dropdownStyle?: DropdownStyle;
};

type InnerContainerProps = NavbarStyleProps & CommonProps;

type NavbarProps = React.PropsWithoutRef<MKBoxProps> &
  Partial<NavbarStyleProps> &
  CommonProps;

const InnerContainer: FC<InnerContainerProps> = ({
  brandContent,
  routeContent,
  action,
  isTransparent,
  isSticky,
  isRelative,
  isCenter,
  dropdownStyle,
  hoverStyle,
}) => {
  const [expandedNavDropdownElement, setExpandedNavDropdownElement] = useState<
    EventTarget & HTMLSpanElement
  >();
  const [expandedNavDropdownName, setExpandedNavDropdownName] =
    useState<string>();

  const [isOpenMobileNavbar, setIsOpenMobileNavbar] = useState(false);
  const isMobileView = useMobileViewStatus();

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Container
      sx={
        isTransparent && isSticky
          ? { position: 'sticky', top: 0, zIndex: 10 }
          : null
      }
    >
      <MKBox
        py={1}
        px={{
          xs: 0,
          sm: isTransparent ? 2 : 3,
          lg: isTransparent ? 4 : 2,
        }}
        my={isRelative ? 0 : 2}
        mx={isRelative ? 0 : 3}
        width={isRelative ? '100%' : 'calc(100% - 48px)'}
        borderRadius="xl"
        shadow={{ size: isTransparent ? undefined : 'md' }}
        position={isRelative ? 'relative' : 'absolute'}
        left={0}
        zIndex={3}
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: isTransparent ? 'none' : `saturate(200%) blur(30px)`,
        }}
      >
        <MKBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {brandContent && (
            <BrandLink
              style={{ isTransparent, isRelative }}
              content={brandContent}
            />
          )}

          {!isMobileView && (
            <DesktopNavbarNav
              content={routeContent}
              isCenter={isCenter}
              hoverStyle={hoverStyle}
              setExpandedNavDropdownElement={setExpandedNavDropdownElement}
              setExpandedNavDropdownName={setExpandedNavDropdownName}
              expandedNavDropdownName={expandedNavDropdownName}
            />
          )}

          <ActionButton {...action} />

          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          {isMobileView && (
            <NavbarButton
              onClick={(): void => setIsOpenMobileNavbar(!isOpenMobileNavbar)}
              isOpen={isOpenMobileNavbar}
            />
          )}
        </MKBox>

        {isMobileView && (
          <MKBox
            shadow={{ size: isTransparent ? 'lg' : undefined }}
            borderRadius="xl"
            mt={1}
            px={isTransparent ? 2 : 0}
            {...dropdownStyle}
          >
            <MobileNavbarNav
              content={routeContent}
              isOpen={isOpenMobileNavbar}
              hoverStyle={hoverStyle}
            />
          </MKBox>
        )}
      </MKBox>

      {!isMobileView && (
        <Dropdown
          content={
            routeContent.filter(
              route =>
                isHeaderRouteWithMenus(route) &&
                route.name === expandedNavDropdownName,
            ) as HeaderRouteWithMenus[]
          }
          expandedNavDropdownElement={expandedNavDropdownElement}
          setExpandedNavDropdownElement={setExpandedNavDropdownElement}
          setExpandedNavDropdownName={setExpandedNavDropdownName}
          dropdownStyle={dropdownStyle}
          hoverStyle={hoverStyle}
        />
      )}
    </Container>
  );
};

export const Navbar: FC<NavbarProps> = ({
  brandContent,
  routeContent,
  action,
  isTransparent = false,
  isSticky = false,
  isRelative = false,
  isCenter = false,
  bgcolor,
  color,
  dropdownStyle,
  hoverStyle: hoverStyleProp,
  ...rest
}) => (
  <MKBox
    {...rest}
    position={isTransparent && isSticky ? 'sticky' : 'relative'}
    bgcolor={isTransparent ? bgcolor : 'transparent'}
    color={color}
  >
    <InnerContainer
      brandContent={brandContent}
      routeContent={routeContent}
      action={action}
      isTransparent={isTransparent}
      isSticky={isTransparent ? false : isSticky}
      isRelative={isTransparent ? true : isRelative}
      isCenter={isCenter}
      dropdownStyle={dropdownStyle}
      hoverStyle={{
        backgroundColor: hoverStyleProp?.backgroundColor ?? 'quaternary',
        color: hoverStyleProp?.color ?? 'spicy',
        borderRadius: hoverStyleProp?.borderRadius ?? '5px',
      }}
    />
  </MKBox>
);
