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

import { Section, SectionHeader } from '../components/Section';
import { CardContainer } from '../components/Card';
import Library from '../components/Library';
import { SECTION } from '../utils/constants';
import { libraries } from '../../content/LibraryContent';

const cardMinWidth = '300px';

const Libraries = (): JSX.Element => {
  return (
    <Section id={SECTION.libraries}>
      <SectionHeader name={SECTION.libraries} />

      <CardContainer minWidth={cardMinWidth}>
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {libraries.map((p, i) => (
            <Library {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section>
  );
};

export default Libraries;
