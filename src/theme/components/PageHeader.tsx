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
import {
  Box,
  Link as RebassLink,
  Flex,
  Image,
  Button,
} from 'rebass/styled-components';
import styled from 'styled-components';
import { header } from '../../content/HeaderContent';
import { PAGE, SECTION } from '../utils/constants';
import Link from './Link';
import { capitalize } from '../utils/string';

const PageHeader = (): JSX.Element => {
  const { logo } = header;

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <RebassLink href="/" variant="empty">
          <Flex justifyContent="center">
            <Image
              src={logo.src}
              height={['60px', '80px']}
              width={['60px', '80px']}
              alt="Process Analytics Logo"
              p={2}
              css={{ borderRadius: '20px', cursor: 'pointer' }}
            />
          </Flex>
        </RebassLink>
        <Flex mr={[0, 3, 5]}>
          {Object.keys(PAGE)
            .filter(id => id !== 'home' && id !== 'notFound')
            .map(id => (
              <Box
                key={id}
                ml={[2, 3]}
                mt="auto"
                mb="auto"
                color="background"
                fontSize={[2, 3]}
              >
                <Link href={`#${id}`} tabIndex={0}>
                  {capitalize(id)}
                </Link>
              </Box>
            ))}
          <Box ml={[2, 3]} fontSize={[2, 3]}>
            <Button variant="secondary">
              <RebassLink
                href="https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html"
                target="_blank"
                color="inherit"
                style={{ textDecorationLine: 'inherit' }}
              >
                Demo
              </RebassLink>
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

export default PageHeader;
