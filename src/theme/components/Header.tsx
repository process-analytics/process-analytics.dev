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
import { Box, Flex, Image, Button } from 'rebass/styled-components';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { LinkInButton } from './Link';
import { capitalize } from '../utils/string';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';
import { header } from '../../content/HeaderContent';
import colors from '../colors.json';

const Header = (): JSX.Element => {
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
          to={`#${getSectionHref(SECTION.home)}`}
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
        <Flex mr={[0, 3, 5]}>
          {Object.keys(SECTION)
            .filter(id => id !== 'home')
            .map(id => (
              <Box
                key={id}
                ml={[2, 3]}
                mt="auto"
                mb="auto"
                color="background"
                fontSize={[2, 3]}
              >
                <GatsbyLink
                  to={`#${id}`}
                  tabIndex={0}
                  style={{
                    padding: '0 15px',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {capitalize(id)}
                </GatsbyLink>
              </Box>
            ))}
          <Box ml={[2, 3]} fontSize={[2, 3]}>
            <Button
              as={LinkInButton}
              href="https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html"
              target="_blank"
              style={{
                color: colors.background,
                background: colors.secondary,
              }}
            >
              Demo
            </Button>
          </Box>
        </Flex>
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

export default Header;
