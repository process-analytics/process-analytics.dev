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
import React from 'react';
import { Box, Flex, Image } from 'rebass/styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { StyledContainer, StyledNavbar } from './Header';

import { header } from '../../content/HeaderContent';
import { ButtonWithExternalLink } from './Button';
import colors from '../colors.json';

type PageHeaderProps = {
  displayDemoButton?: boolean;
};

const PageHeader = ({
  displayDemoButton = true,
}: PageHeaderProps): JSX.Element => {
  const { logo } = header;

  return (
    <header>
      <StyledNavbar>
        <StyledContainer>
          <GatsbyLink to="/" style={{ marginRight: '50px' }}>
            <Image
              src={logo.src}
              height={['60px', '100px']}
              width={['60px', '100px']}
              margin="auto"
              alt="Process Analytics Logo"
              css={{ cursor: 'pointer' }}
            />
          </GatsbyLink>
          {displayDemoButton && (
            <Box fontSize={[2, 3]}>
              <ButtonWithExternalLink
                href="https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html"
                target="_blank"
                color={colors.background}
                backgroundColor={colors.secondary}
              >
                Demo
              </ButtonWithExternalLink>
            </Box>
          )}
        </StyledContainer>
      </StyledNavbar>
    </header>
  );
};

export default PageHeader;
