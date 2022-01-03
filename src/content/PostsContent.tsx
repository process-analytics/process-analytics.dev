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
import { PostDescription } from '../theme/types';

const posts: PostDescription[] = [
  {
    title:
      'Visualizing processes in BPMN standard using the BPMN layout generator', // original title which would have been truncated: 'Visualizing processes in BPMN standard: using the BPMN layout generator to show activities, transitions, and gateways'
    text: 'In this article, we will use the BPMN layout generator to automatically generate a BPMN diagram from events logs. To further help visualize the process, we will add BPMN objects such as gateways.', // abstract in Bonitasoft Community: 'In this article, we will see how you can visualize event logs with the BPMN layout generator. We will use the BPMN layout generator to automatically generate a BPMN diagram from events logs. To further help visualize the process we will add BPMN objects such as gateways.'
    cover:
      'https://lh5.googleusercontent.com/Kjqn5B3-PPYtJZ8k8iXtODqcIHS3AL3qlUWclH_ec-njXdCtZVnSFXz7ESRVILJCVLuXu047y_8tHxgaQ77miVPEqkoB3JIiLgpM1jqOjtQ1-8MLjGw2cfG_pFt5BaBSelY8r8GS',
    url: 'https://community.bonitasoft.com/blog/visualizing-processes-bpmn-standard-using-bpmn-layout-generator-show-activities-transitions-and',
    date: 'December 2021',
    time: 3,
  },
  {
    title: 'Using BPMN Visualization in R',
    text: 'The new BPMN Visualization - R Package is being developed to offer another way to visualize process execution data in R.',
    cover: 'https://miro.medium.com/max/310/0*A9K-8oeH_XT0MwUu',
    url: 'https://medium.com/@process-analytics/using-bpmn-visualization-in-r-91ab92bd5a8d',
    date: 'October 2021',
    time: 3,
  },
  {
    title: 'Improving Frontend User Experience with Profiling and Performance', // original title which would have been truncated: 'Improving Frontend User Experience with Profiling and Performance'
    text: 'This article recalls basic foundations of good web application performance, and offers insights from a case study based on Process Analytics BPMN Visualization library.',
    cover: 'https://miro.medium.com/max/350/0*Le0gSGCuvlKyHln3.png', // image within the article, no cover available
    url: 'https://bonitasoft.medium.com/improving-frontend-user-experience-with-profiling-and-performance-70921d030dd1',
    date: 'June 2021',
    time: 11,
  },
  {
    title: 'mxGraph Usage in TypeScript Projects',
    text: 'Learn how to integrate mxGraph in TypeScript project. The article also explains how we did it in bpmn-visualization.',
    cover: 'https://dz2cdn1.dzone.com/thumbnail?fid=14747584&w=400', // from dzone list when searching for the article
    url: 'https://dzone.com/articles/mxgraph-usage-in-typescript-projects',
    date: 'May 2021',
    time: 7,
  },
  {
    title:
      'Automated visual regression testing with TypeScript, Playwright and Jest', // original title which would have been truncated: 'Automated visual regression testing with TypeScript, Playwright, Jest and Jest Image Snapshot'
    text: 'Learn how to set up and to run automated visual regression testing with TypeScript, Playwright, Jest and Jest Image Snapshot.',
    cover: 'https://miro.medium.com/max/350/1*qGWieJvk7s1t7pzK82Lj6A.png', // from the medium article
    url: 'https://medium.com/nerd-for-tech/automated-visual-regression-testing-with-typescript-playwright-jest-and-jest-image-snapshot-86db6f3364f5',
    date: 'April 2021',
    time: 6,
  },
  {
    title:
      'Automated visual regression testing with TypeScript, Puppeteer and Jest', // original title which would have been truncated: 'Automated visual regression testing with TypeScript, Puppeteer, Jest and Jest Image Snapshot'
    text: 'Learn how to set up and to run automated visual regression testing with TypeScript, Puppeteer, Jest and Jest Image Snapshot.',
    cover: 'https://miro.medium.com/max/350/1*VoL0OqbLaesqYDaT3fc0HA.png', // from the medium article
    url: 'https://medium.com/nerd-for-tech/automated-visual-regression-testing-with-typescript-puppeteer-jest-and-jest-image-snapshot-9e14dd9d0fe7',
    date: 'March 2021',
    time: 6,
  },
  {
    title:
      'Using process discovery on BPM through BPMN: the BPMN layout generator', // original title which would have been truncated: 'Using process discovery on business process management (BPM) through BPMN: the BPMN layout generator'
    text: 'Extract the BPMN semantic of a business process (not based on BPMN process) starting with its event logs using Process Mining tools.',
    cover: 'https://miro.medium.com/max/700/0*qg0OrWHFwe_QjvJf', // from the medium article
    url: 'https://bonitasoft.medium.com/using-process-discovery-on-process-the-bpmn-layout-generator-4e7e0cd1fc25',
    date: 'March 2021',
    time: 4,
  },
  {
    title: 'Creating a Bonita Custom Widget using BPMN Visualization', // original title which would have been truncated: '[Bonita UI Designer] creating Custom widget for BPMN Visualization'
    text: 'A step-by-step tutorial to integrate the BPMN Visualization library in a Bonita UID custom widget.',
    cover:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--8NRwpUAl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tufyv45n77jatwf7ygz5.png', // from the dev.to article
    url: 'https://community.bonitasoft.com/blog/bonita-ui-designer-custom-widget-bpmn-visualization', // https://dev.to/aibcmars/bonita-ui-designer-creating-custom-widget-for-bpmn-visualization-44lk
    date: 'February 2021',
    time: 3,
  },
  {
    title:
      'Simplifying life: Using GitHub Actions for Continuous Integration in BPMN Visualization', // original title: 'Simplifying life: Using GitHub Actions for Continuous Integration in a BPMN Visualization open source project'
    text: 'A step-by-step tutorial that explains how to setup GitHub Actions to continuously build and test a TypeScript project.',
    cover:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--vBB9KCW4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/twfkvzk83m0cpjwz26js.png', // from https://dev.to/parthpandyappp/implemented-github-actions-to-a-django-python-repository-2128
    url: 'https://dev.to/marcin_michniewicz/simplifying-life-using-github-actions-for-continuous-integration-in-a-bpmn-visualization-open-source-project-42i7',
    date: 'October 2020',
    time: 4,
  },
  {
    title:
      'Using Process Discovery on Business Process Management (BPM) through BPMN', // original title: 'Using process discovery on business process management (BPM) through BPMN'
    text: 'How Process Discovery can be used on the event logs of a generic application to extract information to re-create an accurate process model in BPMN.',
    cover: 'https://miro.medium.com/max/700/0*CBLM-NiaCiqT76Vm',
    url: 'https://medium.com/@olan.anesini/using-process-discovery-on-business-process-management-bpm-through-bpmn-d6ea0120ad1d',
    date: 'June 2020',
    time: 3,
  },
];

export const postsContent = {
  posts: posts,
  description:
    'Find all the blog posts explaining how to use the libraries developed by Process Analytics, ' +
    'as well as those explaining how they were developed using external technical tools, and more.',
};
