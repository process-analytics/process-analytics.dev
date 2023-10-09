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
import React from 'react';

import type { Theme } from '@mui/material';
import { Box } from '@mui/material';

import { Fade } from 'react-awesome-reveal';

import type { SocialLinkContent } from '../../components';
import { MKTypography, Section, SocialLink } from '../../components';
import { SECTION } from '../../helper';
import { landingContent } from '../../content';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

export type LandingContent = {
  title: string;
  presentation: string;
  socialLinks: SocialLinkContent[];
};

export const Landing = (): JSX.Element => (
  <Section id={SECTION.home} justifyContent="space-around">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={5}
      marginBottom={5}
      color="primary"
    >
      <MKTypography
        variant="h1"
        sx={({ breakpoints }: Theme) => ({
          [breakpoints.down('md')]: {
            fontSize: '1.875rem',
          },
        })}
        mb={3}
      >
        {landingContent.title}
      </MKTypography>
      <MKTypography
        variant="h2"
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <Fade direction="down" triggerOnce>
          <MKTypography width={[300, 700]} key="presentation">
            {landingContent.presentation}
          </MKTypography>
        </Fade>
      </MKTypography>
      <MKTypography variant="body2" mb={3} fontWeight={700}>
        Find us on
      </MKTypography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {landingContent.socialLinks.map(socialLink => (
          <Box key={socialLink.name} mx={3}>
            <SocialLink content={socialLink} />
          </Box>
        ))}
      </Box>
    </Box>
  </Section>
);
