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
import Triangle from '../components/Triangle';
import { PostContainer } from '../components/Post';
import { SECTION } from '../utils/constants';
import { newsContent } from '../../content/NewsContent';

const News = (): JSX.Element => {
  const { news } = newsContent;

  return (
    <Section.Container id={SECTION.news} Background={Background}>
      <Section.Header name={SECTION.news} />
      <PostContainer posts={news} />
    </Section.Container>
  );
};

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '6vh']}
      width={['100vw', '100vw']}
      position="top-left"
    />

    <Triangle
      color="primary"
      height={['85vh', '75vh']}
      width={['35vw', '25vw']}
      position="bottom-left"
    />

    <Triangle
      color="secondary"
      height={['35vh', '30vh']}
      width={['80vw', '65vw']}
      position="bottom-left"
    />
    <Triangle
      color="muted"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      position="bottom-left"
    />
  </>
);

export default News;
