import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import Library from '../components/Library';
import { SECTION } from '../utils/constants';
import { libraries } from "../../content/LibraryContent";

const Libraries = () => {

  return (
    <Section.Container id={SECTION.libraries} Background={Background}>
      <Section.Header name={SECTION.libraries} icon="💻" label="notebook" />

      <CardContainer minWidth="300px">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {libraries.map((p, i) => (
            <Library {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      position="top-right"
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />

    <Triangle
      color="primary"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Libraries;
