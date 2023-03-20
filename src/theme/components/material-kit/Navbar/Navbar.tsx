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

import React, { useEffect, useState } from 'react';

// @mui material components
import { ButtonProps, Container, Link as MuiLink } from '@mui/material';

import { Link as GatsbyLink } from 'gatsby';

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import { MKBox, MKButton, MKTypography } from '..';

// Material Kit 2 React base styles
import breakpoints from '../../../../assets/theme/base/breakpoints';
import { HeaderRoute } from '../../../../content/HeaderRoutes';
import { Link } from '../../../types';

// Material Kit 2 React example components
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarMobile } from './NavbarMobile';
import { NestedDropdownMenu } from './NestedDropdownMenu';
import { DropdownMenu } from './DropdownMenu';

export function getRouteOrLinkComponent(item: Link):
  | { component: typeof GatsbyLink; to: string }
  | {
      component: typeof MuiLink;
      rel: string;
      href: string | undefined;
      target: string;
    } {
  return item.route
    ? {
        component: GatsbyLink,
        to: item.route,
      }
    : {
        component: MuiLink,
        href: item.href,
        target: '_blank',
        rel: 'noreferrer',
      };
}

const NavbarItems = ({
  routes,
  center,
  setCollapseElement,
  setCollapseName,
  light,
}: {
  routes: HeaderRoute[];
  center: undefined | boolean;
  setCollapseElement: any;
  setCollapseName: any;
  light?: boolean;
}): JSX.Element => {
  return (
    <MKBox
      color="inherit"
      display={{ xs: 'none', lg: 'flex' }}
      ml="auto"
      mr={center ? 'auto' : 0}
    >
      {routes.map(({ name, icon, href, route, menus }) => (
        <NavbarDropdown
          key={name}
          name={name}
          icon={<FontAwesomeIcon icon={icon} />}
          href={href}
          route={route}
          collapse={!!menus}
          onMouseEnter={({ currentTarget }) => {
            if (menus) {
              setCollapseElement(currentTarget);
              setCollapseName(name);
            }
          }}
          onMouseLeave={() => {
            if (menus) {
              setCollapseElement(undefined);
              setCollapseName(undefined);
            }
          }}
          light={light}
        />
      ))}
    </MKBox>
  );
};

const MobileNavbarButton = ({
  mobileNavbar,
  setMobileNavbar,
}: {
  isTransparent: undefined | boolean;
  mobileNavbar: boolean;
  setMobileNavbar: any;
}): JSX.Element => {
  const openMobileNavbar = (): void => setMobileNavbar(!mobileNavbar);

  return (
    <MKBox
      display={{ xs: 'inline-block', lg: 'none' }}
      lineHeight={0}
      py={1.5}
      pl={1.5}
      color={'inherit'}
      sx={{ cursor: 'pointer' }}
      onClick={openMobileNavbar}
    >
      {mobileNavbar ? (
        /* <CloseIcon fontSize="medium" />*/
        <FontAwesomeIcon icon={faClose} fontSize="medium" />
      ) : (
        /*  <MenuIcon fontSize="medium" />*/
        <FontAwesomeIcon icon={faBars} fontSize="medium" />
      )}
    </MKBox>
  );
};

const BrandLink = ({
  isTransparent,
  relative,
  brand,
}: {
  isTransparent: undefined | boolean;
  relative: undefined | boolean;
  light: undefined | boolean;
  brand: string | undefined;
}): JSX.Element => {
  return (
    <MKBox
      component={GatsbyLink}
      to="/"
      lineHeight={1}
      py={isTransparent ? 1.5 : 0.75}
      pl={relative || isTransparent ? 0 : { xs: 0, lg: 1 }}
    >
      <MKTypography variant="button" fontWeight="bold" color={'inherit'}>
        {brand}
      </MKTypography>
    </MKBox>
  );
};

const ActionButton = ({
  action,
}: {
  action: {
    type: 'external' | 'internal';
    route: string;
    color?: ButtonProps['color'];
    label: string;
  };
}): JSX.Element => {
  return (
    <MKBox ml={{ xs: 'auto', lg: 0 }}>
      {action &&
        (action.type === 'internal' ? (
          <MKButton
            component={GatsbyLink}
            to={action.route}
            variant={
              action.color === 'quaternary' || action.color === 'primary'
                ? 'contained'
                : 'gradient'
            }
            color={action.color ? action.color : 'info'}
            size="small"
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant={
              action.color === 'quaternary' || action.color === 'primary'
                ? 'contained'
                : 'gradient'
            }
            color={action.color ?? 'info'}
            size="small"
          >
            {action.label}
          </MKButton>
        ))}
    </MKBox>
  );
};

export const Navbar = ({
  brand,
  routes,
  isTransparent,
  light,
  action,
  sticky,
  relative,
  center,
}: NavbarProps): JSX.Element => {
  const [collapseElement, setCollapseElement] = useState<
    (EventTarget & HTMLSpanElement) | null
  >();
  const [collapseName, setCollapseName] = useState<string>();
  const [nestedDropdownElement, setNestedDropdownElement] = useState<
    (EventTarget & HTMLSpanElement) | null
  >();
  const [nestedDropdownName, setNestedDropdownName] = useState<string>();
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    // A function that sets the display state for NavbarMobile.
    function displayMobileNavbar(): void {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /**
         The event listener that's calling the displayMobileNavbar function when
         resizing the window.
     */
    window.addEventListener('resize', displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', displayMobileNavbar);
  }, []);

  return (
    <Container
      sx={sticky ? { position: 'sticky', top: 0, zIndex: 10 } : null}
      maxWidth="xl"
      color={light ? 'quaternary' : 'primary'}
    >
      <MKBox
        py={1}
        px={{ xs: 4, sm: isTransparent ? 2 : 3, lg: isTransparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? '100%' : 'calc(100% - 48px)'}
        borderRadius="xl"
        shadow={{ size: isTransparent ? undefined : 'md' }}
        position={relative ? 'relative' : 'absolute'}
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
          <BrandLink
            isTransparent={isTransparent}
            relative={relative}
            light={light}
            brand={brand}
          />

          <NavbarItems
            routes={routes}
            center={center}
            setCollapseElement={setCollapseElement}
            setCollapseName={setCollapseName}
            light={light}
          />

          <ActionButton action={action} />

          <MobileNavbarButton
            isTransparent={isTransparent}
            mobileNavbar={mobileNavbar}
            setMobileNavbar={setMobileNavbar}
          />
        </MKBox>

        <MKBox
          bgColor={isTransparent ? 'quaternary' : 'transparent'}
          shadow={{ size: isTransparent ? 'lg' : undefined }}
          borderRadius="xl"
          px={isTransparent ? 2 : 0}
        >
          {mobileView && <NavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
      <DropdownMenu
        routes={routes}
        collapseElement={collapseElement}
        collapseName={collapseName}
        setCollapseElement={setCollapseElement}
        nestedDropdownName={nestedDropdownName}
        setCollapseName={setCollapseName}
        setNestedDropdownElement={setNestedDropdownElement}
        setNestedDropdownName={setNestedDropdownName}
      />
      <NestedDropdownMenu
        routes={routes}
        nestedDropdownElement={nestedDropdownElement}
        nestedDropdownName={nestedDropdownName}
        setNestedDropdownElement={setNestedDropdownElement}
        setNestedDropdownName={setNestedDropdownName}
      />
    </Container>
  );
};

interface NavbarProps {
  brand?: string;
  routes: HeaderRoute[];
  isTransparent?: boolean;
  light?: boolean;
  action: {
    type: 'external' | 'internal';
    route: string;
    color?: ButtonProps['color'];
    label: string;
  };
  sticky?: boolean;
  relative?: boolean;
  center?: boolean;
}
