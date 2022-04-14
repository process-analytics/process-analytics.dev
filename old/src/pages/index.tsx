/**
 * Copyright 2021 Bonitasoft S.A.
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
import * as React from 'react';
import Layout from 'old/src/theme/components/Layout';
import Header from 'old/src/theme/components/Header';
import Landing from 'old/src/theme/sections/Landing';
import About from 'old/src/theme/sections/About';
import Libraries from 'old/src/theme/sections/Libraries';
import { Blog } from 'old/src/theme/sections/Blog';
import Footer from 'old/src/theme/components/Footer';
import { News } from 'old/src/theme/sections/News';
import { PAGE } from 'old/src/theme/utils/constants';
import { MailingListSubscription } from 'old/src/theme/components/mailingListSubscription/MailingListSubscription';

const HomePage = (): JSX.Element => (
  <Layout title={PAGE.home}>
    <Header />
    <Landing />
    <About />
    <Libraries />
    <News />
    <Blog />
    <Footer />
    <MailingListSubscription />
  </Layout>
);

export default HomePage;
