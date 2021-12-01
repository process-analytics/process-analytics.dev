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
import { Button } from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

export interface IconProps {
  icon: IconDefinition;
  onClick: () => void;
  withWiggleAnimation: boolean;
}

export const Icon = (props: IconProps): JSX.Element => {
  return (
    <Button
      as={props.withWiggleAnimation ? StyledOpenIcon : StyledIcon}
      onClick={() => props.onClick()}
    >
      <Fade duration={0.3} style={{ margin: 'auto' }}>
        <FontAwesomeIcon icon={props.icon} />
      </Fade>
    </Button>
  );
};

const StyledIcon = styled(Button)`
  cursor: pointer;
  margin: auto;
  padding: 0;
  background: transparent;
`;

const StyledOpenIcon = styled(StyledIcon)`
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
