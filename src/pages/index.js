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
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.4.0';
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from './Components/Components.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';
import ProfilePage from './ProfilePage/ProfilePage.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
);
