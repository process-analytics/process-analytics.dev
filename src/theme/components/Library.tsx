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

import {
  GitHub,
  SchoolRounded,
  SnippetFolderRounded,
} from '@mui/icons-material';
import Grid from '@mui/material/Grid';

import { Action } from './material-kit/Navbar/common';
import { LibraryCard, MKBox } from './material-kit';

export type LibraryProps = {
  content: LibraryContent;
};

export type LibraryContent = {
  name: string;
  type: string;
  description: string;
  repository: string;
  documentation?: string;
  examples?: string;
};

export const Library = ({ content }: LibraryProps): JSX.Element => {
  const { name, description, repository, documentation, examples, type } =
    content;

  const actions: Action[] = [
    {
      type: 'external',
      label: 'Repository',
      url: repository,
      icon: <GitHub />,
    },
  ];
  if (documentation) {
    actions.push({
      type: 'external',
      label: 'Documentation',
      url: documentation,
      icon: <SchoolRounded />,
    });
  }
  if (examples) {
    actions.push({
      type: 'external',
      url: examples,
      label: 'Examples',
      icon: <SnippetFolderRounded />,
    });
  }

  return (
    <Grid item xs={12} md={6}>
      <MKBox
        mb={3}
        height={'calc(100% - 48px)'} // to have card with same size
      >
        <LibraryCard
          title={name}
          type={type}
          description={description}
          actions={actions}
          textAlign="left"
        />
      </MKBox>
    </Grid>
  );
};

export default Library;
