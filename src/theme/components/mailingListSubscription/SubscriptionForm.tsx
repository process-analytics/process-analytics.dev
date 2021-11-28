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
import React, { BaseSyntheticEvent, Component } from 'react';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';
import { Input, Select } from '@rebass/forms';

export class SubscriptionForm extends Component {
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
      <>
        <FormHeader id="form-head">
          <FormTitle className="pre">Get in touch</FormTitle>
          <Text className="pre">Good choice...</Text>
          <FormTitle className="post">Thanks!</FormTitle>
          <Text className="post">I'll be in touch ASAP</Text>
        </FormHeader>
        <Form>
          <FormInput
            className="input name"
            name="user_name"
            placeholder="Your name please"
            type="text"
          />
          <FormInput
            as={Button}
            className="input submit"
            type="submit"
            value="Send Message"
          />
        </Form>
      </>
    );
    {
      /*        <Flex
          flexDirection="row"
          bg="#f2f2f2"
          color="#2a2a2a"
          padding="2rem"
          flex="auto"
        >
          <Heading as="h2">Receive our newsletter every month</Heading>
          <Box as="form" onSubmit={this._handleSubmit}>
            <Flex flexDirection="row">
              <Input
                placeholder="Email address"
                name="email"
                type="text"
                autoComplete="email"
                onChange={this._handleEmailChange}
                color="#2a2a2a"
                backgroundColor="White"
                style={{ border: 'none' }}
                width="100%"
              />
              <SubmitButton type="submit">Subscribe</SubmitButton>
            </Flex>
          </Box>
        </Flex>*/
    }
  }
}

/*
const SubmitButton = styled(Button)`
  display: inline-block;

  border: none;
  background-color: #dd0505;
  color: white;
  letter-spacing: 1px;
  transition: all 0.1s linear;

  &:hover {
    cursor: pointer;
    background: darken(#dd0505, 15 %);
  }
`;
*/

const FormTitle = styled.h1`
  font-weight: 700;
  color: $col-accent;
  font-weight: 700;
  font-size: 4 em;
  margin: 0;
  padding: 0 20px;
`;

const Form = styled.form`
  color: $col-accent;
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  margin-bottom: 10px;
  box-sizing: border-box;
  text-align: left;
`;

const FormHeader = styled.div`
  font-size: 100%;
  padding: 0;
  margin: 0 20px;
  color: $col-accent;
  text-align: center;
  transition: all 0.8s 0.6s;

  h1,
  p {
    padding: 0;
    margin: 0;
  }
  .pre {
    display: block;
  }
  .post {
    display: none;
  }

  .form-submitted {
    transform: translateY(250%);
    .pre {
      display: none;
    }
    .post {
      display: block;
    }
  }
`;

const FormInput = styled.input`
  background: rgba(0, 0, 0, 0.2);
  display: block;
  height: 50px;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;
  border-width: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: none;
  transform: translateX(0);

  color: $col-accent;

  transition: transform 0s 1s;

  .message {
    resize: none;
    height: 150px;
    padding: 10px;
  }

  .submit {
    background-color: $col-accent;
    color: $col-primary;
    font-size: 120%;
    height: 80px;
    box-shadow: 0 5px rgba(0, 0, 0, 0.5);
    transition: all 0.1s, transform 0s 0.6s;

    &:active {
      margin-top: 15px;
      box-shadow: 0 0 rgba(0, 0, 0, 0.5);
    }
  }

  .form-error {
    animation: error 0.8s ease;
    background: rgba(0, 0, 0, 0.7);
  }

  .form-submitted {
    transform: translateX(150%);
    opacity: 0;
    transition: all 0.5s, transform 0.4s $easer 0s;

    @for $i from 1 to ($formElements + 1) {
      &:nth-child(#{$i}) {
        transition-delay: #{$i / 10}s;
      }
    }
  }

  -webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
`;
