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

import React, { PropsWithChildren } from 'react';

import { styled as MaterialStyled, Link as MaterialLink } from '@mui/material';

import {
  OverridableComponent,
  OverridableTypeMap,
} from '@mui/material/OverridableComponent';

import { Link as GatsbyLink } from 'gatsby-link';

export type LinkPlop = {
  type: 'internal' | 'external';
  name: string;
  description?: string;
  url: string;
};

// Define the prop type for the generic component
type GenericComponentProps = Required<Pick<LinkPlop, 'url' | 'type'>> & {
  component: OverridableComponent<OverridableTypeMap> | React.ElementType;
} & React.ComponentProps<
    OverridableComponent<OverridableTypeMap> | React.ElementType
  >;

export const GenericComponent: React.FC<
  PropsWithChildren<GenericComponentProps>
> = ({ component: WrapperComponent, type, url, children, ...restProps }) => {
  return type === 'internal' ? (
    <WrapperComponent component={GatsbyLink} to={url} {...restProps}>
      {/* Render the children inside the WrapperComponent */}
      {children}
    </WrapperComponent>
  ) : (
    <WrapperComponent
      component={MaterialLink}
      href={url}
      target="_blank"
      rel="noreferrer"
      {...restProps}
    >
      {/* Render the children inside the WrapperComponent */}
      {children}
    </WrapperComponent>
  );
};

export function getLinkAttributes(
  item: Required<Pick<LinkPlop, 'url' | 'type'>>,
):
  | { component: typeof GatsbyLink; to: string }
  | {
      component: typeof MaterialLink;
      rel: string;
      href: string;
      target: string;
    } {
  return item.type === 'internal'
    ? {
        component: GatsbyLink,
        to: item.url,
      }
    : {
        component: MaterialLink,
        href: item.url,
        target: '_blank',
        rel: 'noreferrer',
      };
}

type LinkProps = {
  selected?: boolean;
  href?: string;
  onClick?: () => void;
};

export const Link = MaterialStyled(MaterialLink)<LinkProps>(
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
