import * as React from 'react';
import { Box, Image, Text } from 'rebass/styled-components';
import Layout from '../theme/components/Layout';
import Section from '../theme/components/Section';
import Triangle from '../theme/components/Triangle';
import { Link } from 'gatsby';
import Img from '../images/404.png';

const NotFoundPage = (): JSX.Element => (
  <Layout title="Page not found">
    <Section.Container Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Image
          src={Img}
          marginLeft={['25%', 0]}
          width={['50%', '100%']}
          alt="404 not found"
        />
        <Text
          fontSize={['1rem', '1.5rem', '2rem']}
          fontWeight="bold"
          color="secondary"
        >
          Oops, looks like the page cannot be found...
          <br />
          <Link to="/">Go back to home</Link>
        </Text>
      </Box>
    </Section.Container>
  </Layout>
);

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="secondary"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />
  </>
);

export default NotFoundPage;
