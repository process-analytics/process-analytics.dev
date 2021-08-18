import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { SECTION } from '../utils/constants';
import { about } from '../../content/AboutContent';
import DescriptionPanel from '../components/description/DescriptionPanel';
import { Box } from 'rebass/styled-components';

const About = (): JSX.Element => {
  return (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about} />

      <Box
        css={{
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {about.map((subsection, index) => (
          <DescriptionPanel key={index} index={index} {...subsection} />
        ))}
      </Box>
    </Section.Container>
  );
};

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
