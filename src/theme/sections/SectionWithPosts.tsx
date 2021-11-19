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
import React from 'react';
import Section from '../components/Section';
import { SECTION } from '../utils/constants';
import { PostContainer } from '../components/Post';
import { PostDescription } from '../types';

interface SectionWithPostsProps {
  containerTitle: SECTION;
  Background?: () => JSX.Element;
  posts: PostDescription[];
  pageId: string;
}

export const SectionWithPosts = ({
  containerTitle,
  Background,
  posts,
  pageId,
}: SectionWithPostsProps): JSX.Element => (
  <Section.Container id={containerTitle} Background={Background}>
    <Section.Header name={containerTitle} />
    <PostContainer posts={posts} pageId={pageId} />
  </Section.Container>
);
