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

import { Link as GatsbyLink } from 'gatsby';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MaterialLink from '@mui/material/Link';

// Material Kit 2 React components
import MKBox from './material-kit/MKBox';
import MKTypography from './material-kit/MKTypography';

import {
  FooterRoutes,
  Link as FooterLink,
  Menu,
  SocialLink,
} from '../../theme/types';

function DefaultFooter({ content }: DefaultFooterProps): JSX.Element {
  const { brand, socials, menus, copyright } = content;

  const year = new Date().getFullYear();

  return (
    <MKBox component="footer" py={6}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          flexDirection={['column', 'row']}
          alignItems={['center', undefined]}
        >
          <Grid item xs={4} md={3} sx={{ mb: 3 }}>
            <MKBox>
              <GatsbyLink to={brand.route}>
                <MKBox
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  maxWidth="3rem"
                  mb={2}
                />
              </GatsbyLink>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(
                ({ icon, url }: Omit<SocialLink, 'name'>, key: number) => (
                  <MKTypography
                    key={url}
                    component={MaterialLink}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === socials.length - 1 ? 0 : 2.5}
                  >
                    {icon}
                  </MKTypography>
                ),
              )}
            </MKBox>
          </Grid>

          <Grid
            container
            item
            xs={8}
            md={8}
            sx={{ mb: 3 }}
            flexDirection="row"
            justifyContent={['space-between', 'space-evenly']}
            alignItems={['space-between', undefined]}
          >
            {menus.map(({ name, items }: Menu) => (
              <Grid key={name} item xs={false} md={2} sx={{ mb: [3, 0] }}>
                <MKTypography
                  display="block"
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  mb={1}
                >
                  {name}
                </MKTypography>

                <MKBox component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
                  {items.map(({ name, route }: FooterLink) => (
                    <MKBox
                      key={name}
                      component="li"
                      p={0}
                      m={0}
                      lineHeight={1.25}
                    >
                      <MKTypography
                        component={GatsbyLink}
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

          <Grid item xs={12} sx={{ textAlign: 'center', my: 3 }}>
            <MKTypography variant="caption" fontWeight="regular">
              Copyright &copy; {year}{' '}
              <MKTypography
                component={GatsbyLink}
                to={brand.route}
                rel="noreferrer"
                variant="caption"
                fontWeight="regular"
              >
                {brand.name}
              </MKTypography>{' '}
              by{' '}
              <MKTypography
                component={MaterialLink}
                href={copyright.url}
                target="_blank"
                rel="noreferrer"
                variant="caption"
                fontWeight="regular"
              >
                {copyright.name}
              </MKTypography>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
interface DefaultFooterProps {
  content: FooterRoutes;
}

export default DefaultFooter;
