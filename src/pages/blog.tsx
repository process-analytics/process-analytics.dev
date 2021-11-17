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
import Layout from '../theme/components/Layout';
import PageHeader from '../theme/components/PageHeader';
import Footer from '../theme/components/Footer';
import Section from '../theme/components/Section';
import { PAGE, SECTION } from '../theme/utils/constants';
import { Heading } from 'rebass/styled-components';
import Triangle from '../theme/components/Triangle';
import { PostContainer } from '../theme/sections/Blog';

const BlogPage = (): JSX.Element => (
  <Layout title={PAGE.blog}>
    <PageHeader />
    <Section.Container id={SECTION.blog} Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 8]}
        mb={[5, 5, 6]}
        mt={[5, 5, 6]}
      >
        {SECTION.blog}
      </Heading>
      <PostContainer />
    </Section.Container>
    <Footer />
  </Layout>
);

export default BlogPage;

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '35vh']}
      width={['95vw', '55vw']}
    />

    <Triangle
      color="secondary"
      height={['18vh', '35vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['9vh', '15vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />
  </>
);
