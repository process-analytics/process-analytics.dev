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
import { HeadProps, Link } from 'gatsby';

import { DataProps } from '../hooks/use-site-metadata';

import { footerRoutes } from '../content/FooterRoutes';
import { Footer } from '../theme/components/Footer';
import Layout from '../theme/components/Layout';
import { Section } from '../theme/components/Section';
import { PAGE } from '../theme/utils/constants';
import PageHeader from '../theme/components/PageHeader';
import { MailingListSubscription } from '../theme/components/mailingListSubscription/MailingListSubscription';

import Img from '../images/404.png';

import { SEO } from '../components/seo';

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <PageHeader />
    <Section>
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
    </Section>
    {/* TODO: When there will only one theme provider, move the Footer in the
    Layout class */}
    <Footer content={footerRoutes} />
    <MailingListSubscription />
  </Layout>
);

export default NotFoundPage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }: HeadProps<DataProps>): JSX.Element => (
  <SEO title={PAGE.notFound} pathname={location.pathname} />
);
