/**
 * Copyright 2021 Bonitasoft S.A.
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

import { Apps, Flag, PrecisionManufacturing } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultCounterCard from 'src/examples/Cards/CounterCards/DefaultCounterCard';

import { CustomTypography } from '../assets/theme/base/typography';

import {
  faPinterest,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import MKBox from '../components/MKBox';
import MKTypography from '../components/MKTypography';
import MKSocialButton from '../components/MKSocialButton';

// Material Kit 2 React examples
import DefaultNavbar from '../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../examples/Footers/DefaultFooter';
import FilledInfoCard from '../examples/Cards/InfoCards/FilledInfoCard';

// Presentation page sections
import Counters from '../layouts/pages/presentation/sections/Counters';
import Information from '../layouts/pages/presentation/sections/Information';
import DesignBlocks from '../layouts/pages/presentation/sections/DesignBlocks';
import Pages from '../layouts/pages/presentation/sections/Pages';
import Testimonials from '../layouts/pages/presentation/sections/Testimonials';
import Download from '../layouts/pages/presentation/sections/Download';

// Presentation page components
import BuiltByDevelopers from '../layouts/pages/presentation/components/BuiltByDevelopers';

// Material Kit 2 React themes
import theme from '../assets/theme';

// Routes
import footerRoutes from '../footer.routes';
import routes from '../PA-routes';

// Images
import bgImage from '../assets/images/bg-presentation.jpg';

const HomePage = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <DefaultNavbar
      brand="Process Analytics"
      routes={routes}
      action={{
        type: 'external',
        route:
          'https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html',
        label: 'Demo',
        color: 'secondary',
      }}
      sticky
    />

    <MKBox
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <MKTypography
            variant="h1"
            color="white"
            mt={-6}
            mb={1}
            sx={({ breakpoints, typography }) => ({
              [breakpoints.down('md')]: {
                fontSize: (typography as CustomTypography).size['3xl'],
              },
            })}
          >
            Process Analytics
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            textAlign="center"
            px={{ xs: 6, lg: 12 }}
            mt={1}
          >
            Open Source &amp; Customizable components based on BPMN 2.0
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        backgroundColor: ({ palette: { white }, functions: { rgba } }: any) =>
          rgba(white.main, 0.8),
        backdropFilter: 'saturate(200%) blur(30px)',
        boxShadow: ({ boxShadows: { xxl } }: any) => xxl,
      }}
    >
      <Container sx={{ mt: 6 }}>
        Process ? We can find process everywhere: in the real life, in the
        industry, in the software... Example: day activity One way to structure
        a process is to use the BPMN 2.0 standard.
      </Container>
      <Container sx={{ mt: 6 }}>
        Data ? On observe ce qui se passe et on enregistre On peut en extraire
        des données communes à chaque activité/processus un identifiant: un
        activité unique qu’on peut désigner une date d'exécution un nom
        d’activité: levé, passer un appel, faire du sport des ressources: lit,
        bureau, café et aussi des personnes des données d’entrées et de sorties:
        appel téléphonique question et réponse d’un client
      </Container>
      <Container sx={{ mt: 6 }}>
        Merge = process analytics dans le monde du BPM: on est dans le cadre de
        processus structuré, cadré dans le cadre de l’exemple précédent,
        processus implicite, non structuré, la donnée est brute, data mining:
        extraction et structuration de la donnée process mining: faire parler
        les données pour faire émergé des processus et de nouvelles informations
      </Container>
      <MKBox component="section" py={3}>
        <Container>
          Let's talk about the components
          <Grid container item xs={12} lg={9} sx={{ mx: 'auto' }}>
            <Grid item xs={12} md={4}>
              Open Source
            </Grid>

            <Grid item xs={12} md={4} display="flex">
              <Divider
                orientation="vertical"
                sx={{ display: { xs: 'none', md: 'block' }, mx: 0 }}
              />
              Customizable
              <Divider
                orientation="vertical"
                sx={{ display: { xs: 'none', md: 'block' }, ml: 0 }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              Easy to use
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Container sx={{ mt: 6 }}>
        Example monitoring fréquence Style par défaut neutre, pour ne pas
        surcharger le rendu et facilite l’affichage des données spécifiques
      </Container>
      <Container sx={{ mt: 6 }}>
        {' '}
        Venez participer à notre communauté !
      </Container>

      <Counters />
      <Information />
      <DesignBlocks />
      <Pages />

      <Container sx={{ mt: 6 }}>
        <BuiltByDevelopers />
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="info"
              icon={<Flag />}
              title="Getting Started"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: 'external',
                route:
                  'https://www.creative-tim.com/learning-lab/react/overview/material-kit/',
                label: "Let's start",
              }}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              color="info"
              icon={<PrecisionManufacturing />}
              title="Plugins"
              description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
              action={{
                type: 'external',
                route:
                  'https://www.creative-tim.com/learning-lab/react/overview/datepicker/',
                label: 'Read more',
              }}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              color="info"
              icon={<Apps />}
              title="Components"
              description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
              action={{
                type: 'external',
                route:
                  'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
                label: 'Read more',
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/*<Testimonials />*/}
      <Download />

      <MKBox pt={18} pb={6}>
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              lg={5}
              ml="auto"
              sx={{ textAlign: { xs: 'center', lg: 'left' } }}
            >
              <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                Thank you for your support!
              </MKTypography>

              <MKTypography variant="body1" color="text">
                We deliver the best web products
              </MKTypography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              my={{ xs: 5, lg: 'auto' }}
              mr={{ xs: 0, lg: 'auto' }}
              sx={{ textAlign: { xs: 'center', lg: 'right' } }}
            >
              <MKSocialButton
                component="a"
                href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                target="_blank"
                color="twitter"
                sx={{ mr: 1 }}
              >
                <FontAwesomeIcon icon={faTwitter} />
                &nbsp;Tweet
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                target="_blank"
                color="facebook"
                sx={{ mr: 1 }}
              >
                <FontAwesomeIcon icon={faFacebook} />
                &nbsp;Share
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                target="_blank"
                color="pinterest"
              >
                <FontAwesomeIcon icon={faPinterest} />
                &nbsp;Pin it
              </MKSocialButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </Card>

    <MKBox pt={6} px={1} mt={6}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </ThemeProvider>
);

export default HomePage;
