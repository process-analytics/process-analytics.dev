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

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';

import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterRoutes } from './types';

// Images
import logo from './assets/PA-images/logo.svg';

export const paRooterRoutes: FooterRoutes = {
  brand: {
    name: 'Process Analytics',
    image: logo,
    route: '/',
  },
  copyright: { name: 'Bonitasoft S.A.', url: 'https://www.bonitasoft.com' },
  socials: [
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/process-analytics',
    },
    {
      icon: <TwitterIcon />,
      url: 'https://twitter.com/ProcessAnalyti1',
    },

    {
      icon: <LogoDevIcon />,
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
      name: 'product',
      items: [
        {
          name: 'model generation application',
          route: '/model-generation-application',
        },
        { name: 'libraries', route: '/libraries' },
      ],
    },
    {
      name: 'learn',
      items: [
        { name: 'news', route: '/news' },
        { name: 'blog', route: '/blog' },
      ],
    },
    {
      name: 'help & support',
      items: [{ name: 'contact us', route: '/contact-us' }],
    },
    {
      name: 'Project',
      items: [
        { name: 'about us', route: '/about-us' },
        { name: 'terms & policies', route: '/terms-and-policies' },
      ],
    },
  ],
};
