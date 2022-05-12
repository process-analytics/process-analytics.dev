/**
 * Copyright 2022 Bonitasoft S.A.
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
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Box, Heading, Text } from 'rebass/styled-components';

export interface CardWithIconProps {
  icon: IconProp;
  iconColor: string;
  title: string;
  description: string;
}
export const CardWithIcon = ({
  iconColor,
  icon,
  title,
  description,
}: CardWithIconProps): JSX.Element => {
  return (
    <Box
      style={{
        fontSize: '1.25rem',
        fontWeight: '400',
        lineHeight: '1',
        letterSpacing: '0.00938em',
        padding: '16px',
        textAlign: 'center',
      }}
    >
      <Heading
        as={'h2'}
        style={{
          fontSize: '2.25rem',
          fontWeight: '700',
          lineHeight: '1.3',
          letterSpacing: '-0.125px',
          padding: '0',
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          color={iconColor}
          style={{
            width: '1em',
            height: '1em',
            overflow: 'hidden',
            display: 'inline-block',
            padding: '0',
          }}
        />
      </Heading>
      <Text
        as={'span'}
        style={{
          margin: '8px 0px 12px',
          display: 'block',
          fontWeight: '700',
          letterSpacing: '-0.125px',
        }}
      >
        {title}
      </Text>
      <Text
        as={'p'}
        paddingX={'0'}
        margin={'0'}
        style={{
          fontSize: '1rem',
          fontWeight: '300',
          lineHeight: '1.6',
          display: 'block',
          letterSpacing: '-0.125px',
        }}
      >
        {description}
      </Text>
    </Box>
  );
};
