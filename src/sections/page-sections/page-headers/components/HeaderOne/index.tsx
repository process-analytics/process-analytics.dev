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

import { Theme } from '@mui/material';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

// Material Kit 2 React components
import { MKBox2, MKButton, MKTypography2 } from '../../../../../components';

// Images
import bgImage from '../../../../../assets/images/bg-coworking.jpeg';

import React from 'react';
import { fontSize, linearGradient, rgba } from '../../../../../assets/theme';

function HeaderOne(): JSX.Element {
  return (
    <MKBox2 component="header" position="relative" height="100%">
      <MKBox2 component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MKTypography2
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Material Design
            </MKTypography2>
            <MKButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: 'block', lg: 'none' }, ml: 'auto' }}
            >
              <MKBox2 component="i" color="white" className="fas fa-bars" />
            </MKButton>
            <MKBox2
              component="ul"
              display={{ xs: 'none', lg: 'flex' }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: 'none' }}
            >
              <MKBox2 component="li">
                <MKTypography2
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={e => e.preventDefault()}
                >
                  Home
                </MKTypography2>
              </MKBox2>

              <MKBox2 component="li">
                <MKTypography2
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={e => e.preventDefault()}
                >
                  About Us
                </MKTypography2>
              </MKBox2>

              <MKBox2 component="li">
                <MKTypography2
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={e => e.preventDefault()}
                >
                  Contact Us
                </MKTypography2>
              </MKBox2>
            </MKBox2>
            <MKBox2
              component="ul"
              display={{ xs: 'none', lg: 'flex' }}
              p={0}
              m={0}
              sx={{ listStyle: 'none' }}
            >
              <MKBox2 component="li">
                <MKTypography2
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={e => e.preventDefault()}
                >
                  <MKBox2
                    component="i"
                    color="white"
                    className="fab fa-twitter"
                  />
                </MKTypography2>
              </MKBox2>

              <MKBox2 component="li">
                <MKTypography2
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={e => e.preventDefault()}
                >
                  <MKBox2
                    component="i"
                    color="white"
                    className="fab fa-facebook"
                  />
                </MKTypography2>
              </MKBox2>

              <MKBox2 component="li">
                <MKTypography2
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={e => e.preventDefault()}
                >
                  <MKBox2
                    component="i"
                    color="white"
                    className="fab fa-instagram"
                  />
                </MKTypography2>
              </MKBox2>
            </MKBox2>
          </Grid>
        </Container>
      </MKBox2>
      <MKBox2
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{
          backgroundImage: ({ palette: { primary, grey } }: Theme) =>
            `${linearGradient(
              rgba(grey?.A700, 0.5),
              rgba(primary.dark, 0.5),
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          >
            <MKTypography2
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints }: Theme) => ({
                [breakpoints.down('md')]: {
                  fontSize: fontSize['3xl'],
                },
              })}
            >
              Material Kit
            </MKTypography2>

            <MKTypography2
              variant="body1"
              color="white"
              opacity={0.8}
              pr={6}
              mr={6}
            >
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </MKTypography2>

            <Stack direction="row" spacing={1} mt={3}>
              <MKButton color="white">Get Started</MKButton>

              <MKButton variant="text" color="white">
                Read more
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox2>
    </MKBox2>
  );
}

export default HeaderOne;
