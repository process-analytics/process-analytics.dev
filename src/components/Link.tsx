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

import type { PropsWithChildren } from 'react';
import React from 'react';

import { Link as MaterialLink } from '@mui/material';

import type {
  OverridableComponent,
  OverridableTypeMap,
} from '@mui/material/OverridableComponent';

import { Link as GatsbyLink } from 'gatsby-link';

export type LinkContent = {
  type: 'internal' | 'external';
  name: string;
  description?: string;
  url: string;
};

// Define the prop type for the generic component
type LinkProps = Required<Pick<LinkContent, 'url' | 'type'>> & {
  component: OverridableComponent<OverridableTypeMap> | React.ElementType;
} & React.ComponentProps<
    OverridableComponent<OverridableTypeMap> | React.ElementType
  >;

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  component: WrapperComponent,
  type,
  url,
  children,
  ...restProps
}) =>
  type === 'internal' ? (
    <WrapperComponent
      component={GatsbyLink}
      to={url}
      rel="noreferrer"
      {...restProps}
    >
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
      {children}
    </WrapperComponent>
  );
