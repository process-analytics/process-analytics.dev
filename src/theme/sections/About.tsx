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
  margin: 1.5em auto;
  position: relative;
  height: 9px;
  width: 9px;
  border: transparent;
  overflow: visible;
  background-image: url('data:image/svg+xml;utf8,<svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="8" height="8" rx="4" fill="%231CB0A8" /></svg>');

  &:before {
    position: absolute;
    height: 9px;
    width: 10px;
    content: '';
    background-image: url('data:image/svg+xml;utf8,<svg width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.91043 1.29752C4.30449 0.688518 5.19551 0.688519 5.58957 1.29752L9.25143 6.95675C9.68196 7.62211 9.20436 8.5 8.41186 8.5H1.08814C0.29564 8.5 -0.181954 7.62211 0.248574 6.95675L3.91043 1.29752Z" fill="%23FCB643" /></svg>');
    left: -18px;
  }

  &:after {
    position: absolute;
    height: 9px;
    width: 9px;
    content: '';
    background-image: url('data:image/svg+xml;utf8,<svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="8" height="8" rx="1" fill="%23EF4056" /></svg>');
    right: -18px;
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
