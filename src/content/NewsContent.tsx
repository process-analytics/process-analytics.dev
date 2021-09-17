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
    title: 'August 2021 Newsletter',
    text: 'Learn about the new Process Analytics website and logo, the new R library and improvements in the BPMN Visualization Typescript library.',
    cover:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--ygpwYYGb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/drmkymx2bln4ytgkqjfm.png', // image within the article, no cover available
    url: 'https://dev.to/process-analytics/process-analytics-august-2021-newsletter-j7d',
    date: 'September 2021',
    time: 3,
  },
];

export const newsContent = {
  news,
};
