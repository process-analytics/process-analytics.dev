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
import { Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { PostDescription } from '../types';
import { Card, CardContainer } from './Card';
import CardFooter from './CardFooter';
import { Fade } from 'react-awesome-reveal';
import { cardMinWidth } from '../sections/Blog';

type PostProps = PostDescription;

export const Post = ({
  title,
  text,
  cover,
  url,
  date,
  time,
}: PostProps): JSX.Element => (
  <a
    href={url}
    target="__blank"
    title={title}
    style={{ textDecoration: 'none' }}
  >
    <Card p={0} pb={4}>
      <EllipsisHeading m={3} color="text" fontSize={3}>
        {title}
      </EllipsisHeading>
      {cover && <CoverImage src={cover} alt={title} />}
      <Text m={3} color="text">
        {text}
      </Text>
      <CardFooter bg="primary" color="background" position="bottom-right" round>
        <span>{`${date} - `}</span>
        <TimeReadSpan>{`${Math.ceil(time)} min read`}</TimeReadSpan>
      </CardFooter>
    </Card>
  </a>
);

const TimeReadSpan = styled.span`
  text-transform: none;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

type PostContainerProps = {
  posts: PostDescription[];
  displayAll?: boolean;
};

export const PostContainer = ({
  posts,
  displayAll,
}: PostContainerProps): JSX.Element => {
  return (
    <CardContainer minWidth={cardMinWidth}>
      <Fade direction="down" triggerOnce cascade damping={0.5}>
        {(displayAll ? posts : posts.slice(0, 6)).map(p => (
          <Post {...p} key={p.url} />
        ))}
      </Fade>
    </CardContainer>
  );
};
