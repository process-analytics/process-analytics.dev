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
import { HeadProps } from 'gatsby';
import React from 'react';
import { DataProps } from '../../hooks/use-site-metadata';
import { SEO } from '../../components/seo';
import { PAGE } from '../../theme/utils/constants';

// @mui material components
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../../assets/theme';

// Material Kit 2 React components
import MKBox from '../../theme/components/material-kit/MKBox';
import MKTypography from '../../theme/components/material-kit/MKTypography';

// Material UI React components
import DefaultNavbar from '../../theme/components/DefaultNavbar';
import DefaultFooter from '../../theme/components/DefaultFooter';

// Routes
import { footerRoutes } from '../../content/FooterRoutes';
import { routes } from '../../content/Routes';

const TermsAndPoliciesPage = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MKBox position="fixed" top="0.5rem" width="100%">
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
      />
    </MKBox>

    <Grid container spacing={3} alignItems="center">
      <Grid
        item
        xs={12}
        sm={10}
        md={7}
        lg={6}
        xl={4}
        ml={{ xs: 'auto', lg: 6 }}
        mr={{ xs: 'auto', lg: 6 }}
      >
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt={{ xs: 20, sm: 18, md: 20 }}
          mb={{ xs: 20, sm: 18, md: 20 }}
          mx={3}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            shadowColor="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              Contact us
            </MKTypography>
          </MKBox>

          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              For further questions, including partnership opportunities, please
              email hello@creative-tim.com or contact using our contact form.
            </MKTypography>
          </MKBox>
        </MKBox>
      </Grid>
    </Grid>

    <MKBox pt={6} px={1} mt={6}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </ThemeProvider>
);

export default TermsAndPoliciesPage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }: HeadProps<DataProps>): JSX.Element => (
  <SEO title={PAGE.termsAndPolicies} pathname={location.pathname} />
);
