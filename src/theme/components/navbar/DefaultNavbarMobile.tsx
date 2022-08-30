/**
 * Copyright 2022 Bonitasoft S.A.
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
import React, { useState } from 'react';

// @mui material components
import Collapse from '@mui/material/Collapse';
import MuiLink from '@mui/material/Link';

// Material Kit 2 React components
import MKBox from '../material-kit/MKBox';
import MKTypography from '../material-kit/MKTypography';

// Material Kit 2 React example components
import { DefaultNavbarDropdown } from './DefaultNavbarDropdown';

import { Link } from 'gatsby';

import { Routes } from '../../types';

export const DefaultNavbarMobile = ({
  routes,
  open,
}: DefaultNavbarMobileProps): JSX.Element => {
  const [collapse, setCollapse] = useState('');

  const handleSetCollapse = (name: string): void =>
    collapse === name ? setCollapse('') : setCollapse(name);

  const renderNavbarItems = routes.map(
    ({
      name,
      icon,
      collapse: routeCollapses,
      href,
      route,
      collapse: navCollapse,
    }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <MKBox
          sx={{ height: '15rem', maxHeight: '15rem', overflowY: 'scroll' }}
        >
          {routeCollapses &&
            routeCollapses.map(item => (
              <MKBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                    >
                      {item.name}
                    </MKTypography>

                    {item.collapse.map((el: any) => (
                      <MKTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ''}
                        href={el.href ? el.href : ''}
                        target={el.href ? '_blank' : ''}
                        rel={el.href ? 'noreferrer' : 'noreferrer'}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({
                          palette: { grey, dark },
                          borders: { borderRadius },
                        }: any) => ({
                          borderRadius: borderRadius.md,
                          cursor: 'pointer',
                          transition: 'all 300ms linear',

                          '&:hover': {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ''}
                    href={item.href ? item.href : ''}
                    target={item.href ? '_blank' : ''}
                    rel={item.href ? 'noreferrer' : 'noreferrer'}
                    sx={({
                      palette: { grey, dark },
                      borders: { borderRadius },
                    }: any) => ({
                      borderRadius: borderRadius.md,
                      cursor: 'pointer',
                      transition: 'all 300ms linear',
                      py: 1,
                      px: 1.625,

                      '&:hover': {
                        backgroundColor: grey[200],
                        color: dark.main,

                        '& *': {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MKTypography>

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
                )}
              </MKBox>
            ))}
        </MKBox>
      </DefaultNavbarDropdown>
    ),
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </MKBox>
    </Collapse>
  );
};

// Typechecking props for the DefaultNavbarMobile
interface DefaultNavbarMobileProps {
  routes: Routes;
  open: boolean;
}
