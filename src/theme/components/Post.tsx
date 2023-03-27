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
import React, { ReactNode } from 'react';

import { Flex, Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

import { PostDescription } from '../types';

import { Card, CardContainer, CardFooter, ButtonWithInternalLink } from '.';

import colors from '../colors.json';
import { isMobileView } from '../utils/helpers';

const cardMinWidth = '350px';

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
      <Text m={3} color="text" fontSize={['0.875rem', '1.25rem']}>
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
  pageId?: string;
};

export const PostContainer = ({
  posts,
  pageId,
}: PostContainerProps): JSX.Element => {
  const maxNumberOfPosts = isMobileView() ? 3 : 8;
  return (
    <>
      <CardContainer minWidth={cardMinWidth}>
        <DownFade>
          {(pageId ? posts.slice(0, maxNumberOfPosts) : posts).map(p => (
            <Post {...p} key={p.url} />
          ))}
        </DownFade>
      </CardContainer>
      {pageId && posts.length > maxNumberOfPosts && (
        <DownFade>
          <Flex justifyContent="center" mt="30px" mb="30px" fontSize={[2, 3]}>
            <ButtonWithInternalLink
              to={`/${pageId}`}
              color={colors.background}
              backgroundColor={colors.secondary}
            >
              See all
            </ButtonWithInternalLink>
          </Flex>
        </DownFade>
      )}
    </>
  );
};

const DownFade = ({ children }: { children: ReactNode }): JSX.Element => (
  <Fade direction="down" triggerOnce cascade damping={0.5}>
    {children}
  </Fade>
);
