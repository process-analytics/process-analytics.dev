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

import React from 'react';

// @mui material components
import {
  ScopedCssBaseline,
  ThemeProvider,
  Link as MaterialLink,
} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import { MKBox } from './material-kit/MKBox';
import { MKTypography } from './material-kit/MKTypography';

import { Link as GatsbyLink } from 'gatsby';

import theme from '../../assets/theme';

import { Link as FooterLink, SocialLink } from '../../theme/types';
import { GATSBY_URL } from '../utils/constants';
import { FooterMenu, FooterRoutes } from '../../content/FooterRoutes';
import { LinkWithMaterial } from './Link';
import { RouteWithMaterial } from './Route';

export const Footer = ({ content }: FooterProps): JSX.Element => {
  const { brand, socials, menus, copyright } = content;

  const year = new Date().getFullYear();

  /* TODO: Use ScopedCssBaseline until we need to keep the old theme.
      After, use CssBaseline and move it with the ThemeProvider in the Layout class  */
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <MKBox component="footer" py={6} bgColor="primary">
          <Container maxWidth="xxl">
            <Grid
              container
              spacing={3}
              flexDirection={['column', 'row']}
              alignItems={['center', undefined]}
              justifyContent={[undefined, 'space-between']}
              textAlign={['center', 'left']}
            >
              <Grid item xs={12} md={3} sx={{ mb: 3 }}>
                <MKBox
                  width="fit-content"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <GatsbyLink to={brand.route}>
                    <MKBox
                      component="img"
                      src={brand.logo}
                      alt={brand.name}
                      maxWidth="3rem"
                      height="3rem"
                      mb={2}
                    />
                  </GatsbyLink>
                  <MKTypography variant="h5">{brand.name}</MKTypography>
                  <MKBox display="flex" alignItems="center" mt={3}>
                    {socials.map(
                      (
                        { icon, url }: Omit<SocialLink, 'name'>,
                        key: number,
                      ) => (
                        <MKTypography
                          key={url}
                          component={MaterialLink}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          variant="h5"
                          opacity={0.8}
                          mr={key === socials.length - 1 ? 0 : 2.5}
                        >
                          {icon}
                        </MKTypography>
                      ),
                    )}
                  </MKBox>
                </MKBox>
              </Grid>

              <Grid
                container
                item
                xs={12}
                md={9}
                sx={{ mb: [2, 3] }}
                flexDirection={['column', 'row']}
                alignItems={['center', 'start']}
                justifyContent={['space-between', 'space-evenly']}
              >
                {menus.map(({ name, items }: FooterMenu) => (
                  <Grid
                    key={name}
                    item
                    xs={false}
                    md={8 / menus.length}
                    sx={{ mb: [3, 0] }}
                  >
                    <MKTypography
                      display="block"
                      variant="body2"
                      fontWeight="bold"
                      textTransform="capitalize"
                      mb={1}
                    >
                      {name}
                    </MKTypography>

                    <MKBox
                      component="ul"
                      p={0}
                      m={0}
                      sx={{ listStyle: 'none' }}
                    >
                      {items.map(({ name, route }: FooterLink) => (
                        <MKBox
                          key={name}
                          component="li"
                          p={0}
                          m={0}
                          lineHeight={1.25}
                        >
                          <MKTypography
                            component={RouteWithMaterial}
                            to={route}
                            rel="noreferrer"
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {name}
                          </MKTypography>
                        </MKBox>
                      ))}
                    </MKBox>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center', my: [2, 3] }}>
                <MKTypography variant="caption" fontWeight="regular">
                  Copyright &copy; {year}{' '}
                  <MKTypography
                    component={RouteWithMaterial}
                    to={brand.route}
                    rel="noreferrer"
                    variant="caption"
                    fontWeight="regular"
                  >
                    {brand.name}
                  </MKTypography>
                  {/*TODO decide later if we display the company name*/}
                  {/*{' '}*/}
                  {/*by{' '}*/}
                  {/*<MKTypography*/}
                  {/*  component={LinkWithMaterial}*/}
                  {/*  href={copyright.url}*/}
                  {/*  target="_blank"*/}
                  {/*  rel="noreferrer"*/}
                  {/*  variant="caption"*/}
                  {/*  fontWeight="regular"*/}
                  {/*>*/}
                  {/*  {copyright.name}*/}
                  {/*</MKTypography>*/}
                </MKTypography>
                <br />
                <MKTypography variant="caption" fontWeight="regular">
                  Powered by{' '}
                  <MKTypography
                    component={LinkWithMaterial}
                    href={GATSBY_URL}
                    target="_blank"
                    rel="noreferrer"
                    variant="caption"
                    fontWeight="regular"
                  >
                    Gatsby
                  </MKTypography>{' '}
                  and inspired from the{' '}
                  <MKTypography
                    component={LinkWithMaterial}
                    href="https://github.com/EmaSuriano/gatsby-theme-mate"
                    target="_blank"
                    rel="noreferrer"
                    variant="caption"
                    fontWeight="regular"
                  >
                    Gatsby Theme Mate
                  </MKTypography>
                  &nbsp;
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};

// Typechecking props for the DefaultFooter
interface FooterProps {
  content: FooterRoutes;
}
