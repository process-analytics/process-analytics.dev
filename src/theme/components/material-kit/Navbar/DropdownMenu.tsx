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

import React, { Fragment, useState } from 'react';

import { Box, Divider, Grid, Grow, Popper, Theme } from '@mui/material';
import { ArrowDropUp, KeyboardArrowDown } from '@mui/icons-material';

/*import {
  faAngleDown,
  faAngleUp,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeaderMenu, HeaderRoute } from '../../../../content/HeaderRoutes';
import { MKTypography } from '../MKTypography';
import { MKBox } from '../MKBox';
import { getLinkAttributes } from '../../Link';

export const DropdownMenu = ({
  routes,
  collapseElement,
  collapseName,
  setCollapseElement,
  nestedDropdownName,
  setCollapseName,
  setNestedDropdownElement,
  setNestedDropdownName,
}: {
  routes: HeaderRoute[];
  collapseElement: (EventTarget & HTMLSpanElement) | null | undefined;
  collapseName: string | undefined;
  setCollapseElement: (
    value:
      | ((
          prevState: (EventTarget & HTMLSpanElement) | null | undefined,
        ) => (EventTarget & HTMLSpanElement) | null | undefined)
      | (EventTarget & HTMLSpanElement)
      | null
      | undefined,
  ) => void;
  nestedDropdownName: string | undefined;
  setCollapseName: (
    value:
      | ((prevState: string | undefined) => string | undefined)
      | string
      | undefined,
  ) => void;
  setNestedDropdownElement: any;
  setNestedDropdownName: any;
}): JSX.Element => {
  const [arrowRef, setArrowRef] = useState();

  return (
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
                <ArrowDropUp sx={{ mt: -3 }} />
                {/* <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faAngleUp} />*/}
              </Box>
            </MKTypography>

            <MKBox shadow={{ size: 'lg' }} borderRadius="lg" p={2} mt={2}>
              {routes.map(({ name, menus, withColumns, rowsPerColumn }) => {
                let template;

                // Render the dropdown menu that should be display as columns
                if (menus && withColumns && name === collapseName) {
                  const calculateColumns = menus.reduce(
                    (resultArray: HeaderMenu[][], item, index) => {
                      const chunkIndex = Math.floor(
                        index / (rowsPerColumn ?? 3),
                      );
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
                            xs={12 / (rowsPerColumn ?? 5)}
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
                                    {...getLinkAttributes(item)}
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
                        {...getLinkAttributes(item)}
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
                        onMouseEnter={({ currentTarget }) => {
                          if (item.isCollapsed) {
                            setNestedDropdownElement(currentTarget);
                            setNestedDropdownName(item.name);
                          }
                        }}
                        onMouseLeave={() => {
                          if (item.isCollapsed) {
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
                          <KeyboardArrowDown
                            fontSize="small"
                            sx={{
                              fontWeight: 'normal',
                              verticalAlign: 'middle',
                              mr: -0.5,
                            }}
                          />
                          /*            <FontAwesomeIcon
                            icon={faAngleDown}
                            fontSize="small"
                          />*/
                        )}
                      </MKTypography>
                    );
                  });
                }

                return template;
              })}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );
};
