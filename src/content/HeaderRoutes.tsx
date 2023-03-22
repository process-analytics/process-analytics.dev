/**
 * Copyright 2023 Bonitasoft S.A.
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

/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 All routes for the Material Kit 2 React  are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Navbar.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `name` key is used for the name of the route on the Navbar.
 2. The `icon` key is used for the icon of the route on the Navbar.
 3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 4. The `route` key is used to store the route location which is used for the React router.
 5. The `href` key is used to store the external link location.
 6. The `component` key is used to store the component of its route.
 7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
 8. The `description` key is used to define the description of
 a route under its name.
 9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
 you can set the columns amount based on this key.
 10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
 */

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell, faBomb, faComment } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { HeaderRoute, Link } from '../theme/types';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const routes: HeaderRoute[] = [
  {
    name: 'pages',
    icon: faComment,
    withColumns: true,
    rowsPerColumn: 2,
    menus: [
      {
        name: 'landing pages',
        subItems: [
          { type: 'internal', name: 'about us', url: '/LandingPages/AboutUs' },
          {
            type: 'internal',
            name: 'contact us',
            url: '/LandingPages/ContactUs',
          },
          { type: 'internal', name: 'author', url: '/LandingPages/Author' },
        ],
      },
      {
        name: 'account',
        subItems: [
          { type: 'internal', name: 'sign in', url: '/LandingPages/SignIn' },
        ],
      },
    ],
  },
  {
    name: 'sections',
    icon: faBomb,
    menus: [
      {
        name: 'page sections',
        description: 'See all sections',
        isCollapsed: true,
        subItems: [
          {
            type: 'internal',
            name: 'page headers',
            url: '/sections/page-sections/page-headers',
          },
          {
            type: 'internal',
            name: 'features',
            url: '/sections/page-sections/features',
          },
        ],
      },
      {
        name: 'navigation',
        description: 'See all navigations',
        isCollapsed: true,
        subItems: [
          {
            type: 'internal',
            name: 'navbars',
            url: '/sections/navigation/navbars',
          },
          {
            type: 'internal',
            name: 'nav tabs',
            url: '/sections/navigation/nav-tabs',
          },
          {
            type: 'internal',
            name: 'pagination',
            url: '/sections/navigation/pagination',
          },
        ],
      },
      {
        name: 'input areas',
        description: 'See all input areas',
        isCollapsed: true,
        subItems: [
          {
            type: 'internal',
            name: 'inputs',
            url: '/sections/input-areas/inputs',
          },
          {
            type: 'internal',
            name: 'forms',
            url: '/sections/input-areas/forms',
          },
        ],
      },
      {
        name: 'attention catchers',
        description: 'See all examples',
        isCollapsed: true,
        subItems: [
          {
            type: 'internal',
            name: 'alerts',
            url: '/sections/attention-catchers/alerts',
          },
          {
            type: 'internal',
            name: 'modals',
            url: '/sections/attention-catchers/modals',
          },
          {
            type: 'internal',
            name: 'tooltips & popovers',
            url: '/sections/attention-catchers/tooltips-popovers',
          },
        ],
      },
      {
        name: 'elements',
        description: 'See all 32 examples',
        isCollapsed: true,
        subItems: [
          {
            type: 'internal',
            name: 'avatars',
            url: '/sections/elements/avatars',
          },
          {
            type: 'internal',
            name: 'badges',
            url: '/sections/elements/badges',
          },
          {
            type: 'internal',
            name: 'breadcrumbs',
            url: '/sections/elements/breadcrumbs',
          },
          {
            type: 'internal',
            name: 'buttons',
            url: '/sections/elements/buttons',
          },
          {
            type: 'internal',
            name: 'dropdowns',
            url: '/sections/elements/dropdowns',
          },
          {
            type: 'internal',
            name: 'progress bars',
            url: '/sections/elements/progress-bars',
          },
          {
            type: 'internal',
            name: 'toggles',
            url: '/sections/elements/toggles',
          },
          {
            type: 'internal',
            name: 'typography',
            url: '/sections/elements/typography',
          },
        ],
      },
    ],
  },
  {
    name: 'docs',
    icon: faBell,
    menus: [
      {
        type: 'external',
        name: 'getting started',
        description: 'All about overview, quick start, license and contents',
        url: 'https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/',
      },
      {
        type: 'external',
        name: 'foundation',
        description: 'See our colors, icons and typography',
        url: 'https://www.creative-tim.com/learning-lab/react/colors/material-kit/',
      },
      {
        type: 'external',
        name: 'components',
        description: 'Explore our collection of fully designed components',
        url: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
      },
      {
        type: 'external',
        name: 'plugins',
        description: 'Check how you can integrate our plugins',
        url: 'https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/',
      },
    ],
  },
  {
    type: 'external',
    name: 'github',
    icon: faGithub,
    url: 'https://github.com/process-analytics',
  },
];
