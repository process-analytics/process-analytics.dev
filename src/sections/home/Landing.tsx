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

import { Heading, Flex, Box, Text } from 'rebass/styled-components';

import { Fade } from 'react-awesome-reveal';

import { Section, SocialLink, SocialLinkContent } from '../../components';
import { SECTION } from '../../helper';

import { landingContent } from '../../content/LandingContent';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

export type LandingContent = {
  title: string;
  presentation: string;
  socialLinks: SocialLinkContent[];
};

export const Landing = (): JSX.Element => {
  const { title, presentation, socialLinks } = {
    ...landingContent,
  };

  return (
    <Section id={SECTION.home} justifyContent="space-around">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop={5}
        marginBottom={5}
      >
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[6, 8]}
          mb={[3, 4, 5]}
          mt={4}
        >
          {title}
        </Heading>

        <Heading
          as="h2"
          color="primary"
          fontSize={[2, 4]}
          mb={[3, 5]}
          textAlign="center"
          style={centerHorizontally}
        >
          <Fade direction="down" triggerOnce>
            <Text width={[300, 700]} key="presentation">
              {presentation}
            </Text>
          </Fade>
        </Heading>

        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          {socialLinks.map(sl => (
            <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
              <SocialLink content={sl} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};
