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

import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';

import { Box, Divider, Grid, Grow, Popper, Theme } from '@mui/material';
import { ArrowDropUp, KeyboardArrowDown } from '@mui/icons-material';

import { getHoverConfiguration, HoverStyle } from '../common/HoverStyle';

import {
  HeaderMenu,
  HeaderRouteWithMenus,
  isHeaderMenuWithItems,
  isHeaderRouteWithMenus,
  HeaderRoute,
} from '../../../Header';
import { MKTypography, MKBox, MKBoxProps } from '../..';
import { GenericComponent } from '../../..';

const ColumnDropdownMenus = (
  menus: HeaderMenu[],
  name: string,
  hoverStyle: HoverStyle,
  rowsPerColumn?: number,
): JSX.Element => {
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

  return (
    <Grid key={name} container spacing={3} py={1} px={1.5}>
      {calculateColumns.map((menus, key) => {
        const gridKey = `grid-${key}`;
        const dividerKey = `divider-${key}`;

        return (
          <Grid
            key={gridKey}
            item
            xs={12 / (rowsPerColumn ?? 5)}
            sx={{ position: 'relative' }}
          >
            {menus.map((menu, index) => (
              <Fragment key={menu.name}>
                <MKTypography
                  display="block"
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  py={1}
                  px={0.5}
                  mt={index !== 0 ? 2 : 0}
                >
                  {menu.name}
                </MKTypography>

                {isHeaderMenuWithItems(menu) &&
                  menu.items.map(item => (
                    <GenericComponent
                      component={MKTypography}
                      type={item.type}
                      url={item.url}
                      key={item.name}
                      minWidth="11.25rem"
                      display="block"
                      variant="button"
                      textTransform="capitalize"
                      fontWeight="regular"
                      py={0.625}
                      px={2}
                      sx={({ palette, borders: { borderRadius } }: Theme) => ({
                        borderRadius: borderRadius.md,
                        cursor: 'pointer',
                        transition: 'all 300ms linear',
                        ...getHoverConfiguration(palette, hoverStyle),
                      })}
                    >
                      {item.name}
                    </GenericComponent>
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
};

const ListDropdownMenus = (
  menus: HeaderMenu[],
  setNestedDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >,
  setNestedDropdownName: Dispatch<SetStateAction<string | undefined>>,
  hoverStyle: HoverStyle,
): JSX.Element[] =>
  menus.map(menu =>
    isHeaderMenuWithItems(menu) ? (
      <MKTypography
        key={menu.name}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        variant="button"
        textTransform="capitalize"
        minWidth={menu.description ? '14rem' : '12rem'}
        fontWeight={menu.description ? 'bold' : 'regular'}
        py={menu.description ? 1 : 0.625}
        px={2}
        sx={({ palette, borders: { borderRadius } }: Theme) => ({
          borderRadius: borderRadius.md,
          cursor: 'pointer',
          transition: 'all 300ms linear',
          ...getHoverConfiguration(palette, hoverStyle),
        })}
        onMouseEnter={({
          currentTarget,
        }: React.MouseEvent<HTMLSpanElement | HTMLLinkElement>) => {
          if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
            setNestedDropdownElement(currentTarget ?? undefined);
            setNestedDropdownName(menu.name);
          }
        }}
        onMouseLeave={() => {
          if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
            setNestedDropdownElement(undefined);
            setNestedDropdownName(undefined);
          }
        }}
      >
        {menu.description ? (
          <MKBox>
            {menu.name}

            <MKTypography
              display="block"
              variant="button"
              fontWeight="regular"
              sx={{ transition: 'all 300ms linear' }}
            >
              {menu.description}
            </MKTypography>
          </MKBox>
        ) : (
          menu.name
        )}
        <KeyboardArrowDown
          fontSize="small"
          sx={{
            fontWeight: 'normal',
            verticalAlign: 'middle',
            mr: -0.5,
          }}
        />
      </MKTypography>
    ) : (
      <GenericComponent
        component={MKTypography}
        type={menu.type}
        url={menu.url}
        key={menu.name}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        variant="button"
        textTransform="capitalize"
        minWidth={menu.description ? '14rem' : '12rem'}
        fontWeight={menu.description ? 'bold' : 'regular'}
        py={menu.description ? 1 : 0.625}
        px={2}
        sx={({ palette, borders: { borderRadius } }: Theme) => ({
          borderRadius: borderRadius.md,
          cursor: 'pointer',
          transition: 'all 300ms linear',
          ...getHoverConfiguration(palette, hoverStyle),
        })}
        onMouseEnter={({
          currentTarget,
        }: React.MouseEvent<HTMLSpanElement | HTMLLinkElement>) => {
          if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
            setNestedDropdownElement(currentTarget ?? undefined);
            setNestedDropdownName(menu.name);
          }
        }}
        onMouseLeave={() => {
          if (isHeaderMenuWithItems(menu) && menu.isCollapsed) {
            setNestedDropdownElement(undefined);
            setNestedDropdownName(undefined);
          }
        }}
      >
        {menu.description ? (
          <MKBox>
            {menu.name}

            <MKTypography
              display="block"
              variant="button"
              fontWeight="regular"
              sx={{ transition: 'all 300ms linear' }}
            >
              {menu.description}
            </MKTypography>
          </MKBox>
        ) : (
          menu.name
        )}
      </GenericComponent>
    ),
  );

export type DropdownMenuProps = {
  routes: HeaderRoute[];
  collapseElement?: EventTarget & HTMLSpanElement;
  collapseName?: string;
  setCollapseElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  nestedDropdownName?: string;
  setCollapseName: Dispatch<SetStateAction<string | undefined>>;
  setNestedDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setNestedDropdownName: Dispatch<SetStateAction<string | undefined>>;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
  hoverStyle: HoverStyle;
};
export const DropdownMenu = ({
  routes,
  collapseElement,
  collapseName,
  setCollapseElement,
  nestedDropdownName,
  setCollapseName,
  setNestedDropdownElement,
  setNestedDropdownName,
  dropdownStyle,
  hoverStyle,
}: DropdownMenuProps): JSX.Element => {
  const [arrowRef, setArrowRef] = useState();

  return (
    <Popper
      anchorEl={collapseElement}
      popperRef={null}
      open={!!collapseName}
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
        <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
          <MKBox borderRadius="lg" {...dropdownStyle}>
            <MKTypography variant="h1">
              {/*<MKTypography variant="h1" color="quaternary">*/}
              <Box ref={setArrowRef}>
                <ArrowDropUp sx={{ mt: -3 }} />
              </Box>
            </MKTypography>

            <MKBox shadow={{ size: 'lg' }} borderRadius="lg" p={2} mt={2}>
              {(
                routes.filter(
                  route =>
                    isHeaderRouteWithMenus(route) &&
                    route.name === collapseName &&
                    route.menus,
                ) as HeaderRouteWithMenus[]
              ).map(({ name, menus, withColumns, rowsPerColumn }) =>
                withColumns
                  ? // Render the dropdown menu that should be display as columns
                    ColumnDropdownMenus(menus, name, hoverStyle, rowsPerColumn)
                  : // Render the dropdown menu that should be display as list items
                    ListDropdownMenus(
                      menus,
                      setNestedDropdownElement,
                      setNestedDropdownName,
                      hoverStyle,
                    ),
              )}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );
};
