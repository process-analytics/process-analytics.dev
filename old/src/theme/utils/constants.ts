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
export const GATSBY_URL = 'https://www.gatsbyjs.org/';

// keys are used by the header
// values are used as section title
export enum SECTION {
  home = 'Home',
  about = 'About',
  libraries = 'Libraries',
  news = 'News',
  blog = 'Blog Posts',
}

// keys are used by the page header
// values are used as page title
export enum PAGE {
  home = 'Process Analytics',
  notFound = 'Page not found - Process Analytics',
  news = 'News - Process Analytics',
  blog = 'Blog Posts - Process Analytics',
}

export const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';
export const MEDIA_QUERY_MEDIUM = '@media (max-width: 600px)';
