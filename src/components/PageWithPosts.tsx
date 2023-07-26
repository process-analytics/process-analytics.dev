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
import { MKBox } from '../components/material-kit';

import { footerContent } from '../content/FooterContent';
import { headerContent } from '../content/HeaderContent';

import {
  Layout,
  Section,
  PostContainer,
  PostContent,
  MailingListSubscription,
} from '../components';

import { SECTION } from '../helper';
import { theme } from '../assets/oldTheme';

// TODO duplicated from Landing.tsx
const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

interface PageWithPostsProps {
  containerTitle: SECTION;
  postContents: PostContent[];
  description: string;
}

export const PageWithPosts = ({
  containerTitle,
  postContents,
  description,
}: PageWithPostsProps): JSX.Element => (
  <Layout footerContent={footerContent} headerContent={headerContent}>
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
      <MKBox component="section" py={12}>
        <PostContainer postContents={postContents} />
      </MKBox>
    </Section>
    <MailingListSubscription />
  </Layout>
);
