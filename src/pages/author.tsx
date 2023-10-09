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
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { boxShadows, linearGradient, rgba, theme } from '../assets/theme';

// Material Kit 2 React components
import { MKBox2, Navbar } from '../components';

// Author page sections
import Profile from '../layouts/pages/landing-pages/author/sections/Profile';
import Posts from '../layouts/pages/landing-pages/author/sections/Posts';
import Contact from '../layouts/pages/landing-pages/author/sections/Contact';
import Footer from '../layouts/pages/landing-pages/author/sections/Footer';

// Images
import bgImage from '../assets/images/city-profile.jpg';

import { routes } from '../routes';

import React from 'react';

const AuthorPage = (): JSX.Element => (
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

    <MKBox2 bgColor="quaternary">
      <MKBox2
        minHeight="25rem"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { primary, grey } }: Theme) =>
            `${linearGradient(
              rgba(grey?.A700, 0.8),
              rgba(primary.dark, 0.8),
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: rgba('white', 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: boxShadows.xxl,
        }}
      >
        <Profile />
        <Posts />
      </Card>
      <Contact />
      <Footer />
    </MKBox2>
  </ThemeProvider>
);

export default AuthorPage;
