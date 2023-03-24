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

import { Heading, Text } from 'rebass/styled-components';

import { footerRoutes } from '../../content/FooterRoutes';

import {
  Footer,
  Layout,
  Header,
  Section,
  PostContainer,
  MailingListSubscription,
} from '../components';

import { PostDescription } from '../types';

import { SECTION } from '../utils/constants';
import { theme } from '../theme';

// TODO duplicated from Landing.tsx
const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

interface PageWithPostsProps {
  containerTitle: SECTION;
  posts: PostDescription[];
  description: string;
}

export const PageWithPosts = ({
  containerTitle,
  posts,
  description,
}: PageWithPostsProps): JSX.Element => (
  <Layout>
    <Header />
    <Section id={containerTitle} backgroundColor={theme.colors.primary}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 8]}
        mb={[3, 4, 4]}
        mt={[5, 5, 6]}
      >
        {containerTitle}
      </Heading>
      <Text
        as="p"
        width={['85%', '80%', '70%']}
        color="primary"
        fontSize={[2, 4]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        {description}
      </Text>
      <PostContainer posts={posts} />
    </Section>
    <MailingListSubscription />
    {/* TODO: When there will only one theme provider, move the Footer in the Layout class */}
    <Footer content={footerRoutes} />
  </Layout>
);
