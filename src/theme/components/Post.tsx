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
import Grid from '@mui/material/Grid';
import React from 'react';

import { Flex } from 'rebass/styled-components';
import { BlogCard } from './material-kit';
import styled from 'styled-components';

import { PostDescription } from '../types';

import { ButtonWithInternalLink } from '.';

import colors from '../colors.json';
import { isMobileView } from '../utils/helpers';

type PostContainerProps = {
  posts: PostDescription[];
  pageId?: string;
};

export const PostContainer = ({
  posts,
  pageId,
}: PostContainerProps): JSX.Element => {
  const maxNumberOfPosts = isMobileView() ? 3 : 6;
  return (
    <>
      <Grid container spacing={3} alignItems="center">
        {(pageId ? posts.slice(0, maxNumberOfPosts) : posts).map(p => (
          <Grid
            item
            key={p.url}
            xs={12}
            lg={4}
            sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}
          >
            <BlogCard
              key={p.url}
              image={p.cover}
              title={p.title}
              description={p.text}
              textAlign="left"
              action={{
                type: 'external',
                url: p.url,
                color: 'spicy',
                label: 'More about',
                variant: 'text',
              }}
            />
          </Grid>
        ))}
      </Grid>

      {pageId && posts.length > maxNumberOfPosts && (
        <Flex justifyContent="center" mt="30px" mb="30px" fontSize={[2, 3]}>
          <ButtonWithInternalLink
            to={`/${pageId}`}
            color={colors.background}
            backgroundColor={colors.secondary}
          >
            See all
          </ButtonWithInternalLink>
        </Flex>
      )}
    </>
  );
};
