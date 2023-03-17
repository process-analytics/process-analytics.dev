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

import React, { Fragment, useState, useEffect } from 'react';

// @mui material components
import {
  Box,
  Theme,
  Container,
  Popper,
  Grow,
  Grid,
  Divider,
  Link as MuiLink,
  PaletteColorKey,
  ButtonProps,
} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faChevronUp,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

// Material Kit 2 React components
import { MKBox, MKTypography, MKButton } from '..';

// Material Kit 2 React example components
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarMobile } from './NavbarMobile';

// Material Kit 2 React base styles
import breakpoints from '../../../../assets/theme/base/breakpoints';

import { Link as GatsbyLink } from 'gatsby';
import { Link } from '../../../types';
import { HeaderMenu, HeaderRoute } from '../../../../content/HeaderRoutes';

function getRouteOrLinkComponent(item: Link):
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
  const [arrowRef, setArrowRef] = useState();
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = (): void => setMobileNavbar(!mobileNavbar);

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

  const renderNavbarItems = routes.map(({ name, icon, href, route, menus }) => (
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
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, menus, columns, rowsPerColumn }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (menus && columns && name === collapseName) {
      const calculateColumns = menus.reduce(
        (resultArray: HeaderMenu[][], item, index) => {
          const chunkIndex = Math.floor(index / (rowsPerColumn ?? 3));
          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
          }

          resultArray[chunkIndex].push(item);
          return resultArray;
        },
        [],
      );

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid
                key={gridKey}
                item
                xs={12 / columns}
                sx={{ position: 'relative' }}
              >
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {col.name}
                    </MKTypography>

                    {col.subItems?.map(item => (
                      <MKTypography
                        key={item.name}
                        {...getRouteOrLinkComponent(item)}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({
                          palette: { grey },
                          borders: { borderRadius },
                        }: Theme) => ({
                          borderRadius: borderRadius.md,
                          cursor: 'pointer',
                          transition: 'all 300ms linear',

                          '&:hover': {
                            backgroundColor: grey[200],
                            color: grey?.A700,
                          },
                        })}
                      >
                        {item.name}
                      </MKTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '-4px',
                      transform: 'translateY(-45%)',
                      height: '90%',
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (name === collapseName) {
      template = menus?.map(item => {
        return (
          <MKTypography
            key={item.name}
            {...getRouteOrLinkComponent(item)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? '14rem' : '12rem'}
            color={'primary'}
            fontWeight={item.description ? 'bold' : 'regular'}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={({ palette: { grey }, borders: { borderRadius } }: Theme) => ({
              borderRadius: borderRadius.md,
              cursor: 'pointer',
              transition: 'all 300ms linear',

              '&:hover': {
                backgroundColor: grey[200],
                color: grey?.A700,

                '& *': {
                  color: grey?.A700,
                },
              },
            })}
            onMouseEnter={({ currentTarget }) => {
              if (item.collapse) {
                setNestedDropdownElement(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.collapse) {
                setNestedDropdownElement(undefined);
                setNestedDropdownName(undefined);
              }
            }}
          >
            {item.description ? (
              <MKBox>
                {item.name}

                <MKTypography
                  display="block"
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={{ transition: 'all 300ms linear' }}
                >
                  {item.description}
                </MKTypography>
              </MKBox>
            ) : (
              item.name
            )}
            {item.subItems && (
              /*              <KeyboardArrowDownIcon
                fontSize="small"
                sx={{
                  fontWeight: 'normal',
                  verticalAlign: 'middle',
                  mr: -0.5,
                }}
              />*/
              <FontAwesomeIcon icon={faAngleDown} fontSize="small" />
            )}
          </MKTypography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={collapseElement}
      popperRef={null}
      open={!!collapseName}
      placement="top-start"
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
      ]}
      onMouseEnter={() => {
        setCollapseElement(collapseElement);
      }}
      onMouseLeave={() => {
        if (!nestedDropdownName) {
          setCollapseName(undefined);
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          /*      sx={{
                      transformOrigin: "left top",
                      background: ({ palette: { white } }) => 'white',
                    }}*/
        >
          <MKBox borderRadius="lg">
            <MKTypography variant="h1" color="quaternary">
              <Box ref={setArrowRef}>
                {/* <ArrowDropUpIcon sx={{ mt: -3 }} />*/}
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faAngleUp} />
              </Box>
            </MKTypography>

            <MKBox shadow={{ size: 'lg' }} borderRadius="lg" p={2} mt={2}>
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ menus, columns }) =>
    !columns
      ? menus?.map(({ name: parentName, subItems: nestedCollapse }) => {
          if (parentName === nestedDropdownName) {
            return nestedCollapse?.map(item => (
              <MKTypography
                key={item.name}
                {...getRouteOrLinkComponent(item)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                variant="button"
                textTransform="capitalize"
                minWidth={item.description ? '14rem' : '12rem'}
                color={'primary'}
                fontWeight={item.description ? 'bold' : 'regular'}
                py={item.description ? 1 : 0.625}
                px={2}
                sx={({
                  palette: { grey },
                  borders: { borderRadius },
                }: Theme) => ({
                  borderRadius: borderRadius.md,
                  cursor: 'pointer',
                  transition: 'all 300ms linear',

                  '&:hover': {
                    backgroundColor: grey[200],
                    color: grey?.A700,

                    '& *': {
                      color: grey?.A700,
                    },
                  },
                })}
              >
                {item.description ? (
                  <MKBox>
                    {item.name}
                    <MKTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: 'all 300ms linear' }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                ) : (
                  item.name
                )}
                {item.collapse && (
                  /*               <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{
                      fontWeight: 'normal',
                      verticalAlign: 'middle',
                      mr: -0.5,
                    }}
                  />*/

                  /*   <FontAwesomeIcon icon={faChevronDown} />*/
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </MKTypography>
            ));
          }
        })
      : null,
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdownElement}
      popperRef={null}
      open={!!nestedDropdownName}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdownElement(nestedDropdownElement);
      }}
      onMouseLeave={() => {
        setNestedDropdownElement(undefined);
        setNestedDropdownName(undefined);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          /* sx={{
                      transformOrigin: "left top",
                      background: ({ palette: { white } }) => 'white',
                    }}*/
        >
          <MKBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MKBox
              shadow={{ size: 'lg' }}
              borderRadius="lg"
              py={1.5}
              px={1}
              mt={2}
            >
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container
      sx={sticky ? { position: 'sticky', top: 0, zIndex: 10 } : null}
      maxWidth="xl"
    >
      <MKBox
        py={1}
        px={{ xs: 4, sm: isTransparent ? 2 : 3, lg: isTransparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? '100%' : 'calc(100% - 48px)'}
        borderRadius="xl"
        shadow={{ size: isTransparent ? undefined : 'md' }}
        color={light ? 'quaternary' : 'primary'}
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
          <MKBox
            component={GatsbyLink}
            to="/"
            lineHeight={1}
            py={isTransparent ? 1.5 : 0.75}
            pl={relative || isTransparent ? 0 : { xs: 0, lg: 1 }}
          >
            <MKTypography
              variant="button"
              fontWeight="bold"
              color={light ? 'quaternary' : 'primary'}
            >
              {brand}
            </MKTypography>
          </MKBox>

          <MKBox
            color="inherit"
            display={{ xs: 'none', lg: 'flex' }}
            ml="auto"
            mr={center ? 'auto' : 0}
          >
            {renderNavbarItems}
          </MKBox>

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

          <MKBox
            display={{ xs: 'inline-block', lg: 'none' }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={isTransparent ? 'quaternary' : 'inherit'}
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
      {dropdownMenu}
      {nestedDropdownMenu}
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
