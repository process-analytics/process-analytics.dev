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

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import { faMedium, faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import MKTypography from './components/MKTypography';

// Images
import logoCT from './assets/PA-images/logo.svg';

import React from 'react';

const date = new Date().getFullYear();

export default {
  brand: {
    name: 'Process Analytics',
    image: logoCT,
    route: '/',
  },
  socials: [
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/process-analytics',
    },
    {
      icon: <TwitterIcon />,
      link: 'https://twitter.com/ProcessAnalyti1',
    },
    {
      icon: <FontAwesomeIcon icon={faMedium} />,
      link: 'https://medium.com/@process-analytics',
    },
    {
      icon: <FontAwesomeIcon icon={faDev} />,
      link: 'https://dev.to/process-analytics',
    },
  ],
  menus: [
    {
      name: 'company',
      items: [
        { name: 'about us', href: 'https://www.creative-tim.com/presentation' },
        {
          name: 'freebies',
          href: 'https://www.creative-tim.com/templates/free',
        },
        {
          name: 'premium tools',
          href: 'https://www.creative-tim.com/templates/premium',
        },
        { name: 'blog', href: 'https://www.creative-tim.com/blog' },
      ],
    },
    {
      name: 'resources',
      items: [
        { name: 'illustrations', href: 'https://iradesign.io/' },
        { name: 'bits & snippets', href: 'https://www.creative-tim.com/bits' },
        {
          name: 'affiliate program',
          href: 'https://www.creative-tim.com/affiliates/new',
        },
      ],
    },
    {
      name: 'help & support',
      items: [
        { name: 'contact us', href: 'https://www.creative-tim.com/contact-us' },
        {
          name: 'knowledge center',
          href: 'https://www.creative-tim.com/knowledge-center',
        },
        {
          name: 'custom development',
          href: 'https://services.creative-tim.com/',
        },
        {
          name: 'sponsorships',
          href: 'https://www.creative-tim.com/sponsorships',
        },
      ],
    },
    {
      name: 'legal',
      items: [
        {
          name: 'terms & conditions',
          href: '',
        },
        {
          name: 'privacy policy',
          href: '',
        },
        {
          name: 'licenses (EULA)',
          href: '',
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright &copy; {date} Material Kit by
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
    </MKTypography>
  ),
};
