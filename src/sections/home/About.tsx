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

import { about } from '../../content/AboutContent';

import { SectionWithTitle, DescriptionPanel } from '../../theme/components';
import { SECTION } from '../../theme/utils/constants';
import { AboutSubSectionProps } from '../../theme/components/description/DescriptionPanel';

export type AboutProps = AboutSubSectionProps[];

export const About = (): JSX.Element => {
  return (
    <SectionWithTitle id={SECTION.about}>
      {about.map((subsection, index) => (
        <DescriptionPanel key={index} index={index} {...subsection} />
      ))}
    </SectionWithTitle>
  );
};
