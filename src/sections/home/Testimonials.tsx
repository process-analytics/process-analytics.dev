/**
 * Copyright 2023 Bonitasoft S.A.
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
import type { FC } from 'react';
import React from 'react';

import { Container, Grid, Link } from '@mui/material';

import { MKTypography, MKBox, SectionWithTitle } from '../../components';
import { SECTION } from '../../helper';

import logo from '../../assets/images/logo_bonitasoft_inline.svg';

export const Testimonials: FC = () => (
  <SectionWithTitle id={SECTION.testimonials}>
    <Container>
      <Grid
        container
        alignItems="center"
        flexDirection={['column', 'row']}
        justifyContent={'center'}
      >
        <Grid
          item
          xs={12}
          md={5}
          px={{ xs: 0, md: 4 }}
          sx={{
            mb: { xs: 4, md: 0 },
          }}
        >
          <Link
            href="https://www.bonitasoft.com/process-mining-AI?utm_source=ProcessAnalyticsWebsite&utm_medium=CTA&utm_campaign=ProcessAnalytics"
            target="_blank"
            rel="noreferrer"
          >
            <MKBox
              component="img"
              src={logo}
              alt="Bonitasoft logo"
              maxWidth="100%"
              height="auto"
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} px={{ xs: 0, md: 4 }}>
          <MKTypography variant="body2" color="text">
            Process mining algorithms (process performance mining) can be used
            in Bonita to provide visibility, analysis and better understanding
            of business operating models - through real-time information on
            current performance and indicators for potential improvements.
          </MKTypography>
        </Grid>
      </Grid>
    </Container>
  </SectionWithTitle>
);
