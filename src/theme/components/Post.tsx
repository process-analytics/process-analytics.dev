import React, { ReactNode } from 'react';
import { Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { PostDescription } from '../types';
import { Card } from './Card';
import CardFooter from './CardFooter';

type PostProps = PostDescription;

export const Post = ({
  title,
  text,
  cover,
  url,
  date,
  time,
}: PostProps): JSX.Element => (
  <PostContainer url={url} title={title}>
    <EllipsisHeading m={3} color="text">
      {title}
    </EllipsisHeading>
    {cover && <CoverImage src={cover} height="200px" alt={title} />}
    <Text m={3} color="text">
      {text}
    </Text>
    <CardFooter bg="primary" color="background" position="bottom-right" round>
      {`${date} - ${Math.ceil(time)} min`}
    </CardFooter>
  </PostContainer>
);

type PostContainerProps = {
  url: string;
  title: string;
  children: ReactNode;
};

const PostContainer = ({
  url,
  title,
  children,
}: PostContainerProps): JSX.Element => (
  <a
    href={url}
    target="__blank"
    title={title}
    style={{ textDecoration: 'none' }}
  >
    <Card p={0} pb={4}>
      {children}
    </Card>
  </a>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
