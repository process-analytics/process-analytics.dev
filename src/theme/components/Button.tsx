/**
 * Copyright 2023 Bonitasoft S.A.
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
import React, { AnchorHTMLAttributes } from 'react';

import { Link as GatsbyLink } from 'gatsby-link';
import styled, { CSSProperties } from 'styled-components';

const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

type LinkInButtonProps = Pick<
  CSSProperties,
  'backgroundColor' | 'color' | 'borderWidth' | 'padding'
>;

const ExternalLinkInButton = styled.a`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 2.875rem;
  height: 2.875rem;
  border-radius: 30px;
  text-decoration: none;
  position: relative;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  border: ${props => `2px solid ${props.theme.color}`};
  display: inline-block;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 4px 2px 4px 0px;
    border-radius: inherit;
  }
  &:hover {
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.backgroundColor};
  }
`;

const InternalLinkInButton = styled(GatsbyLink)`
  padding: 12px 32px;
  text-align: center;
  font-size: 16.5px;
  font-weight: 700;
  margin: 4px 2px;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  border: ${props => `2px solid ${props.theme.backgroundColor}`};
  display: inline-block;

  &:hover {
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.backgroundColor};
  }
`;

export const ButtonWithExternalLink = ({
  children,
  backgroundColor,
  color,
  borderWidth,
  padding,
  ...rest
}: // eslint-disable-next-line  @typescript-eslint/no-explicit-any
React.PropsWithChildren<AnchorHTMLAttributes<any>> &
  LinkInButtonProps): JSX.Element => (
  <StyledButton>
    <ExternalLinkInButton
      theme={{ backgroundColor, color, borderWidth, padding }}
      {...rest}
    >
      {children}
    </ExternalLinkInButton>
  </StyledButton>
);

export const ButtonWithInternalLink = ({
  children,
  backgroundColor,
  color,
  borderWidth,
  padding,
  ...rest
}: React.PropsWithChildren<{ to: string }> &
  LinkInButtonProps): JSX.Element => (
  <StyledButton>
    <InternalLinkInButton
      theme={{ backgroundColor, color, borderWidth, padding }}
      {...rest}
    >
      {children}
    </InternalLinkInButton>
  </StyledButton>
);
