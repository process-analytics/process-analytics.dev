import { Box } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from '../MarkdownComponents';
import styled from 'styled-components';
import React from 'react';
import { BoxProps } from 'rebass';

const MDXPanel = ({
  mdx,
  width,
}: BoxProps & {
  mdx: JSX.Element;
}): JSX.Element => (
  <Box {...{ width }} px={[1, 2, 4]} mt={2}>
    <Fade direction="down" triggerOnce>
      <CustomBox>
        <MDXProvider components={mdxComponents}>{mdx}</MDXProvider>
      </CustomBox>
    </Fade>
  </Box>
);

const CustomBox = styled.div`
  font-size: large;
  padding-bottom: 1em;
  line-height: 2em;

  @media (max-width: 600px) {
    line-height: 1.5em;
    font-size: medium;
  }
`;

export default MDXPanel;
