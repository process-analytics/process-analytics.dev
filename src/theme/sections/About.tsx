import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { SECTION } from '../utils/constants';
import { about } from '../../content/AboutContent';
import { AboutSubSection, Image as ImageType } from '../types';
import styled from 'styled-components';

const About = (): JSX.Element => {
  return (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about} />

      {about.map(({ markdown, image }, index) => (
        <SubSection
          markdown={markdown}
          image={image}
          imageOnRight={Boolean(index % 2)}
        />
      ))}
    </Section.Container>
  );
};

const SubSection = ({
  markdown,
  image,
  imageOnRight,
}: AboutSubSection & { imageOnRight: boolean }): JSX.Element => (
  <Box>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      {!imageOnRight && <AboutSubSectionImage image={image} />}
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
        <Fade direction="down" triggerOnce>
          <ReactMarkdown source={markdown} renderers={markdownRenderer} />
        </Fade>
      </Box>
      {imageOnRight && <AboutSubSectionImage image={image} />}
    </Flex>
    <Divider />
  </Box>
);

const AboutSubSectionImage = ({ image }: { image: ImageType }): JSX.Element => (
  <Box width={[1, 1, 2 / 6]} style={{ maxWidth: '300px', margin: 'auto' }}>
    <Fade direction="right" triggerOnce style={{ textAlign: 'center' }}>
      <Image
        width={[2 / 6, 2 / 6, 1]}
        mt={[4, 4, 0]}
        ml={[0, 0, 1]}
        {...image}
      />
    </Fade>
  </Box>
);

const Divider = styled.div`
  width: 30%;
  height: 1px;
  display: block;
  position: relative;
  margin-bottom: 0em;
  margin-left: 35%;
  padding: 2em 0;

  &:after,
  &:before {
    content: '';
    position: absolute;

    width: 100%;
    height: 1px;
    bottom: 50%;
    left: 0;
  }

  &:before {
    background: linear-gradient(
      90deg,
      $bg 0%,
      $bg 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: $barsize;
    background-position: center;
    z-index: 1;
  }

  &:after {
    transition: opacity 0.3s ease, animation 0.3s ease;

    background: linear-gradient(
      to right,
      #62efab 5%,
      #f2ea7d 15%,
      #f2ea7d 25%,
      #ff8797 35%,
      #ff8797 45%,
      #e1a4f4 55%,
      #e1a4f4 65%,
      #82fff4 75%,
      #82fff4 85%,
      #62efab 95%
    );

    background-size: 200%;
    background-position: 0%;
    animation: bar 15s linear infinite;
  }

  @keyframes bar {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
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
