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
 All of the routes for the Material Kit 2 React React are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Navbar.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `name` key is used for the name of the route on the Navbar.
 2. The `icon` key is used for the icon of the route on the Navbar.
 3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 4. The `route` key is used to store the route location which is used for the react router.
 5. The `href` key is used to store the external links location.
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

import { Link } from '../theme/types';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type HeaderRoute = Omit<Link, 'description'> & {
  icon: IconDefinition;
  columns?: number;
  rowsPerColumn?: number;
  menus?: HeaderMenu[];
};
export type HeaderMenu = Link & {
  collapse?: boolean;
  subItems?: HeaderSubItem[];
};
export type HeaderSubItem = Link & {
  collapse?: boolean;
};

export const routes: HeaderRoute[] = [
  {
    name: 'pages',
    icon: faComment,
    columns: 1,
    rowsPerColumn: 2,
    menus: [
      {
        name: 'landing pages',
        subItems: [
          {
            name: 'about us',
            route: '/LandingPages/AboutUs',
          },
          {
            name: 'contact us',
            route: '/LandingPages/ContactUs',
          },
          {
            name: 'author',
            route: '/LandingPages/Author',
          },
        ],
      },
      {
        name: 'account',
        subItems: [
          {
            name: 'sign in',
            route: '/LandingPages/SignIn',
          },
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
        collapse: true,
        subItems: [
          {
            name: 'page headers',
            route: '/sections/page-sections/page-headers',
          },
          {
            name: 'features',
            route: '/sections/page-sections/features',
          },
        ],
      },
      {
        name: 'navigation',
        description: 'See all navigations',
        collapse: true,
        subItems: [
          {
            name: 'navbars',
            route: '/sections/navigation/navbars',
          },
          {
            name: 'nav tabs',
            route: '/sections/navigation/nav-tabs',
          },
          {
            name: 'pagination',
            route: '/sections/navigation/pagination',
          },
        ],
      },
      {
        name: 'input areas',
        description: 'See all input areas',
        collapse: true,
        subItems: [
          {
            name: 'inputs',
            route: '/sections/input-areas/inputs',
          },
          {
            name: 'forms',
            route: '/sections/input-areas/forms',
          },
        ],
      },
      {
        name: 'attention catchers',
        description: 'See all examples',
        collapse: true,
        subItems: [
          {
            name: 'alerts',
            route: '/sections/attention-catchers/alerts',
          },
          {
            name: 'modals',
            route: '/sections/attention-catchers/modals',
          },
          {
            name: 'tooltips & popovers',
            route: '/sections/attention-catchers/tooltips-popovers',
          },
        ],
      },
      {
        name: 'elements',
        description: 'See all 32 examples',
        collapse: true,
        subItems: [
          {
            name: 'avatars',
            route: '/sections/elements/avatars',
          },
          {
            name: 'badges',
            route: '/sections/elements/badges',
          },
          {
            name: 'breadcrumbs',
            route: '/sections/elements/breadcrumbs',
          },
          {
            name: 'buttons',
            route: '/sections/elements/buttons',
          },
          {
            name: 'dropdowns',
            route: '/sections/elements/dropdowns',
          },
          {
            name: 'progress bars',
            route: '/sections/elements/progress-bars',
          },
          {
            name: 'toggles',
            route: '/sections/elements/toggles',
          },
          {
            name: 'typography',
            route: '/sections/elements/typography',
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
        name: 'getting started',
        description: 'All about overview, quick start, license and contents',
        href: 'https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/',
      },
      {
        name: 'foundation',
        description: 'See our colors, icons and typography',
        href: 'https://www.creative-tim.com/learning-lab/react/colors/material-kit/',
      },
      {
        name: 'components',
        description: 'Explore our collection of fully designed components',
        href: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
      },
      {
        name: 'plugins',
        description: 'Check how you can integrate our plugins',
        href: 'https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/',
      },
    ],
  },
  {
    name: 'github',
    icon: faGithub,
    href: 'https://github.com/process-analytics',
  },
];
