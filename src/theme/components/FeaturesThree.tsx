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
import React from 'react';
import { Box, BoxProps, Flex } from 'rebass/styled-components';

import { CardWithIcon } from './CardWithIcon';

const CardBox = ({ children }: React.PropsWithChildren<BoxProps>) => (
  <Box
    paddingLeft={'24px'}
    paddingTop={'24px'}
    style={{
      flexBasis: 'calc(100% / 3)',
      flexGrow: '0',
      maxWidth: 'calc(100% / 3)',
    }}
  >
    {children}
  </Box>
);

export const FeaturesThree = (): JSX.Element => {
  return (
    <Flex
      style={{
        fontSize: '1.25rem',
        fontWeight: '400',
        lineHeight: '1.625',
        letterSpacing: '0.00938em',
        boxSizing: 'border-box',
        flexFlow: 'row wrap',
        marginTop: '-24px',
        width: 'calc(100% + 24px)',
        marginLeft: '-24px',
      }}
    >
      <CardBox>
        <CardWithIcon
          iconColor="muted"
          icon="globe"
          title="Free tool"
          description="It will help you generate and visualize the activities of your process in BPMN standard."
        />
      </CardBox>
      <CardBox>
        <CardWithIcon
          iconColor="muted"
          icon="globe"
          title="Built from Process Analytics libraries"
          description="Built by assembling various libraries provided by the Process Analytics project."
        />
      </CardBox>
      <CardBox>
        <CardWithIcon
          iconColor="muted"
          icon="tools"
          title="Simple usage"
          description="All you need is to provide the events logs and select the format of the
          generated diagram."
        />
      </CardBox>
    </Flex>
  );
};
