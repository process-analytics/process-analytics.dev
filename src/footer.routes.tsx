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

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { FooterContent } from './components';

// Images
import logoCT from './assets/images/logo-ct-dark.png';

export const footerRoutes: FooterContent = {
  brand: {
    name: 'Material Kit 2',
    logo: { primary: logoCT, light: logoCT },
    url: '/',
    type: 'internal',
  },
  copyright: { name: 'Material Kit', url: 'https://www.creative-tim.com' },
  socials: [
    {
      name: 'facebook',
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/CreativeTim/',
    },
    {
      name: 'twitter',
      icon: <TwitterIcon />,
      url: 'https://twitter.com/creativetim',
    },
    {
      name: 'github',
      icon: <GitHubIcon />,
      url: 'https://github.com/creativetimofficial',
    },
    {
      name: 'youtube',
      icon: <YouTubeIcon />,
      url: 'https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w',
    },
  ],
  menus: [
    {
      name: 'company',
      items: [
        {
          name: 'about us',
          url: 'https://www.creative-tim.com/presentation',
          type: 'external',
        },
        {
          name: 'freebies',
          url: 'https://www.creative-tim.com/templates/free',
          type: 'external',
        },
        {
          name: 'premium tools',
          url: 'https://www.creative-tim.com/templates/premium',
          type: 'external',
        },
        {
          name: 'blog',
          url: 'https://www.creative-tim.com/blog',
          type: 'external',
        },
      ],
    },
    {
      name: 'resources',
      items: [
        {
          name: 'illustrations',
          url: 'https://iradesign.io/',
          type: 'external',
        },
        {
          name: 'bits & snippets',
          url: 'https://www.creative-tim.com/bits',
          type: 'external',
        },
        {
          name: 'affiliate program',
          url: 'https://www.creative-tim.com/affiliates/new',
          type: 'external',
        },
      ],
    },
    {
      name: 'help & support',
      items: [
        {
          name: 'contact us',
          url: 'https://www.creative-tim.com/contact-us',
          type: 'external',
        },
        {
          name: 'knowledge center',
          url: 'https://www.creative-tim.com/knowledge-center',
          type: 'external',
        },
        {
          name: 'custom development',
          url: 'https://services.creative-tim.com/',
          type: 'external',
        },
        {
          name: 'sponsorships',
          url: 'https://www.creative-tim.com/sponsorships',
          type: 'external',
        },
      ],
    },
    {
      name: 'legal',
      items: [
        {
          name: 'terms & conditions',
          url: 'https://www.creative-tim.com/terms',
          type: 'external',
        },
        {
          name: 'privacy policy',
          url: 'https://www.creative-tim.com/privacy',
          type: 'external',
        },
        {
          name: 'licenses (EULA)',
          url: 'https://www.creative-tim.com/license',
          type: 'external',
        },
      ],
    },
  ],
};
