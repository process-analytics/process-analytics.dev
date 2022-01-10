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

const news: PostDescription[] = [
  {
    title: 'December 2021 Newsletter',
    text: 'Learn about the website changes and improvements in the BPMN Visualization Typescript library.',
    cover: 'https://miro.medium.com/max/800/0*uVMqQZHCS3Fg0-T8',
    url: 'https://medium.com/@process-analytics/process-analytics-december-2021-newsletter-89459219f151',
    date: 'January 2022',
    time: 4,
  },
  {
    title: 'November 2021 Newsletter',
    text: 'Learn about the website changes and improvements in the BPMN Visualization Typescript library.',
    cover: 'https://miro.medium.com/max/450/0*pTAacquotB7OIAgV',
    url: 'https://medium.com/@process-analytics/process-analytics-november-2021-newsletter-b1afb6715a9d',
    date: 'December 2021',
    time: 3,
  },
  {
    title: 'September 2021 Newsletter',
    text: 'Learn about the website changes, the Hacktoberfest 2021 participation, the new GitHub organization profile, and the new examples.',
    cover: 'https://miro.medium.com/max/310/0*uMfxKrDYqTeNwLUF',
    url: 'https://medium.com/@process-analytics/process-analytics-september-2021-newsletter-51e0b6c3404a',
    date: 'October 2021',
    time: 4,
  },
  {
    title: 'Hacktoberfest 2021 with Process Analytics',
    text: 'The Process Analytics team is participating in Hacktoberfest 2021, as we did for Hacktoberfest 2020.',
    cover: 'https://miro.medium.com/max/350/0*nuqEJFMVU_qIE2ZO',
    url: 'https://medium.com/@process-analytics/hacktoberfest-2021-with-process-analytics-44eecc238ead',
    date: 'September 2021',
    time: 2,
  },
  {
    title: 'August 2021 Newsletter',
    text: 'Learn about the new Process Analytics website and logo, the new R library and improvements in the BPMN Visualization Typescript library.',
    cover: 'https://miro.medium.com/max/310/0*Yymlf2vjfAIINqc2',
    url: 'https://medium.com/@process-analytics/process-analytics-august-2021-newsletter-b793a647e35d',
    date: 'September 2021',
    time: 4,
  },
  {
    title: 'The BPMN Visualization project celebrates its 1st anniversary', // original title: 'The bpmn-visualization project celebrates its 1st anniversary'
    text: "To celebrate the first year of our work on the BPMN Visualization library, here's a look back about what has been achieved.",
    cover:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--Qh5L0TzO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rf1gct67udbt0vmgqpyo.png', // from the dev.to article
    url: 'https://www.linkedin.com/pulse/bpmn-visualization-project-celebrates-its-1st-thomas-bouffard/', // https://dev.to/tbouffard/the-bpmn-visualization-project-celebrates-its-1st-anniversary-4ae2
    date: 'May 2021',
    time: 4,
  },
  {
    title: 'Process Analytics at Hacktoberfest 2020', // original title: 'Hacktoberfest challenge'
    text: 'Contribute to the bpmn-visualization library during the Hacktoberfest 2020 event.',
    cover:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--swGu7XvF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vcewdv5tbjnvxb0ws715.png', // from the dev.to article
    url: 'https://dev.to/marcin_michniewicz/hacktoberfest-challenge-398g',
    date: 'October 2020',
    time: 1,
  },
];

export const newsContent = {
  news,
  description:
    'Find all the news articles about Process Analytics to be informed of major changes, new libraries, examples update, and more.',
};
