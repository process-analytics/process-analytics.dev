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
import * as React from 'react';

import { AboutContent } from '../sections/home/About';

import Logo from '../assets/images/logo.svg';
import WhyDiagram from '../assets/images/why_diagram.svg';
import WhatDiagram from '../assets/images/what_diagram.svg';
import Content1 from './about_content_1.mdx';
import Content2 from './about_content_2.mdx';
import Content3 from './about_content_3.mdx';
import Content4 from './about_content_4.mdx';

export const aboutContent: AboutContent = [
  {
    mdx: <Content1 />,
    image: {
      src: WhyDiagram,
      alt: 'Email Voting Diagram',
      positionFromMdx: 'top',
    },
    withSeparator: true,
  },
  {
    mdx: <Content2 />,
    image: {
      src: WhatDiagram,
      alt: 'Total Number Of Executions Diagram',
      positionFromMdx: 'bottom',
    },
    withSeparator: false,
  },
  {
    mdx: <Content3 />,
    withSeparator: true,
  },
  {
    mdx: <Content4 />,
    image: {
      src: Logo,
      alt: 'Process Analytics Logo',
    },
    withSeparator: false,
  },
];
