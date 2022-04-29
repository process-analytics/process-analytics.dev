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

import theme from '../assets/theme';
import { CustomTypography } from '../assets/theme/base/typography';

// Images
import bgImage from '../assets/images/bg-about-us.jpg';

const AboutPage = (): JSX.Element => (
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
      <Container sx={{ mt: 6 }}>
        Process Analytics est un projet Open Source à l’initiative de la société
        Bonitasoft. Celui-ci vise à mettre à disposition des développeurs et des
        data scientists un écosystème de composants et d’outils Open Source
        personnalisable. Le projet permet actuellement de visualiser des données
        d’exécution de processus métier, tout en ayant une intégration simple
        dans des applications de : <MKBox sx={{ mt: 1 }}>- BPM</MKBox>
        <MKBox sx={{ mt: 1 }}>- Process Mining</MKBox>
        <MKBox sx={{ mt: 1 }}>- Business Intelligence</MKBox>
        <MKBox sx={{ mt: 1 }}>- RPA</MKBox>
        <MKBox sx={{ mt: 1 }}>
          automation tools, process mining, Business Intelligence tools, RPA,
          services orchestration, and others.
        </MKBox>
      </Container>

      <Container sx={{ mt: 6 }}>
        Il a pour but de donner aux utilisateurs finaux une meilleure
        compréhension de leurs données et de leur permettre de les exploiter
        dans des applications de manière simple et intuitive. Ainsi, ils
        pourront prendre les bonnes décisions pour optimiser leur utilisation de
        leurs ressources, améliorer leur processus et éviter les erreurs de
        processus.
      </Container>

      <Container sx={{ mt: 6 }}>
        Example de use case supporté :
        <MKBox sx={{ mt: 1 }}>
          You can create and build applications to visualize:
        </MKBox>
        <MKBox sx={{ mt: 1 }}>Mettre des captures des démos & liens</MKBox>
        <MKBox sx={{ mt: 1 }}>
          Monitoring of a process instance execution with a real-time
          visualization
        </MKBox>
        <MKBox sx={{ mt: 1 }}>
          Monitoring of all process instances for a selected process and a
          selected user
        </MKBox>
        <MKBox sx={{ mt: 1 }}>Prediction of a process instance execution</MKBox>
        <MKBox sx={{ mt: 1 }}>
          Drill down through process execution flow with a real-time
          visualization
        </MKBox>
        <MKBox sx={{ mt: 1 }}>Process instance execution history</MKBox>
      </Container>

      <Container sx={{ mt: 6 }}>
        Mise en évidence de modèle de processus, à partir des logs, sous forme
        de diagramme BPMN
        <MKBox sx={{ mt: 1 }}>
          statistiques de temps d'exécution, de fréquence.
        </MKBox>
        <MKBox sx={{ mt: 1 }}>conformance checking</MKBox>
        <MKBox sx={{ mt: 1 }}>
          prédictive analysis : bottleneck, task prédiction, trace prédiction.
        </MKBox>
        <MKBox sx={{ mt: 1 }}>Diagnostique</MKBox>
        <MKBox sx={{ mt: 1 }}>Performance</MKBox>
        <MKBox sx={{ mt: 1 }}>Conformité</MKBox>
        <MKBox sx={{ mt: 1 }}>Causes</MKBox>
        <MKBox sx={{ mt: 1 }}>Monitoring</MKBox>
        <MKBox sx={{ mt: 1 }}>Tableaux de bord</MKBox>
        <MKBox sx={{ mt: 1 }}>Alarmes</MKBox>
      </Container>
      <Container sx={{ mt: 6 }}>
        Prescription: amélioration de l’efficacité des processus
      </Container>
      <Container sx={{ mt: 6 }}>Recommandation</Container>
      <Container sx={{ mt: 6 }}>Meilleur futur chemin</Container>
      <Container sx={{ mt: 6 }}>
        Solution de démonstration de l'agrégation de différents composants
        fournis par le projet PA
      </Container>
      <Container sx={{ mt: 6 }}>
        event logs (entrée XES pour faire de la découverte du processus) qui
        décrivent les activités observées
      </Container>
      <Container sx={{ mt: 6 }}>
        création d’un modèle enrichi ensuite utilisé par PA pour améliorer la
        visualisation:
      </Container>
      <Container sx={{ mt: 6 }}>
        Simplification du processus et Ajout de gateways: traitement avec R et
        java
      </Container>
      <Container sx={{ mt: 6 }}>Représentation BPMN: javascript</Container>
      <Container sx={{ mt: 6 }}>
        Ensuite, ce processus structuré BPMN peut être ensuite injecté dans une
        solution BPM comme Bonita pour initier un projet d’automatisation.
        <MKBox sx={{ mt: 1 }}>Description </MKBox>
        <MKBox sx={{ mt: 1 }}>Process Discovery </MKBox>
        <MKBox sx={{ mt: 1 }}>Process navigation </MKBox>
      </Container>

      <Container sx={{ mt: 6 }}>
        L’environnement technologique utilisé est :
        <MKBox sx={{ mt: 1 }}>- JavaScript</MKBox>
        <MKBox sx={{ mt: 1 }}>- TypeScript</MKBox>
        <MKBox sx={{ mt: 1 }}>- Java</MKBox>
        <MKBox sx={{ mt: 1 }}>- R</MKBox>
        <MKBox sx={{ mt: 1 }}>- BPMN 2.0</MKBox>
      </Container>

      <Information />
      <Featuring />
      <Newsletter />
    </Card>

    <MKBox pt={6} px={1} mt={6}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </ThemeProvider>
);

export default AboutPage;
