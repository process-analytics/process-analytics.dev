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
import styled from 'styled-components';
import colors from '../../colors.json';
import React, { BaseSyntheticEvent, useState } from 'react';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import { ContainerContentProps } from './ContainerContent';
import { Button } from 'rebass/styled-components';

export interface FormProps extends ContainerContentProps {
  onSubmit: (response: MailchimpResponse, submitted: boolean) => void;
}

interface InputProps extends ContainerContentProps {
  error?: boolean;
}

export const Form = (props: FormProps): JSX.Element => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: BaseSyntheticEvent): Promise<void> => {
    e.preventDefault();

    if (!isEmailValid()) {
      setError(true);
      return;
    }

    const response = await addToMailchimp(email);
    const failed = response.result === 'error';
    setError(failed);
    props.onSubmit(response, !failed);
  };

  const isEmailValid = (): boolean => {
    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
  };

  const handleChange = (event: BaseSyntheticEvent): void => {
    setError(false);
    setEmail(event.currentTarget.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        name="email"
        placeholder="Email address"
        type="text"
        autoComplete="email"
        onChange={handleChange}
        submitted={props.submitted}
        error={error}
        required
      />
      <StyledSubmitButton
        value="Subscribe"
        as={StyledInput}
        type="submit"
        bg={colors.background}
        submitted={props.submitted}
      />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  color: ${colors.secondary};
  margin-bottom: 10px;
  box-sizing: border-box;
  text-align: left;
`;

const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0.2);
  display: block;
  height: 50px;
  width: 100%;
  margin: 0.6rem 0;
  padding: 0 0.6rem;
  border-width: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: none;
  transform: translateX(0);

  color: ${colors.background};

  transition: transform 0s 1s;

  ${(props: InputProps) =>
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
 `};

  ${(props: InputProps) =>
    props.submitted &&
    `transform: translateX(150%);
    opacity: 0;
    transition: all 0.5s, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s;

    @for $i from 1 to 3 {
      &:nth-child(#{$i}) {
        transition-delay: #{$i / 10}s;
      }
    }
 `};

  -webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
`;

const StyledSubmitButton = styled(Button)`
  background-color: ${colors.background};
  color: ${colors.secondary};
  font-size: 120%;
  height: 65px;
  box-shadow: 0 5px rgba(0, 0, 0, 0.5);
  transition: all 0.1s, transform 0s 0.6s;

  /*  &:active {
    margin-top: 15px;
    box-shadow: 0 0 rgba(0, 0, 0, 0.5);
  }*/
`;
