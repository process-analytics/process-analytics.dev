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
import React, { FC } from 'react';

import { MKTypography, MKBox, SectionWithTitle } from '../../components';
import { Container, Grid, Link } from '@mui/material';
import logo from '../../assets/images/logo_bonitasoft_inline.svg';
import { SECTION } from '../../helper';

export const Testimonials: FC = () => (
  <SectionWithTitle id={SECTION.testimonials}>
    <Container>
      <Grid
        container
        alignItems="center"
        flexDirection={['column', 'row']}
        justifyContent={'center'}
      >
        <Grid item md={5} m="auto" sx={{ textAlign: 'center' }} width="100%">
          <Link
            href="https://www.bonitasoft.com/process-mining-AI?utm_source=ProcessAnalyticsWebsite&utm_medium=CTA&utm_campaign=ProcessAnalytics"
            target="_blank"
            rel="noreferrer"
          >
            <MKBox
              component="img"
              src={logo}
              alt="Bonitasoft logo"
              maxWidth="80%"
              height="auto"
            />
          </Link>
        </Grid>
        <Grid
          item
          md={5}
          mr="auto"
          sx={{
            textAlign: 'center',
            ml: { xs: 0, lg: 3 },
            mb: { xs: 8, md: 0 },
          }}
        >
          <MKTypography variant="body2" color="text" ml={0}>
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
