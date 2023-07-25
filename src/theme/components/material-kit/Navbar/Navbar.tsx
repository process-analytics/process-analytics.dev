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

// @mui material components
import { Container } from '@mui/material';
import React, { useState } from 'react';

// Material Kit 2 React components
import { MKBox, MKBoxProps } from '..';

// Material Kit 2 React base styles
import { HeaderContent } from '../../Header';

// Material Kit 2 React example components
import { Action, ActionButton, BrandLink, HoverStyle } from './common';
import { NavbarButton, NavbarNav } from './mobile';
import { Dropdown, NavbarItems } from './desktop';

import { isMobileView as isMobileViewFunc } from '../../../utils/helpers';

const InnerContainer = ({
  brand,
  routes,
  action,
  isTransparent,
  isSticky,
  isRelative,
  isCenter,
  dropdownStyle,
  hoverStyle,
}: Omit<NavbarProps, 'hoverStyle'> & {
  hoverStyle: HoverStyle;
}): JSX.Element => {
  const [collapseElement, setCollapseElement] = useState<
    EventTarget & HTMLSpanElement
  >();
  const [collapseName, setCollapseName] = useState<string>();

  const [isOpenMobileNavbar, setIsOpenMobileNavbar] = useState(false);
  const isMobileView = isMobileViewFunc();

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
        px={{ xs: 4, sm: isTransparent ? 2 : 3, lg: isTransparent ? 0 : 2 }}
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
          {brand && (
            <BrandLink
              isTransparent={isTransparent}
              isRelative={isRelative}
              brand={brand}
            />
          )}

          {!isMobileView && (
            <NavbarItems
              routes={routes}
              isCenter={isCenter}
              hoverStyle={hoverStyle}
              setCollapseElement={setCollapseElement}
              setCollapseName={setCollapseName}
              collapseName={collapseName}
            />
          )}

          <ActionButton {...action} />

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
            px={isTransparent ? 2 : 0}
            {...dropdownStyle}
          >
            <NavbarNav
              routes={routes}
              isOpen={isOpenMobileNavbar}
              hoverStyle={hoverStyle}
            />
          </MKBox>
        )}
      </MKBox>

      {!isMobileView && (
        <Dropdown
          routes={routes}
          collapseElement={collapseElement}
          collapseName={collapseName}
          setCollapseElement={setCollapseElement}
          setCollapseName={setCollapseName}
          dropdownStyle={dropdownStyle}
          hoverStyle={hoverStyle}
        />
      )}
    </Container>
  );
};

export const Navbar = ({
  brand,
  routes,
  action,
  isTransparent,
  isSticky,
  isRelative,
  isCenter,
  bgColor,
  color,
  dropdownStyle,
  hoverStyle: hoverStyleProp,
  ...rest
}: NavbarProps): JSX.Element => {
  const hoverStyle = {
    backgroundColor: hoverStyleProp?.backgroundColor ?? 'quaternary',
    color: hoverStyleProp?.color ?? 'spicy',
    borderRadius: hoverStyleProp?.borderRadius ?? '5px',
  };

  return (
    <MKBox
      {...rest}
      position={isTransparent && isSticky ? 'sticky' : 'relative'}
      bgColor={isTransparent ? bgColor : 'transparent'}
      color={color}
    >
      <InnerContainer
        brand={brand}
        routes={routes}
        action={action}
        isTransparent={isTransparent}
        isSticky={isTransparent ? false : isSticky}
        isRelative={isTransparent ? true : isRelative}
        isCenter={isCenter}
        dropdownStyle={dropdownStyle}
        hoverStyle={hoverStyle}
      />
    </MKBox>
  );
};

type NavbarProps = React.PropsWithoutRef<MKBoxProps> & {
  brand?: string;
  routes: HeaderContent[];
  action: Action;
  isTransparent?: boolean;
  isSticky?: boolean;
  isRelative?: boolean;
  isCenter?: boolean;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
  hoverStyle?: Partial<HoverStyle>;
};
