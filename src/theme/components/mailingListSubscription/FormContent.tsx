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
import React, { BaseSyntheticEvent, Component, useState } from 'react';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import { Heading, Text } from 'rebass/styled-components';
import colors from '../../colors.json';

interface SubscriptionProps extends SubmitProps {
  email: string;
  response?: MailchimpResponse;
}

interface SubmitProps {
  error: boolean;
  submitted: boolean;
}

export class FormContent extends Component {
  state: SubscriptionProps = {
    email: '',
    error: false,
    submitted: false,
  };

  _handleSubmit = async (e: BaseSyntheticEvent): Promise<boolean> => {
    this.setState({ error: false });
    e.preventDefault();

    /*    form.find('.input').each(function () {
      if ($(this).val() == '') {
        $(this).addClass('form-error');
        $(this).select();
        this.setState({ error: true });
        return false;
      } else if ($(this).hasClass('email') && !isValidEmail($(this).val())) {
        $(this).addClass('form-error');
        $(this).select();
         this.setState({ error: true });
        return false;
      }
    });*/

    if (!this.state.email || !this._isValidEmail(this.state.email)) {
      this.setState({ error: true });
      return false;
    }

    if (!this.state.error) {
      const response = await addToMailchimp(this.state.email);
      this.setState({ response, submitted: true });
      /* setTimeout(function () {
        $(form).trigger('reset');
      }, 1000);*/
      return true;
    }
    return false;
  };

  _handleEmailChange = (event: BaseSyntheticEvent): void => {
    this.setState({ email: event.currentTarget.value });
  };

  _isValidEmail = (email: string): boolean => {
    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
  };

  render(): JSX.Element {
    /*    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);*/
    return (
      <>
        <FormHeader
          id="form-head"
          submitted={this.state.submitted}
          error={this.state.error}
        >
          {!this.state.submitted && (
            <>
              <FormTitle as="h1">Sign up</FormTitle>
              <Text>Receive our newsletter every month</Text>
            </>
          )}
          {this.state.submitted && (
            <>
              <FormTitle as="h1">Thanks!</FormTitle>
              <Text>We'll be in touch ASAP</Text>
            </>
          )}
        </FormHeader>
        {!this.state.submitted && (
          <Form onSubmit={this._handleSubmit}>
            <FormInput
              className="email"
              name="email"
              placeholder="Email address"
              type="text"
              autoComplete="email"
              onChange={this._handleEmailChange}
              submitted={this.state.submitted}
              error={this.state.error}
            />
            <FormInput
              as={SubmitButton}
              type="submit"
              value="Subscribe"
              bg={colors.background}
              submitted={this.state.submitted}
            />
          </Form>
        )}
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

const FormTitle = styled(Heading)`
  color: ${colors.background};

  @media (max-width: 600px) {
    font-size: 300%;
  }
`;

const Form = styled.form`
  color: ${colors.secondary};
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

  ${(props: SubmitProps) =>
    props.submitted &&
    `
    transform: translateY(250%);
    display: block;
  `}
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

  color: ${colors.background};

  transition: transform 0s 1s;

  ${(props: SubmitProps) =>
    props.error &&
    `animation: error 0.8s ease;
    background: rgba(0, 0, 0, 0.7);
    
    @keyframes error {
  0%, 100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-6px);
            transform: translateX(-6px);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(6px);
            transform: translateX(6px);
  }
  @-webkit-keyframes error {
  0%, 100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-6px);
            transform: translateX(-6px);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(6px);
            transform: translateX(6px);
  }
}
}
 `};

  ${(props: SubmitProps) =>
    props.submitted &&
    `transform: translateX(150%);
    opacity: 0;
    transition: all 0.5s, transform 0.4s $easer 0s;

    @for $i from 1 to ($formElements + 1) {
      &:nth-child(#{$i}) {
        transition-delay: #{$i / 10}s;
      }
    }
 `};

  -webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
`;

const SubmitButton = styled(FormInput)`
  background-color: ${colors.background};
  color: ${colors.secondary};
  font-size: 120%;
  height: 80px;
  box-shadow: 0 5px rgba(0, 0, 0, 0.5);
  transition: all 0.1s, transform 0s 0.6s;

  &:active {
    margin-top: 15px;
    box-shadow: 0 0 rgba(0, 0, 0, 0.5);
  }
`;

/*

::-webkit-input-placeholder {/!* Safari, Chrome and Opera *!/
  color: rgba(255,255,255,0.8);
  font-size: 90%;
}/!* Firefox 18- *!/:-moz-placeholder {
  color: rgba(255,255,255,0.8);
  font-size: 90%;
}/!* Firefox 19+ *!/::-moz-placeholder {
  color: rgba(255,255,255,0.8);
  font-size: 90%;
}/!* IE 10+ *!/:-ms-input-placeholder {
  color: rgba(255,255,255,0.8);
  font-size: 90%;
}/!* Edge *!/::-ms-input-placeholder {
  color: rgba(255,255,255,0.8);
  font-size: 90%;
}/!* Default *!/:placeholder-shown {
  color: rgba(255,255,255,0.8);
  font-size: 90%;
}
*/
