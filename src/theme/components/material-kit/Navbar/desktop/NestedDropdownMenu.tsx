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
import React, { Dispatch, SetStateAction } from 'react';

import { Grow, Popper, Theme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import {
  HeaderMenuWithItems,
  HeaderRoute,
  HeaderRouteWithMenus,
  isHeaderMenuWithItems,
  isHeaderRouteWithMenus,
  Link,
} from '../../../../types';
import { MKTypography } from '../../MKTypography';
import { MKBox, MKBoxProps } from '../../MKBox';
import { getLinkAttributes } from '../../../Link';

const DropdownSubMenu = ({
  description,
  name,
  url,
  type,
  isCollapsed = false,
}: {
  isCollapsed?: boolean;
} & Link): JSX.Element => (
  <MKTypography
    key={name}
    {...getLinkAttributes({ url, type })}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    variant="button"
    textTransform="capitalize"
    minWidth={description ? '14rem' : '12rem'}
    color={'primary'}
    fontWeight={description ? 'bold' : 'regular'}
    py={description ? 1 : 0.625}
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
  >
    {description ? (
      <MKBox>
        {name}
        <MKTypography
          display="block"
          variant="button"
          color="text"
          fontWeight="regular"
          sx={{ transition: 'all 300ms linear' }}
        >
          {description}
        </MKTypography>
      </MKBox>
    ) : (
      name
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
    )}
  </MKTypography>
);

export type NestedDropdownMenuProps = {
  routes: HeaderRoute[];
  nestedDropdownElement?: EventTarget & HTMLSpanElement;
  nestedDropdownName?: string;
  setNestedDropdownElement: Dispatch<
    SetStateAction<(EventTarget & HTMLSpanElement) | undefined>
  >;
  setNestedDropdownName: Dispatch<SetStateAction<string | undefined>>;
  dropdownStyle?: React.PropsWithoutRef<MKBoxProps>;
};

export const NestedDropdownMenu = ({
  routes,
  nestedDropdownElement,
  nestedDropdownName,
  setNestedDropdownElement,
  setNestedDropdownName,
  dropdownStyle,
}: NestedDropdownMenuProps): JSX.Element => {
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
        <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
          <MKBox ml={2.5} mt={-2.5} borderRadius="lg" {...dropdownStyle}>
            <MKBox
              shadow={{ size: 'lg' }}
              borderRadius="lg"
              py={1.5}
              px={1}
              mt={2}
            >
              {(
                routes.filter(
                  route => isHeaderRouteWithMenus(route) && !route.withColumns,
                ) as HeaderRouteWithMenus[]
              ).map(({ menus }) =>
                (
                  menus.filter(
                    menu =>
                      menu.name === nestedDropdownName &&
                      isHeaderMenuWithItems(menu),
                  ) as HeaderMenuWithItems[]
                ).map(({ items, isCollapsed }) =>
                  items.map(subItem => (
                    <DropdownSubMenu isCollapsed={isCollapsed} {...subItem} />
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
