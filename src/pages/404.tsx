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
import { Box, Image, Text } from 'rebass/styled-components';
import Layout from '../theme/components/Layout';
import Section from '../theme/components/Section';
import Triangle from '../theme/components/Triangle';
import { Link } from 'gatsby';
import Img from '../images/404.png';
import { PAGE } from '../theme/utils/constants';
import PageHeader from '../theme/components/PageHeader';
import Footer from '../theme/components/Footer';
import { MailingListSubscription } from '../theme/components/mailingListSubscription/MailingListSubscription';

const NotFoundPage = (): JSX.Element => (
  <Layout title={PAGE.notFound}>
    <PageHeader />
    <Section.Container Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Image
          src={Img}
          marginLeft={['25%', 0]}
          width={['50%', '100%']}
          alt="404 not found"
        />
        <Text
          fontSize={['1rem', '1.5rem', '2rem']}
          fontWeight="bold"
          color="secondary"
        >
          Oops, looks like the page cannot be found...
          <br />
          <Link to="/">Go back to home</Link>
        </Text>
      </Box>
    </Section.Container>
    <Footer />
    <MailingListSubscription />
  </Layout>
);

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="secondary"
      // color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="muted"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />
  </>
);

export default NotFoundPage;
