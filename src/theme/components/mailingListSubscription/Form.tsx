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
import { ExpandProps } from './FloatingButton';
import colors from '../../colors.json';

/*
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
  opacity: ${(props: ExpandProps) => (props.open ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;
  z-index: 1000;
`;
*/

const FormContainer = styled.div`
  cursor: pointer;
  color: ${colors.primary};
  z-index: 1000;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 5vh;
  background-color: ${colors.background};
  overflow: hidden;
  border-radius: 50%;
  width: 60px;
  max-width: 60px;
  height: 60px;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  transition: all 0.2s 0.45s, height 0.2s $easer 0.25s,
    max-width 0.2s $easer 0.35s, width 0.2s $easer 0.35s;

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

export const Form = ({ open }: ExpandProps): JSX.Element => {
  return open ? <FormContainer open></FormContainer> : <></>;
};
