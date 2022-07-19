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

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from './material-kit/MKBox';
import MKTypography from './material-kit/MKTypography';

import React from 'react';
import { Link } from 'gatsby';

function DefaultFooter({ content }: DefaultFooterProps): JSX.Element {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: 'auto', mb: 3 }}>
            <MKBox>
              <Link to={brand.route}>
                <MKBox
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  maxWidth="2rem"
                  mb={2}
                />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }: any, key: any) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>

          {menus.map(({ name: title, items }: any) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>

              <MKBox component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
                {items.map(({ name, route, href }: any) => (
                  <MKBox
                    key={name}
                    component="li"
                    p={0}
                    m={0}
                    lineHeight={1.25}
                  >
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}

          <Grid item xs={12} sx={{ textAlign: 'center', my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
interface DefaultFooterProps {
  content: any | any[];
}

export default DefaultFooter;
