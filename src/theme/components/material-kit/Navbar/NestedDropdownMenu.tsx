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
import React from 'react';

import { Grow, Popper, Theme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

//import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeaderRoute } from '../../../../content/HeaderRoutes';
import { MKTypography } from '../MKTypography';
import { MKBox } from '../MKBox';
import { getLinkAttributes } from '../../Link';

export const NestedDropdownMenu = ({
  routes,
  nestedDropdownElement,
  nestedDropdownName,
  setNestedDropdownElement,
  setNestedDropdownName,
}: {
  routes: HeaderRoute[];
  nestedDropdownElement: (EventTarget & HTMLSpanElement) | null | undefined;
  nestedDropdownName: string | undefined;
  setNestedDropdownElement: (
    value:
      | ((
          prevState: (EventTarget & HTMLSpanElement) | null | undefined,
        ) => (EventTarget & HTMLSpanElement) | null | undefined)
      | (EventTarget & HTMLSpanElement)
      | null
      | undefined,
  ) => void;
  setNestedDropdownName: (
    value:
      | ((prevState: string | undefined) => string | undefined)
      | string
      | undefined,
  ) => void;
}): JSX.Element => {
  return (
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
          /*          style={{
            transformOrigin: 'left top',
            background: ({ palette: { background } }: Theme) =>
              background.default,
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
              {routes
                .filter(({ withColumns }) => !withColumns)
                .map(({ menus }) =>
                  menus
                    ?.filter(({ name }) => name === nestedDropdownName)
                    .map(({ subItems, isCollapsed }) =>
                      subItems?.map(subItem => (
                        <MKTypography
                          key={subItem.name}
                          {...getLinkAttributes(subItem)}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          variant="button"
                          textTransform="capitalize"
                          minWidth={subItem.description ? '14rem' : '12rem'}
                          color={'primary'}
                          fontWeight={subItem.description ? 'bold' : 'regular'}
                          py={subItem.description ? 1 : 0.625}
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
                          {subItem.description ? (
                            <MKBox>
                              {subItem.name}
                              <MKTypography
                                display="block"
                                variant="button"
                                color="text"
                                fontWeight="regular"
                                sx={{ transition: 'all 300ms linear' }}
                              >
                                {subItem.description}
                              </MKTypography>
                            </MKBox>
                          ) : (
                            subItem.name
                          )}
                          {isCollapsed && (
                            <KeyboardArrowDown
                              fontSize="small"
                              sx={{
                                fontWeight: 'normal',
                                verticalAlign: 'middle',
                                mr: -0.5,
                              }}
                            />

                            /*   <FontAwesomeIcon icon={faChevronDown} />*/
                            /* <FontAwesomeIcon icon={faAngleDown} />*/
                          )}
                        </MKTypography>
                      )),
                    ),
                )}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );
};
