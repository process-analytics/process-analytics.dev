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
import { Link } from 'gatsby';
import React from 'react';
import {
  Heading,
  Flex,
  Box,
  Text,
  // Image,
  Button,
} from 'rebass/styled-components';
import styled from 'styled-components';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import { SECTION } from '../utils/constants';
import { landing } from '../../content/LandingContent';
import { Fade } from 'react-awesome-reveal';

// TODO find a svg image instead - the following is too large
// https://www.pngegg.com/en/png-blrjm
// import Img from '../../images/pngegg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = (): JSX.Element => {
  const { title, presentation, socialLinks } = {
    ...landing,
  };

  return (
    <Section.Container
      id={SECTION.home}
      Background={Background}
      justifyContent="space-around"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop={5}
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
          style={{ position: 'absolute', borderRadius: '0.5rem', zIndex: -1 }}
          opacity="0.15"
        />
        {/*<Image*/}
        {/*  src={Img}*/}
        {/*  opacity="0.1"*/}
        {/*  width="100%"*/}
        {/*  height="100%"*/}
        {/*  style={{*/}
        {/*    objectFit: 'cover',*/}
        {/*    position: 'absolute',*/}
        {/*    borderRadius: '0.5rem',*/}
        {/*    zIndex: -1,*/}
        {/*  }}*/}
        {/*/>*/}
        <Flex
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
          paddingX={[2, 3, 5]}
          width="100%"
          height="100%"
        >
          <Text as="h2" fontSize={[2, 3, 4]} mb={[2, 3]}>
            Need a tool to generate process diagrams from events logs?
          </Text>
          <Text fontSize={[1, 2, 3]} mb={[3]}>
            We are developing a free tool that will help you generate and
            visualize your process activities in BPMN standard.
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
    </Section.Container>
  );
};

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '40vh']}
      width={['95vw', '55vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '55vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '30vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />
  </>
);

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

export default LandingPage;
