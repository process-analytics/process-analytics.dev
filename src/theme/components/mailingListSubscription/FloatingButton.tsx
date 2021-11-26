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
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Overlay } from './Overlay';
import { Form } from './Form';
import colors from '../../colors.json';

const FormContainer = styled.div`
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
    `cursor: auto;
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.17);
     border-radius: 0;
     width: 70%;
     height: 610px;
     max-width: 610px;
     padding: 0;
     transition: all 0.2s, max-width 0.2s $easer 0.1s, height 0.3s ease 0.25s;
     `};
`;

const Icon = styled.span`
  position: absolute;
  top: 18px;
  left: 19px;
  opacity: ${(props: ExpandProps) => (props.open ? '0' : '1')};
  transition: opacity 0.3s ease-in-out;
`;

export interface ExpandProps {
  open: boolean;
  submitted?: boolean;
}

export const FloatingButton = ({
  children,
}: {
  children: JSX.Element[];
  // ExpandProps
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    <FormContainer open={open} onClick={() => setOpen(true)}>
      <Icon open={open}>
        <FontAwesomeIcon icon={faPen} />
      </Icon>
      {/*      {childrenWithProps}*/}

      <Overlay open={open} onClick={() => setOpen(false)} />
      <Form open={open} />
    </FormContainer>
  );
};
