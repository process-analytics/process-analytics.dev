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
import React, { FC, PropsWithChildren } from 'react';

import { PaletteColorKey, styled } from '@mui/material';

import { Link } from 'gatsby';

import { MKTypography } from '.';

import { MEDIA_QUERY_SMALL, SECTION, getSectionHref } from '../helper';

type SectionContainerProps = {
  justifyContent: string;
};

type SectionProps = Partial<StyledSectionProps> &
  Partial<SectionContainerProps> & {
    id?: SECTION;
  };

type SectionHeaderProps = {
  name: SECTION;
  icon?: string;
  label?: string;
};

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  id,
  backgroundColor = 'primaryLight',
  justifyContent = 'center',
}) => (
  <StyledSection
    id={id && getSectionHref(id)}
    backgroundColor={backgroundColor}
  >
    <SectionContainer justifyContent={justifyContent}>
      {children}
    </SectionContainer>
  </StyledSection>
);

export const SectionWithTitle: FC<
  PropsWithChildren<SectionProps> & Required<Pick<SectionProps, 'id'>>
> = ({ id, children, ...rest }) => (
  <Section id={id} {...rest}>
    <SectionHeader name={id} />
    {children}
  </Section>
);

type StyledSectionProps = {
  backgroundColor: PaletteColorKey;
};

const StyledSection = styled('section')<StyledSectionProps>`
  position: relative;
  display: block;

  border-radius: 0;

  @media only screen and (min-width: 61.188rem) {
    &:first-of-type {
      margin-top: 6.25rem;
    }

    &:nth-of-type(even):not(:last-of-type) {
      border-top-left-radius: 18.75rem;
      border-bottom-left-radius: 18.75rem;
    }

    &:nth-of-type(odd):not(:first-of-type) {
      border-bottom-right-radius: 18.75rem;
      border-top-right-radius: 18.75rem;
    }
  }

  text {
    padding: 2.813rem 0;
  }

  &:nth-of-type(even) {
    position: relative;
    background-color: ${({ theme, backgroundColor }) =>
      theme.palette[backgroundColor].main};
  }
  &:nth-of-type(even)::before {
    background-color: white;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:nth-of-type(odd) {
    position: relative;
    background-color: white;
  }
  &:nth-of-type(odd)::before {
    background-color: ${({ theme, backgroundColor }) =>
      theme.palette[backgroundColor].main};
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const SectionHeader: FC<SectionHeaderProps> = ({ name, icon, label }) => (
  <MKTypography variant="h2" color="text" mb={4}>
    // color="text" fontWeight="700" fontSize="1.875rem" margin="30px 65px"
    textAlign="center"
    <Link
      to={`#${getSectionHref(name)}`}
      style={{ color: 'inherit', cursor: 'default' }}
    >
      {name}
      {icon && (
        <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
          {icon}
        </span>
      )}
    </Link>
  </MKTypography>
);

const SectionContainer = styled('div')<SectionContainerProps>`
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
