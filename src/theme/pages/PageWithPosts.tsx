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
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { Heading } from 'rebass/styled-components';
import Triangle from '../components/Triangle';
import { PostContainer } from '../components/Post';
import { PostDescription } from '../types';
import { PAGE, SECTION } from '../utils/constants';

interface PageWithPostsProps {
  layoutTitle: PAGE;
  containerTitle: SECTION;
  posts: PostDescription[];
}

export const PageWithPosts = ({
  layoutTitle,
  containerTitle,
  posts,
}: PageWithPostsProps): JSX.Element => (
  <Layout title={layoutTitle}>
    <PageHeader />
    <Section.Container id={containerTitle} Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 8]}
        mb={[5, 5, 6]}
        mt={[5, 5, 6]}
      >
        {containerTitle}
      </Heading>
      <PostContainer posts={posts} />
    </Section.Container>
    <Footer />
  </Layout>
);

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
