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

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

// @mui material components
import { ButtonProps, Container, Link as MuiLink } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

import { Link as GatsbyLink } from 'gatsby';

/*import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import { MKBox, MKBoxProps, MKButton, MKTypography } from '..';

// Material Kit 2 React base styles
import breakpoints from '../../../../assets/theme/base/breakpoints';
import { HeaderRoute } from '../../../../content/HeaderRoutes';
import { getLinkAttributes } from '../../Link';

// Material Kit 2 React example components
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarMobile } from './mobile/NavbarMobile';
import { NestedDropdownMenu, DropdownMenu } from './desktop';
import pxToRem from '../../../../assets/theme/functions/pxToRem';

const NavbarItems = ({
  routes,
  center,
  setCollapseElement,
  setCollapseName,
  collapseName,
}: {
  routes: HeaderRoute[];
  center: undefined | boolean;
  setCollapseElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setCollapseName: Dispatch<SetStateAction<string | undefined>>;
  collapseName?: string;
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
          {...getLinkAttributes({ href, route })}
          name={name}
          icon={<FontAwesomeIcon icon={icon} />}
          isCollapsible={!!menus}
          isCollapsed={name === collapseName}
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
        />
      ))}
    </MKBox>
  );
};

const MobileNavbarButton = ({
  mobileNavbar,
  setMobileNavbar,
}: {
  mobileNavbar: boolean;
  setMobileNavbar: any;
}): JSX.Element => {
  return (
    <MKBox
      display={{ xs: 'inline-block', lg: 'none' }}
      lineHeight={0}
      py={1.5}
      pl={1.5}
      sx={{ cursor: 'pointer' }}
      onClick={(): void => setMobileNavbar(!mobileNavbar)}
    >
      {mobileNavbar ? (
        <Close fontSize="medium" />
      ) : (
        /*  <FontAwesomeIcon icon={faClose} fontSize="medium" />*/
        <Menu fontSize="medium" />
        /* <FontAwesomeIcon icon={faBars} fontSize="medium" />*/
      )}
    </MKBox>
  );
};

const BrandLink = ({
  isTransparent,
  isRelative,
  brand,
}: {
  isTransparent: undefined | boolean;
  isRelative: undefined | boolean;
  brand: string | undefined;
}): JSX.Element => {
  return (
    <MKBox
      component={GatsbyLink}
      to="/"
      lineHeight={1}
      py={isTransparent ? 1.5 : 0.75}
      pl={isRelative || isTransparent ? 0 : { xs: 0, lg: 1 }}
    >
      <MKTypography variant="button" fontWeight="bold">
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

const InnerContainer = ({
  brand,
  routes,
  action,
  isTransparent,
  isSticky,
  isRelative,
  isCenter,
  dropdownStyle,
}: NavbarProps): JSX.Element => {
  const [collapseElement, setCollapseElement] = useState<
    EventTarget & HTMLSpanElement
  >();
  const [collapseName, setCollapseName] = useState<string>();
  const [nestedDropdownElement, setNestedDropdownElement] = useState<
    EventTarget & HTMLSpanElement
  >();
  const [nestedDropdownName, setNestedDropdownName] = useState<string>();
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState(false);

  useEffect(() => {
    // A function that sets the display state for NavbarMobile.
    function displayMobileNavbar(): void {
      // TODO Clean
      if (
        Number(pxToRem(window.innerWidth).replace('rem', '')) <
        breakpoints.values.lg
      ) {
        setMobileMenuView(true);
        setMobileNavbar(false);
      } else {
        setMobileMenuView(false);
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
          <BrandLink
            isTransparent={isTransparent}
            isRelative={isRelative}
            brand={brand}
          />

          <NavbarItems
            routes={routes}
            center={isCenter}
            setCollapseElement={setCollapseElement}
            setCollapseName={setCollapseName}
            collapseName={collapseName}
          />

          <ActionButton action={action} />

          {mobileMenuView && (
            <MobileNavbarButton
              mobileNavbar={mobileNavbar}
              setMobileNavbar={setMobileNavbar}
            />
          )}
        </MKBox>

        {mobileMenuView && (
          <MKBox
            shadow={{ size: isTransparent ? 'lg' : undefined }}
            borderRadius="xl"
            px={isTransparent ? 2 : 0}
            {...dropdownStyle}
          >
            <NavbarMobile routes={routes} open={mobileNavbar} />
          </MKBox>
        )}
      </MKBox>
      {!mobileMenuView && (
        <>
          <DropdownMenu
            routes={routes}
            collapseElement={collapseElement}
            collapseName={collapseName}
            setCollapseElement={setCollapseElement}
            nestedDropdownName={nestedDropdownName}
            setCollapseName={setCollapseName}
            setNestedDropdownElement={setNestedDropdownElement}
            setNestedDropdownName={setNestedDropdownName}
            dropdownStyle={dropdownStyle}
          />
          <NestedDropdownMenu
            routes={routes}
            nestedDropdownElement={nestedDropdownElement}
            nestedDropdownName={nestedDropdownName}
            setNestedDropdownElement={setNestedDropdownElement}
            setNestedDropdownName={setNestedDropdownName}
            dropdownStyle={dropdownStyle}
          />
        </>
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
  ...rest
}: NavbarProps): JSX.Element => (
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
    />
  </MKBox>
);

type NavbarProps = React.PropsWithoutRef<MKBoxProps> & {
  brand?: string;
  routes: HeaderRoute[];
  action: {
    type: 'external' | 'internal';
    route: string;
    color?: ButtonProps['color'];
    label: string;
  };
  isTransparent?: boolean;
  isSticky?: boolean;
  isRelative?: boolean;
  isCenter?: boolean;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
};
