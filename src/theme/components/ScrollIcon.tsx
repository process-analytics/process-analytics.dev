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
import styled, { keyframes } from 'styled-components';

type Props = {
  href: string;
};

const ScrollIcon = ({ href }: Props): JSX.Element => (
  <ScrollLink href={href} aria-label="Scroll to content">
    <MouseContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130">
      <g fill="none">
        <Mouse width="70" height="118" x="1.5" y="1.5" rx="36" />
        <Scroll cx="36.5" cy="31.5" r="4.5" />
      </g>
    </MouseContainer>
  </ScrollLink>
);

const MouseContainer = styled.svg`
  max-width: 2.5rem;
  width: 100%;
  height: auto;
`;

const ScrollLink = styled.a`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: opacity 0.4s;

  @media only screen and (max-width: 700px) {
    display: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20% {
    transform: translateY(0) scaleY(1);
  }

  10% {
    opacity: 1;
  }

  100% {
    transform: translateY(36px) scaleY(2);
    opacity: 0.01;
  }
`;

const Mouse = styled.rect`
  transition: stroke 0.4s;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: 3;
`;

const Scroll = styled.circle`
  transition: fill 0.4s;
  animation-name: ${ScrollAnimation};
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
  animation-iteration-count: infinite;
  transform-origin: 50% 20.5px;
  will-change: transform;
  fill: ${({ theme }) => theme.colors.primary};
`;

export default ScrollIcon;
