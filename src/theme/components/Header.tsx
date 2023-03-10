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

import { Navbar, MKBox } from './material-kit';

import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';

import { Link as GatsbyLink } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import { ButtonWithExternalLink } from './Button';

import { capitalize } from '../utils/string';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';
import { header } from '../../content/HeaderContent';
import colors from '../colors.json';
import { routes } from '../../content/HeaderRoutes';

export const Header = (): JSX.Element => {
  const { logo } = header;
  return (
    <MKBox bgColor="white" shadow="sm" py={0.25}>
      <Navbar
        routes={routes}
        action={{
          type: 'external',
          route:
            'https://github.com/process-analytics/process-analytics.dev/pulls',
          label: 'pr',
          color: 'info',
        }}
        isTransparent
        relative
        center
      />
    </MKBox>
  );
};
export const Header2 = (): JSX.Element => {
  const { logo } = header;

  return (
    <header>
      <StyledNavbar>
        <StyledContainer>
          <GatsbyLink
            to={`#${getSectionHref(SECTION.home)}`}
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
          >
            {Object.keys(SECTION)
              .filter(key => key !== 'home')
              .map(key => (
                <NavMenu name={key} />
              ))}
          </Flex>
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
        </StyledContainer>
      </StyledNavbar>
    </header>
  );
};

export const StyledNavbar = styled.nav`
  display: block;
  min-height: 3.125rem;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
  position: fixed;
  box-shadow: rgba(0, 0, 5, 0.3) 0 0 5px;
  background-color: #ffffff;
  margin-bottom: 0;
  border: 1px solid transparent;
  border-radius: 0;
  border-width: 0 0 1px;
  border-color: #e7e7e7;
  border-bottom: none;
  border-top: none;
  &::before,
  &::after {
    display: table;
    content: ' ';
  }
`;

export const StyledContainer = styled(Flex)`
  height: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  padding-left: 0;
  padding-right: 0;
  margin-right: 50px;
  margin-left: 50px;
  &::before,
  &::after {
    display: table;
    content: ' ';
  }
`;

export const StyledNavMenu = styled(Box)`
  font-weight: normal;
  font-size: 18px;
  margin: auto;
  &:hover {
    font-weight: bold;
  }
`;

const NavMenu = ({ name }: { name: string }): JSX.Element => (
  <StyledNavMenu key={name}>
    <GatsbyLink
      to={`#${name}`}
      tabIndex={0}
      style={{
        padding: '0 15px',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {capitalize(name)}
    </GatsbyLink>
  </StyledNavMenu>
);
