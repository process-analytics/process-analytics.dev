import * as React from 'react';
import { About } from '../theme/types';
import Logo from '../images/logo.svg';
import WhyDiagram from '../images/why_diagram.png';
import WhatDiagram from '../images/what_diagram.png';
import Content1 from './about_content_1.mdx';
import Content2 from './about_content_2.mdx';
import Content3 from './about_content_3.mdx';
import Content4 from './about_content_4.mdx';

export const about: About = [
  {
    mdx: <Content1 />,
    image: {
      src: WhyDiagram,
      alt: 'Email Voting Diagram',
      positionFromMdx: 'top',
    },
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
    /*    image: {
      position: 'bottom',
    },*/
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
