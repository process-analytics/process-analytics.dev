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
import { FooterProps, MKBox2, MKTypography2 } from '../../components';
import { FooterMenu } from '../../components/Footer';

function DefaultFooter({ content }: FooterProps): JSX.Element {
  const { brand, socials, menus, copyright } = content;

  const year = new Date().getFullYear();

  return (
    <MKBox2 component="footer" py={6}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          flexDirection={['column', 'row']}
          alignItems={['center', undefined]}
        >
          <Grid item xs={4} md={3} sx={{ mb: 3 }}>
            <MKBox2>
              <GatsbyLink to={brand.url}>
                <MKBox2
                  component="img"
                  src={brand.logo.primary}
                  alt={brand.name}
                  maxWidth="3rem"
                  mb={2}
                />
              </GatsbyLink>
              <MKTypography2 variant="h6">{brand.name}</MKTypography2>
            </MKBox2>
            <MKBox2 display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, url }, key: number) => (
                <MKTypography2
                  key={url}
                  component={MaterialLink}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="primary"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography2>
              ))}
            </MKBox2>
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
            {menus.map(({ name, items }: FooterMenu) => (
              <Grid key={name} item xs={false} md={2} sx={{ mb: [3, 0] }}>
                <MKTypography2
                  display="block"
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  mb={1}
                >
                  {name}
                </MKTypography2>

                <MKBox2 component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
                  {items.map(({ name, url }) => (
                    <MKBox2
                      key={name}
                      component="li"
                      p={0}
                      m={0}
                      lineHeight={1.25}
                    >
                      <MKTypography2
                        component={GatsbyLink}
                        to={url}
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography2>
                    </MKBox2>
                  ))}
                </MKBox2>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center', my: 3 }}>
            <MKTypography2 variant="caption" fontWeight="regular">
              Copyright &copy; {year}{' '}
              <MKTypography2
                component={GatsbyLink}
                to={brand.url}
                rel="noreferrer"
                variant="caption"
                fontWeight="regular"
              >
                {brand.name}
              </MKTypography2>{' '}
              by{' '}
              <MKTypography2
                component={MaterialLink}
                href={copyright.url}
                target="_blank"
                rel="noreferrer"
                variant="caption"
                fontWeight="regular"
              >
                {copyright.name}
              </MKTypography2>
            </MKTypography2>
          </Grid>
        </Grid>
      </Container>
    </MKBox2>
  );
}

export default DefaultFooter;
