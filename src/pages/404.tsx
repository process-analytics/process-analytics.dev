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

import { Image, Text } from 'rebass/styled-components';
import { HeadProps, Link } from 'gatsby';
import styled from 'styled-components';

import { DataProps } from '../hooks/use-site-metadata';

import { footerContent } from '../content/FooterContent';
import { headerContent } from '../content/HeaderContent';

import { Layout, Section, MailingListSubscription } from '../theme/components';
import { PAGE } from '../theme/utils/constants';

import Img from '../assets/images/404.png';

import { SEO } from '../components/seo';

const StyledParagraph = styled.p`
  text-align: center;
  margin: 0 0 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const NotFoundPage = (): JSX.Element => (
  <Layout footerContent={footerContent} headerContent={headerContent}>
    <Section>
      <h1 style={{ textAlign: 'center' }}>
        <Image
          src={Img}
          margin="auto"
          width={['50%', '31.25rem']}
          alt="404 not found"
        />
      </h1>
      <h2 style={{ textAlign: 'center' }}>
        <Text fontSize="24px" color="secondary">
          OOPS, LOOKS LIKE THE PAGE CANNOT BE FOUND...
        </Text>
      </h2>
      <StyledParagraph>
        GO BACK TO THE{' '}
        <strong>
          <Link to="/">HOME PAGE</Link>
        </strong>
      </StyledParagraph>
    </Section>
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
