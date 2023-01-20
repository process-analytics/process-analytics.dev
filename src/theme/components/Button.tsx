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
import { Link as GatsbyLink } from 'gatsby-link';
import React, { AnchorHTMLAttributes } from 'react';
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

const ExternalLinkInButton = styled.a<LinkInButtonProps>`
  padding: 12px 32px;
  text-align: center;
  font-size: 16.5px;
  font-weight: 700;
  margin: 4px 2px;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => `2px solid ${props.backgroundColor}`};
  display: inline-block;

  &:hover {
    background-color: ${props => props.color};
    color: ${props => props.backgroundColor};
  }
`;

const InternalLinkInButton = styled(GatsbyLink)<LinkInButtonProps>`
  padding: 12px 32px;
  text-align: center;
  font-size: 16.5px;
  font-weight: 700;
  margin: 4px 2px;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => `2px solid ${props.backgroundColor}`};
  display: inline-block;

  &:hover {
    background-color: ${props => props.color};
    color: ${props => props.backgroundColor};
  }
`;

//padding: 0px 15px;
export const ButtonWithExternalLink = ({
  children,
  ...rest
}: // eslint-disable-next-line  @typescript-eslint/no-explicit-any
React.PropsWithChildren<AnchorHTMLAttributes<any>> &
  LinkInButtonProps): JSX.Element => (
  <StyledButton>
    <ExternalLinkInButton {...rest}>{children}</ExternalLinkInButton>
  </StyledButton>
);

export const ButtonWithInternalLink = ({
  children,
  ...rest
}: React.PropsWithChildren<{ to: string }> &
  LinkInButtonProps): JSX.Element => (
  <StyledButton>
    <InternalLinkInButton {...rest}>{children}</InternalLinkInButton>
  </StyledButton>
);
