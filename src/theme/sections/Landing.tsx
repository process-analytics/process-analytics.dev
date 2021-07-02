import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import ScrollIcon from '../components/ScrollIcon';
import Triangle from '../components/Triangle';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';
import { landing } from '../../content/LandingContent';
import { Fade } from 'react-awesome-reveal';
// import ReactMarkdown from "react-markdown";
// import markdownRenderer from "../components/MarkdownRenderer";

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = (): JSX.Element => {
  const { title, presentation, socialLinks } = {
    ...landing,
  };

  return (
    <Section.Container id={SECTION.home} Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
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

      <ScrollIcon href={`#${getSectionHref(SECTION.about)}`} />
    </Section.Container>
  );
};

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
