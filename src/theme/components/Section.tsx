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
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Heading } from 'rebass/styled-components';
import { MEDIA_QUERY_SMALL, SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';
import { Link } from 'gatsby';

type SectionProps = {
  id?: SECTION;
  children: ReactNode;
  justifyContent?: string;
};

export const Section = ({
  id,
  children,
  justifyContent = 'center',
}: SectionProps): JSX.Element => (
  <StyledSection id={id && getSectionHref(id)}>
    <SectionContainer justifyContent={justifyContent}>
      {children}
    </SectionContainer>
  </StyledSection>
);

const StyledSection = styled.section`
  position: relative;
  display: block;

  text {
    padding: 45px 0;
  }

  &:nth-of-type(even) {
    position: relative;
    background-color: #dbeffe;
  }

  &:nth-of-type(even):not(:last-of-type) {
    border-top-left-radius: 300px;
    border-bottom-left-radius: 300px;
  }

  &:nth-of-type(even) > ::before {
    background-color: white;
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:nth-of-type(odd) {
    position: relative;
    background-color: white;
  }

  &:nth-of-type(odd):not(:first-of-type) {
    border-bottom-right-radius: 300px;
    border-top-right-radius: 300px;
  }

  &:nth-of-type(odd) > ::before {
    background-color: #dbeffe;
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

type SectionContainerProps = {
  justifyContent?: string;
};
const SectionContainer = styled.div<SectionContainerProps>`
  min-width: 20rem;
  max-width: 87.5vw;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: 48px 16px;
  scroll-behavior: smooth;

  ${MEDIA_QUERY_SMALL} {
    padding: 2em 1em;
  }
`;

type HeaderProps = {
  name: string;
  icon?: string;
  label?: string;
};
export const SectionHeader = ({
  name,
  icon,
  label,
}: HeaderProps): JSX.Element => (
  <Heading
    color="text"
    fontWeight="700"
    fontSize="30px"
    margin="27px 65px"
    textAlign="center"
  >
    <Link
      to={`/#${name.toLowerCase()}`}
      style={{ color: 'inherit', cursor: 'default' }}
    >
      {name}
      {icon && (
        <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
          {icon}
        </span>
      )}
    </Link>
  </Heading>
);
