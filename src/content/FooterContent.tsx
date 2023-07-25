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
import { brandContent } from './BrandContent';

import { socialLinks } from './SocialLinkContent';

import { FooterContent } from '../theme/components/Footer';

export const footerContent: FooterContent = {
  brand: brandContent,
  copyright: { name: 'Bonitasoft S.A.', url: 'https://www.bonitasoft.com' },
  socials: socialLinks,
  // TODO: To build from page path & constants of page title to avoid duplication and bad url path
  menus: [
    {
      name: 'components',
      items: [
        {
          type: 'internal',
          name: 'model generation application',
          url: '/model-generation-application',
        },
      ],
    },
    {
      name: 'learn',
      items: [
        { type: 'internal', name: 'news', url: '/news' },
        { type: 'internal', name: 'blog', url: '/blog' },
      ],
    },
    {
      name: 'help & legal',
      items: [
        {
          type: 'internal',
          name: 'Terms & Policies',
          url: '/model-generation-application-conditions',
        },
      ],
    },
  ],
};
