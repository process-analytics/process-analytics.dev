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
import React, { BaseSyntheticEvent } from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';
import { Input } from '@rebass/forms';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

export class MailingListSubscription extends React.Component {
  state: { email: string; response?: MailchimpResponse } = { email: '' };

  _handleSubmit = async (e: BaseSyntheticEvent): Promise<void> => {
    e.preventDefault();
    const response = await addToMailchimp(this.state.email);
    this.setState({ response });
  };

  _handleEmailChange = (event: BaseSyntheticEvent): void => {
    this.setState({ email: event.currentTarget.value });
  };

  render(): JSX.Element {
    return (
      /*    this.state.result === "success" ? (
        <div>SUCCESS</div>
    ) : this.state.result === "error" ? (
        <div>ERROR</div>
    ) : */
      <Flex flexDirection="row" bg="#f2f2f2" color="#2a2a2a" padding="2rem">
        <Box>
          <Heading as="h2" marginTop="0" marginBottom="1rem" textAlign="center">
            Join our newsletter
          </Heading>
          <Text>
            Subscribe to our newsletter to receive the features and articles
            every month.
          </Text>
          <Text
            className="message"
            dangerouslySetInnerHTML={{ __html: this.state.response?.msg ?? '' }}
          />
        </Box>

        <Box as="form" onSubmit={this._handleSubmit} py={3}>
          <Flex flexDirection="row" padding="1rem 1.5rem">
            <Input
              placeholder="Email address"
              name="email"
              type="text"
              autoComplete="email"
              onChange={this._handleEmailChange}
              color="#2a2a2a"
              backgroundColor="White"
              style={{ border: 'none' }}
            />
            <SubmitButton type="submit">Subscribe</SubmitButton>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

const SubmitButton = styled(Button)`
  display: inline-block;

  border: none;
  background-color: #dd0505;
  color: white;
  letter-spacing: 1px;
  transition: all 0.1s linear;

  &:hover {
    cursor: pointer;
    background: darken(#dd0505, 15%);
  }
`;
