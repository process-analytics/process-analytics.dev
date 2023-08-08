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
import React, { CSSProperties } from 'react';

import {
  ButtonProps,
  Link as MaterialLink,
  LinkProps,
  PaletteColorKey,
  styled,
} from '@mui/material';

import { Link as GatsbyLink } from 'gatsby-link';

const StyledButton = styled('button')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  background-color: inherit;
`;

type LinkInButtonProps = Pick<CSSProperties, 'borderWidth' | 'padding'> & {
  backgroundColor: PaletteColorKey;
  color: PaletteColorKey;
};

const ExternalLinkInButton = styled(MaterialLink)<LinkProps>`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 2.875rem;
  height: 2.875rem;
  border-radius: 30px;
  text-decoration: none;
  position: relative;
  /* background-color: ${({ theme, bgcolor }) =>
    theme.palette[bgcolor as PaletteColorKey].main};*/
  /* color: ${({ theme, color }) =>
    theme.palette[color as PaletteColorKey].main}; */
  border: ${({ theme, color }) =>
    `2px solid ${theme.palette[color as PaletteColorKey].main}`};
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin: 4px 2px 4px 0;
    border-radius: inherit;
  }
  &:hover {
    background-color: ${({ theme, color }) =>
      theme.palette[color as PaletteColorKey].main};
    color: ${({ theme, bgcolor }) =>
      theme.palette[bgcolor as PaletteColorKey].main};
  }
`;

const InternalLinkInButton = styled(GatsbyLink)<Partial<LinkInButtonProps>>`
  padding: 12px 32px;
  text-align: center;
  font-size: 16.5px;
  font-weight: 700;
  margin: 4px 2px;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  /*  background-color: ${props => props.backgroundColor || 'inherit'};
  color: ${props => props.color || 'inherit'};
  border: ${props => `2px solid ${props.backgroundColor || 'inherit'}`};*/

  background-color: ${({ theme, backgroundColor }) =>
    theme.palette[backgroundColor as PaletteColorKey].main};
  color: ${({ theme, color }) => theme.palette[color as PaletteColorKey].main};
  border: ${({ theme, backgroundColor }) =>
    `2px solid ${theme.palette[backgroundColor as PaletteColorKey].main}`};
  display: inline-block;

  &:hover {
    background-color: ${({ theme, color }) =>
      theme.palette[color as PaletteColorKey].main};
    color: ${({ theme, backgroundColor }) =>
      theme.palette[backgroundColor as PaletteColorKey].main};
  }
`;

export const ButtonWithExternalLink = ({
  children,
  link,
  button,
}: React.PropsWithChildren<{
  link?: Partial<LinkProps>;
  button?: Partial<ButtonProps>;
}>): JSX.Element => (
  <StyledButton {...button}>
    <ExternalLinkInButton {...link}>{children}</ExternalLinkInButton>
  </StyledButton>
);

export const ButtonWithInternalLink = ({
  children,
  link,
  button,
}: React.PropsWithChildren<{
  link: { to: string } & Partial<LinkInButtonProps>;
  button?: Partial<ButtonProps>;
}>): JSX.Element => (
  <StyledButton {...button}>
    <InternalLinkInButton {...link}>{children}</InternalLinkInButton>
  </StyledButton>
);
