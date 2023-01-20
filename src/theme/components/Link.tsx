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
import React, { AnchorHTMLAttributes } from 'react';

import styled, { CSSProperties } from 'styled-components';

import { styled as MaterialStyled, Link as MaterialLink } from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';

type LinkProps = {
  selected?: boolean;
  href?: string;
  onClick?: () => void;
};

export const LinkWithMaterial = MaterialStyled(MaterialLink)<LinkProps>(
  ({ theme, selected, href, onClick }) => `
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 3px;
  color: inherit;
  font-weight: 600;
  ${selected && `border-bottom: 3px solid ${theme.palette.primary.main}`};
  transition: 0.4s;
  cursor: ${onClick || href ? 'pointer' : 'default'};

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -3px;
    background: ${theme.palette.secondary.main};
    height: 3px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:focus:after,
  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`,
);

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

const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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

export const ButtonWithInternalLink = ({
  children,
  ...rest
}: React.PropsWithChildren<{ to: string }> &
  LinkInButtonProps): JSX.Element => (
  <StyledButton>
    <InternalLinkInButton {...rest}>{children}</InternalLinkInButton>
  </StyledButton>
);
