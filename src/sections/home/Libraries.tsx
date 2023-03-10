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

import { Fade } from 'react-awesome-reveal';

import { SectionWithTitle } from '../../theme/components/Section';
import { CardContainer } from '../../theme/components/Card';
import Library from '../../theme/components/Library';
import { SECTION } from '../../theme/utils/constants';

import { libraries } from '../../content/LibraryContent';

const cardMinWidth = '300px';

export const Libraries = (): JSX.Element => {
  return (
    <SectionWithTitle id={SECTION.libraries}>
      <CardContainer minWidth={cardMinWidth} mb="30px">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {libraries.map((p, i) => (
            <Library {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </SectionWithTitle>
  );
};
