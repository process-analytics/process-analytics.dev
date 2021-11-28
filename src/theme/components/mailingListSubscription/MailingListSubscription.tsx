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
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Overlay } from './Overlay';
import { FormContent } from './FormContent';
import colors from '../../colors.json';
import { Box, Flex } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';

const FormContainer = styled(Flex)`
  position: fixed;
  bottom: 2.5vh;
  right: 2.5vh;
  background-color: ${colors.secondary};
  color: ${colors.background};
  border-radius: 50%;
  width: 3.5rem;
  max-width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s 0.45s, height 0.2s $easer 0.25s,
    max-width 0.2s $easer 0.35s, width 0.2s $easer 0.35s;

  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${(props: ExpandProps) =>
    props.open &&
    `background-color: ${colors.secondary};
     cursor: auto;
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.17);
     border-radius: 0;
     width: 70%;
     max-width: 610px;
     height: 40%;
     padding: 0;
     transition: all 0.2s, max-width 0.2s $easer 0.1s, height 0.3s ease 0.25s;
     `};

  @media (max-width: 600px) {
    ${(props: ExpandProps) =>
      props.open &&
      `
      height: 100%;
      width: 100%;
      max-width: 100%;
      overflow: initial;
      overflow-x: hidden;
      bottom: 0;
   `};
  }
`;

const Icon = styled(Box)`
  cursor: pointer;
  margin: auto;
  opacity: ${(props: ExpandProps) => (props.open ? '0' : '1')};
  transition: opacity 0.3s ease-in-out;
`;

const OpenIcon = styled(Icon)`
  &:hover {
    -webkit-animation: wiggle 0.1s linear infinite;
    animation: wiggle 0.1s linear infinite;
  }
  @keyframes wiggle {
    0%,
    100% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    50% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
  }
  @-webkit-keyframes wiggle {
    0%,
    100% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    50% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
  }

  @media (max-width: 600px) {
    :hover {
      animation: none;
    }
  }
`;

export interface ExpandProps {
  open: boolean;
  // submitted?: boolean;
}

export const MailingListSubscription = ({
  children,
}: {
  children?: JSX.Element[];
  // ExpandProps
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  /*  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [open]);*/

  /*  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { open });
    }
    return child;
  });*/

  return (
    <>
      {/*<Overlay open={open} onClick={() => setOpen(false)} />*/}
      <FormContainer open={open} flexDirection={'column'}>
        {!open && (
          <OpenIcon open={open} onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faPen} />
          </OpenIcon>
        )}
        {open && (
          <>
            <Icon
              open={!open}
              onClick={() => setOpen(false)}
              css={{ marginTop: '1rem', marginBottom: '1rem' }}
            >
              <FontAwesomeIcon icon={faWindowClose} />
            </Icon>
            <Fade>
              <Form open={open} />
            </Fade>
          </>
        )}
        {/*      {childrenWithProps}*/}
      </FormContainer>
    </>
  );
};

const Form = styled(FormContent)`
  // font-family: $font-stack;
  transform: translateY(150%);
  width: 100%;
  opacity: 0;
  text-align: left;
  transition: transform 0.2s $easer, opacity 0.2s 0.2s;

  ${(props: ExpandProps) =>
    props.open &&
    `
    transform: translateY(0px);
    opacity: 1;

    transition: transform 0.7s $easer 0.3s, opacity 0s;
  `}
`;
