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
import { Slide } from 'react-awesome-reveal';
import { Link } from './Link';
import { MEDIA_QUERY_SMALL, SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';

type ContainerProps = {
  id?: SECTION;
  children: ReactNode;
  Background?: () => JSX.Element;
};

const Container = ({
  id,
  children,
  Background = DefaultBackground,
}: ContainerProps): JSX.Element => (
  <section id={id && getSectionHref(id)} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </section>
);

type HeaderProps = {
  name: string;
  icon?: string;
  label?: string;
};

const Header = ({ name, icon, label }: HeaderProps): JSX.Element => (
  <Slide direction="left" triggerOnce>
    <Heading color="text" mb={4}>
      <Link selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </Link>
    </Heading>
  </Slide>
);

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  ${MEDIA_QUERY_SMALL} {
    padding: 2em 1em;
  }
`;

const DefaultBackground = (): JSX.Element => <div />;

export default {
  Container,
  Header,
};
