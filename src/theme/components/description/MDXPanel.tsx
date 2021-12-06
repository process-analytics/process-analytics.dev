/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Box } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from '../MarkdownComponents';
import styled from 'styled-components';
import React from 'react';
import { MEDIA_QUERY_MEDIUM } from '../../utils/constants';

const MDXPanel = ({
  mdx,
  isFullPage,
}: {
  mdx: JSX.Element;
  isFullPage: boolean;
}): JSX.Element => {
  const boxProps = isFullPage
    ? {
        width: [1, 1, 1],
      }
    : {
        width: [1, 1, 2 / 3],
      };
  return (
    <Box {...boxProps} px={[1, 2, 4]} mt={2}>
      <Fade direction="down" triggerOnce>
        <CustomBox>
          <MDXProvider components={mdxComponents}>{mdx}</MDXProvider>
        </CustomBox>
      </Fade>
    </Box>
  );
};

const CustomBox = styled.div`
  font-size: large;
  line-height: 2em;

  ${MEDIA_QUERY_MEDIUM} {
    line-height: 1.5em;
    font-size: medium;
  }
`;

export default MDXPanel;
