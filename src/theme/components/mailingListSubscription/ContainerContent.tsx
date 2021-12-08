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
import React, { useState } from 'react';
import { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass/styled-components';
import colors from '../../colors.json';
import { Form } from './Form';
import { ResponseContainer } from './ResponseContainer';
import { MEDIA_QUERY_MEDIUM } from '../../utils/constants';

export interface ContainerContentProps {
  open: boolean;
  submitted: boolean;
  onSubmit: (submitted: boolean) => void;
}

export const ContainerContent = (props: ContainerContentProps): JSX.Element => {
  const [response, setResponse] = useState<MailchimpResponse>();

  return (
    <StyledContent open={props.open} submitted={props.submitted}>
      <Header>
        {!props.submitted && (
          <>
            <Title as="h1">Sign up</Title>
            <Text as="p">Receive our newsletter every month</Text>
          </>
        )}
        {props.submitted && (
          <>
            <Title as="h1">Thanks!</Title>
            <Text as="p">We'll be in touch ASAP</Text>
          </>
        )}
      </Header>
      {response && (
        <ResponseContainer
          error={response.result === 'error'}
          msg={response.msg}
        />
      )}
      {!props.submitted && (
        <Form
          submitted={props.submitted}
          onSubmit={(response: MailchimpResponse, submitted: boolean) => {
            setResponse(response);
            props.onSubmit(submitted);
          }}
        />
      )}
    </StyledContent>
  );
};

interface StyledContentProps {
  open: boolean;
  submitted: boolean;
}
const StyledContent = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  transform: translateY(150%);
  margin: 0 20px 20px 20px;
  opacity: 0;
  text-align: left;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s 0.2s;

  ${(props: StyledContentProps) =>
    props.open &&
    `transform: translateY(0px);
    opacity: 1;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, opacity 0s;`}

  ${(props: StyledContentProps) =>
    props.submitted &&
    `height: 21.6vh;
     justify-content: space-evenly;
     transition: justify-content;`}
`;

const Title = styled(Heading)`
  color: ${colors.background};

  ${MEDIA_QUERY_MEDIUM} {
    font-size: 300%;
  }
`;

const Header = styled.div`
  text-align: center;
  transition: all 0.8s 0.6s;

  & > * {
    margin: 0;
  }
`;
