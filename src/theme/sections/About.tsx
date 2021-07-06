import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownComponents from '../components/MarkdownComponents';
import { SECTION } from '../utils/constants';
import { about } from '../../content/AboutContent';
import styled from 'styled-components';

const About = (): JSX.Element => {
  const { markdown, logo } = about;

  return (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about} />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdownRoot>
              <ReactMarkdown
                children={markdown}
                components={markdownComponents}
              />
            </ReactMarkdownRoot>
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce style={{ textAlign: 'center' }}>
            <Image
              width={[2 / 6, 2 / 6, 1]}
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
              {...logo}
            />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const ReactMarkdownRoot = styled.div`
  font-size: large;
  padding-bottom: 1em;
  line-height: 2em;

  @media (max-width: 600px) {
    line-height: 1.5em;
    font-size: medium;
  }
`;

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);

export default About;
