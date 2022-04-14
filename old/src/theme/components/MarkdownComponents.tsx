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
import React, { PropsWithChildren, ReactElement } from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';
import { MDXProviderComponentsProp } from '@mdx-js/react';

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background};

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const MarkdownParagraph = styled(Text)`
  padding-bottom: 1em;
`;

const MarkdownList = styled.ul`
  margin: 0;
`;

const MarkdownListItem = styled.li`
  margin-bottom: 1em;
`;

/* eslint-disable @typescript-eslint/no-explicit-any */
const MarkdownLink = (
  props: PropsWithChildren<any>,
): ReactElement<any, any> => {
  const href = props['href'] as string;
  const isInnerLink = href.startsWith('#');

  return isInnerLink ? (
    <StyledLink href={href}>{props.children}</StyledLink>
  ) : (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {props.children}
    </StyledLink>
  );
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const components: MDXProviderComponentsProp = {
  p: MarkdownParagraph,
  ol: MarkdownList,
  li: MarkdownListItem,
  a: MarkdownLink,
};
export default components;
