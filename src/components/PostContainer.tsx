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

import { Box, Container, Grid } from '@mui/material';

import { PostCard, MKBox, Button } from '.';
import { useMobileViewStatus } from '../hooks';

type PostContainerProps = {
  postContents: PostContent[];
  pageId?: string;
};

export type PostProps = {
  content: PostContent;
};

export type PostContent = {
  title: string;
  text: string;
  cover: string;
  url: string;
  date: string;
  time: number;
  isInModelGenerationAppPage?: boolean;
};

const Post = ({
  content: { cover, title, text, url, date, time },
}: PostProps): JSX.Element => (
  <Grid item flex={1} xs={12} lg={4} sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}>
    <MKBox
      mb={3}
      height={'calc(100% - 48px)'} // to have card with same size
    >
      <PostCard
        image={cover}
        title={title}
        description={text}
        textAlign="left"
        postedOn={date}
        timeToRead={time}
        url={url}
      />
    </MKBox>
  </Grid>
);

export const PostContainer = ({
  postContents,
  pageId,
}: PostContainerProps): JSX.Element => {
  const maxNumberOfPosts = useMobileViewStatus() ? 3 : 6;
  return (
    <Container>
      <Grid container spacing={3}>
        {(pageId ? postContents.slice(0, maxNumberOfPosts) : postContents).map(
          (content, i) => (
            <Post key={i} content={content} />
          ),
        )}
      </Grid>

      {pageId && postContents.length > maxNumberOfPosts && (
        <Box
          display="flex"
          justifyContent="center"
          mt="30px"
          mb="30px"
          fontSize={[2, 3]}
        >
          <Button
            content={{
              type: 'internal',
              url: `/${pageId}`,
              name: 'See all',
            }}
            color="quaternary"
            backgroundColor="secondary"
          />
        </Box>
      )}
    </Container>
  );
};
