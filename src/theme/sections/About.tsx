import React from 'react';
import { Box, Image, Flex, ImageProps } from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownComponents from '../components/MarkdownComponents';
import { SECTION } from '../utils/constants';
import { about } from '../../content/AboutContent';
import { AboutSubSection, Image as ImageType } from '../types';
import styled, { CSSProperties } from 'styled-components';
import { BoxProps } from 'rebass';

const About = (): JSX.Element => {
  return (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about} />

      {about.map(({ markdown, image, withSeparator }, index) => (
        <SubSection
          key={index}
          markdown={markdown}
          image={image}
          withSeparator={withSeparator}
        />
      ))}
    </Section.Container>
  );
};

const SubSection = ({
  markdown,
  image,
  withSeparator = true,
}: AboutSubSection): JSX.Element => (
  <Box
    css={{
      marginTop: '30px',
      marginBottom: '30px',
    }}
  >
    {image && image.position === 'top' && (
      <Flex
        width={getBoxWidth(image)}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <AboutSubSectionImage image={image} />
      </Flex>
    )}
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      {image && image.position === 'left' && (
        <AboutSubSectionImage image={image} />
      )}
      <Box width={getBoxWidth(image)} px={[1, 2, 4]} mt={2}>
        <Fade direction="down" triggerOnce>
          <ReactMarkdownRoot>
            <ReactMarkdown
              children={markdown}
              components={markdownComponents}
            />
          </ReactMarkdownRoot>
        </Fade>
      </Box>
      {image && image.position === 'right' && (
        <AboutSubSectionImage image={image} />
      )}
    </Flex>
    {image && image.position === 'bottom' && (
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <AboutSubSectionImage image={image} />
      </Flex>
    )}
    {withSeparator && <Divider />}
  </Box>
);

const ReactMarkdownRoot = styled.div`
  font-size: large;
  padding-bottom: 1em;
  line-height: 2em;

  @media (max-width: 600px) {
    line-height: 1.5em;
    font-size: medium;
  }
`;

function getBoxWidth(image: ImageType | undefined): number[] {
  if (!image) {
    return [1, 1, 4 / 6];
  }

  switch (image.position) {
    case 'top':
    case 'bottom':
      return [1, 1, 1];
    case 'left':
    case 'right':
    default:
      return [1, 1, 4 / 6];
  }
}

function getImageBoxProps(image: ImageType | undefined): BoxProps {
  if (!image) {
    return {
      width: [1, 1, 2 / 6],
      style: {
        maxWidth: '300px',
        margin: 'auto',
      },
    };
  }

  switch (image.position) {
    case 'top':
    case 'bottom':
      return { width: [1, 1, 1], style: { margin: 'auto' } };
    case 'left':
    case 'right':
    default:
      return {
        width: [1, 1, 2 / 6],
        style: { maxWidth: '300px', margin: 'auto' },
      };
  }
}

function convertPositionToFadeDirection(
  image: ImageType,
): 'down' | 'up' | 'left' | 'right' {
  switch (image.position) {
    case 'top':
      return 'down';
    case 'bottom':
      return 'up';
    case 'left':
      return 'left';
    case 'right':
    default:
      return 'right';
  }
}

function getImageProps(image: ImageType): ImageProps {
  switch (image.position) {
    case 'top':
      return { mt: [4, 4, 0], mr: [0, 0, 0] };
    case 'bottom':
      return { mt: [4, 4, 0], ml: [0, 0, 0] };
    case 'left':
      return { mb: [4, 4, 0], mr: [0, 0, 1] };
    case 'right':
    default:
      return { mt: [4, 4, 0], ml: [0, 0, 1] };
  }
}

const AboutSubSectionImage = ({
  image,
}: {
  image: ImageType | undefined;
}): JSX.Element => (
  <Box {...getImageBoxProps(image)}>
    {image && (
      <Fade
        direction={convertPositionToFadeDirection(image)}
        triggerOnce
        style={{ textAlign: 'center' }}
      >
        <Image width={[2 / 6, 2 / 6, 1]} {...getImageProps(image)} {...image} />
      </Fade>
    )}
  </Box>
);

const Divider = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  &:before {
    content: '';
    position: absolute;
    left: 35%;
    right: 35%;
    height: 2px;
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
