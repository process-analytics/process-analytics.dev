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

import {
  Layout,
  Section,
  PostContainer,
  PostContent,
  FooterContent,
  HeaderContent,
  MKBox,
  MKTypography,
} from '../components';

import { SECTION } from '../helper';

// TODO duplicated from Landing.tsx
const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

interface PageWithPostsProps {
  containerTitle: SECTION;
  postContents: PostContent[];
  description: string;
  footerContent: FooterContent;
  headerContent: HeaderContent;
}

export const PageWithPosts = ({
  containerTitle,
  postContents,
  description,
  footerContent,
  headerContent,
}: PageWithPostsProps): JSX.Element => (
  <Layout footerContent={footerContent} headerContent={headerContent}>
    <Section id={containerTitle} backgroundColor="primary">
      <MKTypography
        textAlign="center"
        variant="h1"
        color="primary"
        mb={[3, 4, 4]}
        mt={[5, 5, 6]}
      >
        {containerTitle}
      </MKTypography>
      <MKTypography
        variant="body1"
        width={['85%', '80%', '70%']}
        color="primary"
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        {description}
      </MKTypography>
      <MKBox component="section" py={12}>
        <PostContainer postContents={postContents} />
      </MKBox>
    </Section>
  </Layout>
);
