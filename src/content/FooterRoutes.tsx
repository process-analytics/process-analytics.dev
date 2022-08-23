/**
 * Copyright 2022 Bonitasoft S.A.
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

import {
  faDev,
  faGithub,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, SocialLink } from '../theme/types';

// Images
import logo from '../images/logo_white.svg';

export type FooterRoutes = {
  brand: Required<Omit<Link, 'description' | 'href'>> & { logo: string };
  copyright: { name: string; url: string };
  socials: Omit<SocialLink, 'name'>[];
  menus: FooterMenu[];
};
export type FooterMenu = {
  name: string;
  items: Required<Omit<Link, 'description' | 'href'>>[];
};

export const footerRoutes: FooterRoutes = {
  brand: {
    name: 'Process Analytics',
    logo: logo,
    route: '/',
  },
  copyright: { name: 'Bonitasoft S.A.', url: 'https://www.bonitasoft.com' },
  socials: [
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      url: 'https://github.com/process-analytics',
    },
    {
      icon: <FontAwesomeIcon icon={faTwitter} />,
      url: 'https://twitter.com/ProcessAnalyti1',
    },

    {
      icon: <FontAwesomeIcon icon={faDev} />,
      url: 'https://dev.to/process-analytics',
    },
    {
      icon: <FontAwesomeIcon icon={faMedium} />,
      url: 'https://medium.com/@process-analytics',
    },
  ],
  // TODO: To build from page path & constants of page title to avoid duplication and bad url path
  menus: [
    {
      name: 'components',
      items: [
        {
          name: 'model generation application',
          route: 'components/model-generation-application',
        },
      ],
    },
    {
      name: 'learn',
      items: [
        { name: 'news', route: 'learn/news' },
        { name: 'blog', route: 'learn/blog' },
      ],
    },
    {
      name: 'help & legal',
      items: [
        {
          name: 'Usage conditions of Model Generation Application',
          route: 'help-and-legal/model-generation-application-conditions',
        },
      ],
    },
  ],
};
