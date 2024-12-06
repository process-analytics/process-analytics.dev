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
import type {FC, PropsWithChildren, JSX} from 'react';
import React from 'react';

import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';

import { CardWithIcon } from './CardWithIcon';

const CardBox: FC<PropsWithChildren<BoxProps>> = ({ children }) => (
  <Box
    paddingLeft={'24px'}
    paddingTop={'24px'}
    flexBasis={['auto', 'auto', 'calc(100% / 3)']}
    maxWidth={['100%', '100%', 'calc(100% / 3)']}
  >
    {children}
  </Box>
);

export const Features = (): JSX.Element => (
  <Box
    display="flex"
    flexDirection={['column', 'column', 'row']}
    flexWrap="wrap"
    style={{
      boxSizing: 'border-box',
      marginTop: '-24px',
      width: 'calc(100% + 24px)',
      marginLeft: '-24px',
    }}
  >
    <CardBox>
      <CardWithIcon
        iconColor="muted"
        icon="lightbulb"
        title="Free tool"
        description="Generate and visualize process activities in BPMN Standards."
      />
    </CardBox>
    <CardBox>
      <CardWithIcon
        iconColor="muted"
        icon="tools"
        title="Simple usage"
        description="Provide event logs and select the format of the diagram to be generated."
      />
    </CardBox>
    <CardBox>
      <CardWithIcon
        iconColor="muted"
        icon="bolt-lightning"
        title="Process Analytics"
        description="Built by assembling various libraries provided by the Process Analytics project."
      />
    </CardBox>
  </Box>
);
