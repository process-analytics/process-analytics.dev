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

import { SectionWithTitle } from '../components/Section';
import { SECTION } from '../utils/constants';
import { about } from '../../content/AboutContent';
import DescriptionPanel from '../components/description/DescriptionPanel';

export const About = (): JSX.Element => {
  return (
    <SectionWithTitle id={SECTION.about}>
      {about.map((subsection, index) => (
        <DescriptionPanel key={index} index={index} {...subsection} />
      ))}
    </SectionWithTitle>
  );
};
