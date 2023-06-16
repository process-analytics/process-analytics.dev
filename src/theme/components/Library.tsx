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
import {
  Book,
  BrowseGallery,
  Category,
  Dvr,
  GitHub,
  LibraryBooks,
  MenuBook,
  School,
  SchoolRounded,
  SchoolTwoTone,
  SnippetFolderRounded,
  SnippetFolderTwoTone,
  Web,
} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Action } from './material-kit/Navbar/common';

import { LibraryCard, MKBox } from './material-kit';

import { SocialLink } from './';
import { Library as LibraryType } from '../types';

type Props = LibraryType;

export const Library = ({
  name,
  description,
  repository,
  documentation,
  examples,
  type,
}: Props): JSX.Element => {
  const actions: Action[] = [
    {
      type: 'external',
      url: repository,
      label: <GitHub />,
    },
  ];
  if (documentation) {
    actions.push({
      type: 'external',
      url: documentation,
      /* label: <LibraryBooks />,*/
      label: <SchoolRounded />,
    });
  }
  if (examples) {
    actions.push({
      type: 'external',
      url: examples,
      //label: <Category />,
      label: <SnippetFolderRounded />,
    });
  }

  return (
    <Grid item xs={12} md={6}>
      <MKBox mb={5}>
        <LibraryCard
          title={name}
          type={type}
          description={description}
          textAlign="left"
          actions={actions}
        />
      </MKBox>
    </Grid>

    /* <Grid container item xs={12} lg={4} sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}>
          <LibraryCard
            title={name}
            description={description}
            textAlign="left"
            action={{
              type: 'external',
              route: repository,
              color: 'spicy',
              label: 'More about',
              variant: 'text',
            }}
          />
        </Grid>*/

    /*
            <InfoContainer>
              <LinksContainer>
                <Flex
                  m={1}
                  style={{
                    float: 'right',
                  }}
                >
                  <Box mx={1} fontSize={4}>
                    <SocialLink name="Repository" icon="github" url={repository} />
                  </Box>
                  {documentation && (
                    <Box mx={1} fontSize={4}>
                      <SocialLink
                        name="Documentation"
                        icon="book"
                        url={documentation}
                      />
                    </Box>
                  )}
                  {examples && (
                    <Box mx={1} fontSize={4}>
                      <SocialLink name="Examples" icon="globe" url={examples} />
                    </Box>
                  )}
                </Flex>
              </LinksContainer>
              <CardFooter
                bg="primary"
                color="background"
                position="bottom-right"
                round
              >
                {type}
              </CardFooter>
            </InfoContainer>*/
  );
};

export default Library;
