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

// Images
import logo from './assets/PA-images/logo.svg';
import { FooterContent } from './components';

export const paRooterRoutes: FooterContent = {
  brand: {
    name: 'Process Analytics',
    logo: { primary: logo, light: logo },
    url: '/',
    type: 'internal',
  },
  copyright: { name: 'Bonitasoft S.A.', url: 'https://www.bonitasoft.com' },
  socials: [
    {
      name: 'github',
      icon: <GitHubIcon />,
      url: 'https://github.com/process-analytics',
    },
    {
      name: 'twitter',
      icon: <TwitterIcon />,
      url: 'https://twitter.com/ProcessAnalyti1',
    },

    {
      name: 'dev.to',
      icon: <LogoDevIcon />,
      url: 'https://dev.to/process-analytics',
    },
    {
      name: 'medium',
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
          url: '/model-generation-application',
          type: 'internal',
        },
        { name: 'libraries', url: '/libraries', type: 'internal' },
      ],
    },
    {
      name: 'learn',
      items: [
        { name: 'news', url: '/news', type: 'internal' },
        { name: 'blog', url: '/blog', type: 'internal' },
      ],
    },
    {
      name: 'help & support',
      items: [{ name: 'contact us', url: '/contact-us', type: 'internal' }],
    },
    {
      name: 'Project',
      items: [
        { name: 'about us', url: '/about-us', type: 'internal' },
        {
          name: 'terms & policies',
          url: '/terms-and-policies',
          type: 'internal',
        },
      ],
    },
  ],
};
