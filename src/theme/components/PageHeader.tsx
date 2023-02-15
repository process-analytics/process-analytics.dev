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
import Headroom from 'react-headroom';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { header } from '../../content/HeaderContent';
import colors from '../colors.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { ButtonWithExternalLink } from './Button';

type PageHeaderProps = {
  displayDemoButton?: boolean;
};

const PageHeader = ({
  displayDemoButton = true,
}: PageHeaderProps): JSX.Element => {
  const { logo } = header;

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <GatsbyLink
          to="/"
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: '50px',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          <Image
            src={logo.src}
            height={['60px', '80px']}
            width={['60px', '80px']}
            margin="auto"
            alt="Process Analytics Logo"
          />
        </GatsbyLink>
        {displayDemoButton && (
          <Box>
            <ButtonWithExternalLink
              href="https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html"
              target="_blank"
              color={colors.secondary}
              backgroundColor={colors.background}
            >
              <Box
                marginRight="15px"
                backgroundColor={colors.secondary}
                width="2.875rem"
                height="2.875rem"
              >
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  color={colors.background}
                  size="xl"
                />
              </Box>
              <Text padding="0px 15px">Demo</Text>
            </ButtonWithExternalLink>
          </Box>
        )}
      </Flex>
    </StyledHeadroom>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  position: absolute;
  width: 100%;
`;

export default PageHeader;
