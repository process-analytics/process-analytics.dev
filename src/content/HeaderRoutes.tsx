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
 */
import { HeaderRoute } from '../theme/types';

/*import SvgLogo from '../images/logo.svg';

export const header = {
  logo: { src: SvgLogo },
};*/

// TODO: Mutualize with FooterRoutes
export const routes: HeaderRoute[] = [
  {
    type: 'internal',
    name: 'model generation application',
    url: '/model-generation-application',
  },
  {
    type: 'internal',
    name: 'news',
    url: '/news',
  },
  {
    type: 'internal',
    name: 'blog',
    url: '/blog',
  },
  {
    type: 'internal',
    name: 'Terms & Policies',
    url: '/model-generation-application-conditions',
  },
];
