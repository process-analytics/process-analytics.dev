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
import { MEDIA_QUERY_MEDIUM } from '../../utils/constants';

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
      css={{
        cursor: 'pointer',
        padding: 0,
        background: 'transparent',
      }}
    >
      <Fade duration={0.3} style={{ margin: 'auto' }}>
        <FontAwesomeIcon icon={props.icon} size="lg" />
      </Fade>
    </Button>
  );
};

const StyledIcon = styled(Button)`
  margin: 0.4rem auto;
`;

const StyledOpenIcon = styled(Button)`
  width: 100%;
  height: 100%;
  &:hover {
    animation: wiggle 0.1s linear infinite;
  }
  @keyframes wiggle {
    0%,
    100% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(15deg);
    }
  }

  ${MEDIA_QUERY_MEDIUM} {
    :hover {
      animation: none;
    }
  }
`;
