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
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';

// Material Kit 2 React components
import MKBox from '../components/MKBox';
import MKTypography from '../components/MKTypography';
import MKButton from '../components/MKButton';

// Material Kit 2 React examples
import DefaultNavbar from '../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../examples/Footers/DefaultFooter';

// About Us page sections
import Information from '../layouts/pages/landing-pages/about-us/sections/Information';
import Team from '../layouts/pages/landing-pages/about-us/sections/Team';
import Featuring from '../layouts/pages/landing-pages/about-us/sections/Featuring';
import Newsletter from '../layouts/pages/landing-pages/about-us/sections/Newsletter';

// Routes
import footerRoutes from '../footer.routes';
import routes from '../PA-routes';

import { theme } from '../assets/theme';
import { CustomTypography } from '../assets/theme/base/typography';

// Images
import bgImage from '../assets/images/bg-about-us.jpg';

const AboutPage = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <DefaultNavbar
      routes={routes}
      action={{
        type: 'external',
        route: 'https://www.creative-tim.com/product/material-kit-react',
        label: 'free download',
        color: 'default',
      }}
      transparent
      light
    />
    <MKBox
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradient },
        }: any) =>
          `${linearGradient(
            rgba(gradient.dark.main, 0.6),
            rgba(gradient.dark.dark, 0.6),
          )}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: 'auto', textAlign: 'center' }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography }) => ({
              [breakpoints.down('md')]: {
                fontSize: (typography as CustomTypography).size['3xl'],
              },
            })}
          >
            Work with an amazing design
          </MKTypography>

          <MKTypography
            variant="body1"
            color="white"
            opacity={0.8}
            mt={1}
            mb={3}
          >
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game
          </MKTypography>

          <MKButton
            color="default"
            sx={{ color: ({ palette: { dark } }: any) => dark.main }}
          >
            create account
          </MKButton>

          <MKTypography variant="h6" color="white" mt={8} mb={1}>
            Find us on
          </MKTypography>

          <MKBox display="flex" justifyContent="center" alignItems="center">
            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="#"
              mr={3}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </MKTypography>

            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="#"
              mr={3}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </MKTypography>

            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="#"
              mr={3}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </MKTypography>

            <MKTypography component="a" variant="body1" color="white" href="#">
              <FontAwesomeIcon icon={faGooglePlus} />
            </MKTypography>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        boxShadow: ({ boxShadows: { xxl } }: any) => xxl,
      }}
    >
      <Information />
      <Team />
      <Featuring />
      <Newsletter />
    </Card>

    <MKBox pt={6} px={1} mt={6}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </ThemeProvider>
);

export default AboutPage;
