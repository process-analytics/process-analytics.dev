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
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 40%;
    right: 40%;
    width: 20%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(48, 49, 51),
      transparent
    );
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
