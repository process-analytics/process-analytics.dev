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
import React, { FC } from 'react';

import { Box } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import { MDXProvider } from '@mdx-js/react';
import { StyledMDXComponents } from '../MarkdownComponents';

type MDXPanelProps = {
  mdx: JSX.Element;
  isFullPage: boolean;
};

export const MDXPanel: FC<MDXPanelProps> = ({ mdx, isFullPage }) => (
  <Box width={isFullPage ? [1, 1, 1] : [1, 1, 2 / 3]} px={[1, 2, 4]} mt={2}>
    <Fade direction="down" triggerOnce>
      <Box
        fontSize={['medium', 'medium', 'large']}
        lineHeight={['1.5rem', '1.5rem', '2rem']}
      >
        <MDXProvider components={StyledMDXComponents}>{mdx}</MDXProvider>
      </Box>
    </Fade>
  </Box>
);
