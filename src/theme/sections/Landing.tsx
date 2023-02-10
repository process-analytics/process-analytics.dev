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

import { Link } from 'gatsby';

import { Heading, Flex, Box, Text, Button } from 'rebass/styled-components';
import styled from 'styled-components';

import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Section } from '../components/Section';
import { SocialLink } from '../components/SocialLink';
import { SECTION } from '../utils/constants';
import { landing } from '../../content/LandingContent';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const Landing = (): JSX.Element => {
  const { title, presentation, socialLinks } = {
    ...landing,
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
              <SocialLink {...sl} />
            </Box>
          ))}
        </Flex>
      </Flex>
      <LandingCard
        style={{ boxSizing: 'border-box' }}
        minHeight={['13rem']}
        width={['100%', '100%', '80%']}
      >
        <Box
          backgroundColor="secondary"
          width="100%"
          height="100%"
          style={{ position: 'absolute', borderRadius: '0.5rem' }}
          opacity="0.15"
        />
        <Flex
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
          paddingX={[2, 3, 5]}
          width="100%"
          height="100%"
          style={{ position: 'absolute', zIndex: 0 }}
        >
          <Text as="h2" fontSize={[2, 3, 4]} mb={[2, 3]}>
            Need a tool to generate process diagrams from events logs?
          </Text>
          <Text fontSize={[1, 2, 3]} mb={[3]}>
            We are developing a free tool that will help you generate and
            visualize your process activities using BPMN Standards.
          </Text>

          <Button fontSize={[1, 2, 3]} mt={[3, 0, 0]}>
            <FontAwesomeIcon
              icon="arrow-right"
              size="lg"
              style={{ marginRight: '0.5rem' }}
            />
            <Link
              to="/model-generation-application"
              style={{
                color: 'White',
                textDecorationLine: 'None',
              }}
            >
              Get started
            </Link>
          </Button>
        </Flex>
      </LandingCard>
    </Section>
  );
};

const LandingCard = styled(Box).attrs({
  boxShadow: 0,
})`
  border: none;
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.25s;
  top: 0;
  height: 20vh;
  align-self: center;
`;

export default Landing;
