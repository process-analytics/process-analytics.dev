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
      'bpmn-visualization: All you need to know about styling BPMN elements',
    text: 'Diving into bpmn-visualization Typescript library, we focus on style management, with resources for beginners and advanced usage scenarios.',
    cover: 'https://miro.medium.com/v2/resize:fit:770/0*7wlYSrLCWLhQBRUi',
    url: 'https://medium.com/@process-analytics/bpmn-visualization-all-you-need-to-know-about-styling-bpmn-elements-24289154c16c',
    date: 'July 2023',
    time: 8,
  },
  {
    title: 'Exploring the intersection of BPMN with Process Mining',
    text: 'This article describes our experience integrating the bpmn-visualization library with the popular Python process mining library pm4py.',
    cover:
      'https://cdn-images-1.medium.com/v2/resize:fit:880/1*UI_oU_MBPsfBQUxEXtJV6w.png',
    url: 'https://medium.com/@process-analytics/exploring-the-intersection-of-bpmn-with-process-mining-a5fd246625bf',
    date: 'May 2023',
    time: 8,
  },
  {
    title: 'Interview with Prof. Wil van der Aalst at ICPM 2022',
    text: 'Interview with Prof. Wil van der Aalst about the scope of Process Mining, research advances, industry adoption, and what the future holds.',
    cover: 'https://miro.medium.com/max/700/0*AGf3gCHlnLo-Kezi',
    url: 'https://medium.com/@process-analytics/interview-with-professor-wil-van-der-aalst-at-icpm-2022-81dc4d23df4c',
    date: 'November 2022',
    time: 6,
  },
  {
    title:
      'Hacktoberfest 2022: Now, it’s an official Process Analytics tradition!',
    text: 'The Process Analytics team is participating in Hacktoberfest 2022, as we did the 2 last years.',
    cover: 'https://miro.medium.com/max/700/0*JP2I14IS1lPDx8oK',
    url: 'https://medium.com/@process-analytics/hacktoberfest-2022-now-its-an-official-process-analytics-tradition-8493b064d0b4',
    date: 'November 2022',
    time: 3,
  },
  {
    title: 'Getting started with bpmn-visualization',
    text: 'A getting started tutorial to bpmn-visualization using an online monitoring scenario.',
    cover:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--LnfUKsmY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_370/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hip8ppuji1az7v6symep.gif',
    url: 'https://dev.to/process-analytics/getting-started-with-bpmn-visualization-3dno',
    date: 'October 2022',
    time: 12,
  },
  {
    title: 'Dive Into Process Analytics at Bonita Day Paris',
    text: 'In early April 2022, we presented the Process Analytics project (in 🇫🇷) with an integration use case through a ticketing application.',
    cover: 'https://miro.medium.com/max/700/0*miAH3fzzf8-5nLxV',
    url: 'https://medium.com/@process-analytics/dive-into-process-analytics-at-bonita-day-paris-ae11a56d5932',
    date: 'August 2022',
    time: 2,
  },
  {
    title: 'Model Generation Application',
    text: 'Built with Process Analytics components, our upcoming demonstration tool generates a process from event logs.',
    cover: 'https://miro.medium.com/max/700/0*CwMkx8E5C8z0W223',
    url: 'https://medium.com/@process-analytics/247afc3f95c3',
    date: 'August 2022',
    time: 1,
    isInModelGenerationAppPage: true,
  },
  {
    title: '🇫🇷 Webinar: Dive into Process Analytics',
    text: 'At the end of June 2022, we presented the Process Analytics project (in 🇫🇷) with an integration use case through a ticketing application.',
    cover: 'https://miro.medium.com/max/700/0*p3rIaYZ5DPAvIoPf',
    url: 'https://medium.com/@process-analytics/c1d08b5fa4a8',
    date: 'August 2022',
    time: 1,
  },
  {
    title: '🇬🇧 Webinar: Dive into Process Analytics',
    text: 'In early July 2022, we presented the Process Analytics project (in 🇬🇧) with an integration use case through a ticketing application.',
    cover: 'https://miro.medium.com/max/700/0*5U_EyfKhkgPtSAIA',
    url: 'https://medium.com/@process-analytics/14975257e9f0',
    date: 'August 2022',
    time: 1,
  },
  {
    title: 'Hacktoberfest 2021: Process Analytics makes its mark',
    text: 'Retrospective of the Process Analytics project’s participation in Hacktoberfest 2021.',
    cover: 'https://miro.medium.com/max/700/0*qB-6GcQRd7q0Kx3u',
    url: 'https://medium.com/@process-analytics/hacktoberfest-2021-process-analytics-makes-its-mark-d217ce6b0791',
    date: 'February 2022',
    time: 4,
  },
  {
    title:
      'Visualizing processes in BPMN standard using the BPMN layout generator', // original title which would have been truncated: 'Visualizing processes in BPMN standard: using the BPMN layout generator to show activities, transitions, and gateways'
    text: 'In this article, we will use the BPMN layout generator to automatically generate a BPMN diagram from events logs. To further help visualize the process, we will add BPMN objects such as gateways.', // abstract in Bonitasoft Community: 'In this article, we will see how you can visualize event logs with the BPMN layout generator. We will use the BPMN layout generator to automatically generate a BPMN diagram from events logs. To further help visualize the process we will add BPMN objects such as gateways.'
    cover:
      'https://community.bonitasoft.com/sites/community.bonitasoft.com/files/blog/bonita-community/the_same_process_with_some_noise_filtered_out.png',
    url: 'https://community.bonitasoft.com/blog/visualizing-processes-bpmn-standard-using-bpmn-layout-generator-show-activities-transitions-and',
    date: 'December 2021',
    time: 3,
    isInModelGenerationAppPage: true,
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
    text: 'This article recalls basic foundations of good web application performance, and offers insights from a case study based on Process Analytics bpmn-visualization TypeScript library.',
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
    isInModelGenerationAppPage: true,
  },
  {
    title: 'Creating a Bonita Custom Widget using bpmn-visualization', // original title which would have been truncated: '[Bonita UI Designer] creating Custom widget for bpmn-visualization'
    text: 'A step-by-step tutorial to integrate the bpmn-visualization TypeScript library in a Bonita UID custom widget.',
    cover:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--8NRwpUAl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tufyv45n77jatwf7ygz5.png', // from the dev.to article
    url: 'https://community.bonitasoft.com/blog/bonita-ui-designer-custom-widget-bpmn-visualization', // https://dev.to/aibcmars/bonita-ui-designer-creating-custom-widget-for-bpmn-visualization-44lk
    date: 'February 2021',
    time: 3,
  },
  {
    title:
      'Simplifying life: Using GitHub Actions for Continuous Integration in bpmn-visualization', // original title: 'Simplifying life: Using GitHub Actions for Continuous Integration in a bpmn-visualization open source project'
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
    isInModelGenerationAppPage: true,
  },
];

export const postsContent = {
  posts: posts,
  description:
    'Find all the blog posts explaining how to use the libraries developed by Process Analytics, ' +
    'as well as those explaining how they were developed using external technical tools, and more.',
};
