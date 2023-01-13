/**
 * Copyright 2023 Bonitasoft S.A.
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

import { Section } from '../components/Section';
import { ButtonWithInternalLink } from '../components/Link';
import { SECTION } from '../utils/constants';
import colors from '../colors.json';

const Container = styled(Flex)`
  box-shadow: 5px 5px 15px #ebdcdc;
  border-radius: 20px;
  background-color: #fff;
  padding: 30px;
  margin: 30px auto;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100rem;
`;

const Title = styled.h2`
  position: relative;
  color: #002395;
  font-weight: bold;
  font-size: 30px;
`;

const Description = styled.div`
  width: 90%;
  line-height: 24px;
  color: #002395;
  position: relative;
  font-weight: 500;
  font-size: 16.5px;
`;

export const ModelGenerationAppSection = (): JSX.Element => {
  return (
    <Section id={SECTION.modelGenerationApp} justifyContent="space-around">
      <Container minHeight={['13rem']} width={['100%', '100%', '85%']}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          paddingX={[2, 3, '4.25rem']}
          maxWidth="50%"
        >
          <Title>
            Need a tool to generate process diagrams from events logs?
          </Title>
          <Description>
            <p>
              We are developing a free tool that will help you generate and
              visualize your process activities using BPMN Standards.
            </p>
          </Description>
          <ButtonWithInternalLink
            to="/model-generation-application"
            color={colors.background}
            backgroundColor={colors.secondary}
          >
            <FontAwesomeIcon
              icon="arrow-right"
              size="lg"
              style={{ marginRight: '0.5rem' }}
            />
            Get started
          </ButtonWithInternalLink>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          paddingX={[2, 3, '4.25rem']}
          width="50%"
        >
          <FontAwesomeIcon
            icon="database"
            //size="lg"
            style={{
              margin: 'auto',
              color: colors.spicy,
              width: '40%',
              height: 'auto',
            }}
          />
        </Flex>
      </Container>
    </Section>
  );
};
