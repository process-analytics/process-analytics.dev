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

import { Box, Flex, Image, Text } from 'rebass/styled-components';

import { Link as GatsbyLink } from 'gatsby';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledContainer, StyledNavbar } from './Header';
import { header } from '../../content/HeaderContent';
import { ButtonWithExternalLink } from './Button';
import colors from '../colors.json';

type PageHeaderProps = {
  displayDemoButton?: boolean;
};

export const PageHeader = ({
  displayDemoButton = true,
}: PageHeaderProps): JSX.Element => {
  const { logo } = header;

  return (
    <header>
      <StyledNavbar>
        <StyledContainer>
          <GatsbyLink
            to="/"
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
              marginRight: '50px',
              height: 'calc(100% - 15px)',
            }}
          >
            <Image
              src={logo.src}
              height="100%"
              width="100%"
              margin="auto"
              alt="Process Analytics Logo"
              css={{ cursor: 'pointer' }}
            />
          </GatsbyLink>
          <Flex
            width="70vw"
            justifyContent="space-evenly"
            textAlign="center"
            mr="50px"
            overflow="visible"
            height="auto"
          ></Flex>
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
        </StyledContainer>
      </StyledNavbar>
    </header>
  );
};
