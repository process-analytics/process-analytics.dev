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

import { Link as MaterialLink } from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';

import type { MDXComponents } from 'mdx/types';

const MarkdownParagraph: MDXComponents['p'] = ({ children }) => (
  <p style={{ paddingBottom: '1rem' }}>{children}</p>
);

const MarkdownList: MDXComponents['ol'] = ({ children }) => (
  <ol style={{ margin: 0 }}>{children}</ol>
);

const MarkdownUnorderedList: MDXComponents['ul'] = ({ children }) => (
  <ul style={{ margin: 0 }}>{children}</ul>
);

const MarkdownListItem: MDXComponents['li'] = ({ children }) => (
  <li style={{ marginBottom: '1rem' }}>{children}</li>
);

const MarkdownLink: MDXComponents['a'] = props => {
  const href = props.href as string;
  const isInnerLink = href.startsWith('#');

  return isInnerLink ? (
    <GatsbyLink to={href}>{props.children}</GatsbyLink>
  ) : (
    <MaterialLink href={href} target="_blank" rel="noreferrer">
      {props.children}
    </MaterialLink>
  );
};

export const StyledMDXComponents: MDXComponents = {
  p: MarkdownParagraph,
  ol: MarkdownList,
  ul: MarkdownUnorderedList,
  li: MarkdownListItem,
  a: MarkdownLink,
};
