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
import React from 'react';
import styled from 'styled-components';

const InvisibleButton = styled.div`
  position: absolute;
  top: -10px;
  right: 0px;
  height: 70px;
  width: 100px;
  z-index: 1000;
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

interface Props {
  open: boolean;
}

export const Form = ({ open }: Props): JSX.Element => {
  return (
    <>
      {open && (
        <InvisibleButton
          onClick={() => alert('Clickthrough for feedback')}
        ></InvisibleButton>
      )}
      <Feedback open={open}>Give feedback</Feedback>
    </>
  );
};
