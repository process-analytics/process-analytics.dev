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
import { Box, Flex, Text } from 'rebass/styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

export interface ResponseContainerProps extends MessageProps {
  msg: string;
}

interface MessageProps {
  error: boolean;
}

export const ResponseContainer = (
  props: ResponseContainerProps,
): JSX.Element => {
  return (
    <Box>
      <Message error={props.error} maxWidth="100%" margin="auto" height="auto">
        {props.error && (
          <FontAwesomeIcon size="lg" icon={faExclamationTriangle} />
        )}
        {!props.error && <FontAwesomeIcon size="lg" icon={faCheckCircle} />}
        <Text
          overflow={{ wrap: 'break-word' }}
          dangerouslySetInnerHTML={{ __html: props.msg }}
        />
      </Message>
    </Box>
  );
};

const Message = styled(Flex)`
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0.6rem;

  & > :nth-child(1) {
    margin-right: 0.2rem;
  }
  & > :nth-child(2) {
    margin-left: 0.2rem;
  }

  ${(props: MessageProps) =>
    !props.error &&
    `color: #2b7515;
    background: #ecffd6;
    border: 1px solid #617c42;
    `}

  ${(props: MessageProps) =>
    props.error &&
    `margin: 0.5rem auto;
    color: #ba3939;
    background: #ffe0e0;
    border: 1px solid #a33a3a;
    `}
`;
