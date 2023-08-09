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
import React, { FC, useState } from 'react';

import { Box, styled } from '@mui/material';

import { faEnvelope, faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { ContainerContent } from './ContainerContent';
import { Icon } from './Icon';
import { Overlay } from './Overlay';

import { MEDIA_QUERY_MEDIUM } from '../../helper';

type FormContainerProps = {
  open: boolean;
};

export const MailingListSubscription: FC = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeForm = (): void => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <Overlay open={open} submitted={submitted} onClick={() => closeForm()} />
      <FormContainer open={open} flexDirection={'column'}>
        {!open && (
          <Icon
            withWiggleAnimation={true}
            icon={faEnvelope}
            onClick={() => setOpen(true)}
          />
        )}
        {open && (
          <>
            <Icon
              withWiggleAnimation={false}
              icon={faWindowClose}
              onClick={() => closeForm()}
            />
            <ContainerContent
              open={open}
              submitted={submitted}
              onSubmit={(submitted: boolean) => {
                setSubmitted(submitted);
              }}
            />
          </>
        )}
      </FormContainer>
    </>
  );
};

const FormContainer = styled(Box)<FormContainerProps>`
  display: flex;
  position: fixed;
  bottom: 7vh;
  right: 2vw;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border-radius: 50%;
  width: 3.5rem;
  max-width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  border: none;
  cursor: pointer;
  z-index: 901;
  transition:
    all 0.2s 0.45s,
    height 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0.25s,
    max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0.35s,
    width 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0.35s;

  margin: 0 auto;
  overflow: hidden;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  ${props =>
    props.open &&
    `background-color: ${props.theme.palette.secondary.main};
     cursor: auto;
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.17);
     border-radius: 0;
     width: 30vw;
     max-width: 610px;
     height: auto;
     padding: 0;
     transition: all 0.2s, max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, height 0.3s ease 0.25s;
     `};

  ${MEDIA_QUERY_MEDIUM} {
    bottom: 8vh;
    right: 3vw;

    ${props =>
      props.open &&
      `width: 100vw;
      max-width: 100vw;
      height: 100vh;
      overflow: initial;
      overflow-x: hidden;
      bottom: 0;
      right:0;
   `};
  }
`;
