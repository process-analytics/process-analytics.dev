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

import React, { useState } from 'react';

// @mui material components
import { Theme } from '@mui/material';
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

// Material Kit 2 React components
import {
  MKBox2,
  MKTypography2,
  MKInput,
  MKButton,
  Navbar,
} from '../components';

// Material Kit 2 React example components
import SimpleFooter from '../examples/Footers/SimpleFooter';

// Images
import bgImage from '../assets/images/bg-sign-in-basic.jpeg';

import { linearGradient, rgba, theme } from '../assets/theme';

import { routes } from '../routes';

import { Link } from 'gatsby';

const [rememberMe, setRememberMe] = useState(false);
const handleSetRememberMe = (): void => setRememberMe(!rememberMe);

const SignInPage = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        routeContent={routes}
        action={{
          type: 'external',
          url: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
        color="primary"
        isTransparent
      />

      <MKBox2
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { primary, grey } }: Theme) =>
            `${linearGradient(
              rgba(grey?.A700, 0.6),
              rgba(primary.dark, 0.6),
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <MKBox2
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox2
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                shadowColor="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography2
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Sign in
                </MKTypography2>

                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  sx={{ mt: 1, mb: 2 }}
                >
                  <Grid item xs={2}>
                    <MKTypography2
                      component={MuiLink}
                      href="#"
                      variant="body1"
                      color="white"
                    >
                      <FacebookIcon color="inherit" />
                    </MKTypography2>
                  </Grid>

                  <Grid item xs={2}>
                    <MKTypography2
                      component={MuiLink}
                      href="#"
                      variant="body1"
                      color="white"
                    >
                      <GitHubIcon color="inherit" />
                    </MKTypography2>
                  </Grid>

                  <Grid item xs={2}>
                    <MKTypography2
                      component={MuiLink}
                      href="#"
                      variant="body1"
                      color="white"
                    >
                      <GoogleIcon color="inherit" />
                    </MKTypography2>
                  </Grid>
                </Grid>
              </MKBox2>

              <MKBox2 pt={4} pb={3} px={3}>
                <MKBox2 component="form" role="form">
                  <MKBox2 mb={2}>
                    <MKInput type="email" label="Email" fullWidth />
                  </MKBox2>

                  <MKBox2 mb={2}>
                    <MKInput type="password" label="Password" fullWidth />
                  </MKBox2>

                  <MKBox2 display="flex" alignItems="center" ml={-1}>
                    <Switch
                      checked={rememberMe}
                      onChange={handleSetRememberMe}
                    />

                    <MKTypography2
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography2>
                  </MKBox2>

                  <MKBox2 mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>
                      sign in
                    </MKButton>
                  </MKBox2>

                  <MKBox2 mt={3} mb={1} textAlign="center">
                    <MKTypography2 variant="button" color="text">
                      Don&apos;t have an account?{' '}
                      <MKTypography2
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography2>
                    </MKTypography2>
                  </MKBox2>
                </MKBox2>
              </MKBox2>
            </Card>
          </Grid>
        </Grid>
      </MKBox2>

      <MKBox2 width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox2>
    </ThemeProvider>
  );
};

export default SignInPage;
