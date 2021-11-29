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
import { EmailInput, ForwardedEmailInput, SubmitButton } from './form-elements';
import React, {
  BaseSyntheticEvent,
  MutableRefObject,
  useRef,
  useState,
} from 'react';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import { FormContentProps } from './FormContent';

export interface FormProps extends FormContentProps {
  onSubmit: (response: MailchimpResponse, submitted: boolean) => void;
}

export const Form = (props: FormProps) => {
  const childRef: MutableRefObject<ForwardedEmailInput | null> = useRef(null);

  const handleSubmit = async (e: BaseSyntheticEvent): Promise<boolean> => {
    e.preventDefault();

    if (!childRef.current || !childRef.current.isValid()) {
      return false;
    }

    const response = await addToMailchimp(childRef.current.getEmail());
    props.onSubmit(response, true);

    /* setTimeout(function () {
                  $(form).trigger('reset');
                }, 1000);*/
    return true;
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <EmailInput ref={childRef} submitted={props.submitted} />
      <SubmitButton submitted={props.submitted} />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  color: ${colors.secondary};
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  margin-bottom: 10px;
  box-sizing: border-box;
  text-align: left;
`;
