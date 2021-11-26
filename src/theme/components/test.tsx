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
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 50px;
  width: ${(props: Props) => (props.open ? '130px' : '50px')};
  transition: width 0.3s ease-in-out;
  border-radius: 25px;
  background: black;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border: none;
  cursor: pointer;
  z-index: 10;
`;

const Feedback = styled.span`
  position: absolute;
  color: white;
  top: 18px;
  left: 19px;
  font-weight: 900;
  opacity: ${(props: Props) => (props.open ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;
`;
const Icon = styled.span`
  position: absolute;
  top: 18px;
  left: 19px;
  opacity: ${(props: Props) => (props.open ? '0' : '1')};
  transition: opacity 0.3s ease-in-out;
`;
const InvisibleButton = styled.div`
  position: absolute;
  top: -10px;
  right: 0px;
  height: 70px;
  width: 100px;
  z-index: 1000;
`;

interface Props {
  open: boolean;
}

export function FloatingButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Button open={open} onClick={() => setOpen(true)}>
      {open && (
        <InvisibleButton
          onClick={() => alert('Clickthrough for feedback')}
        ></InvisibleButton>
      )}
      <Icon open={open}>
        <FontAwesomeIcon icon={faCommentDots} />
      </Icon>
      <Feedback open={open}>Give feedback</Feedback>
    </Button>
  );
}
