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

import { Link, LinkProps, styled } from '@mui/material';

import Tippy from '@tippyjs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { getIconDefinition } from '../helper';
import { MKTypography, MKTypographyProps } from '.';

export type SocialLinkProps = {
  content: SocialLinkContent;
  style?: SocialLinkStyle;
};

export type SocialLinkStyle = LinkProps &
  MKTypographyProps<typeof IconLink> &
  IconLinkProps;

type IconLinkProps = { invert?: boolean };

export type SocialLinkContent = {
  url: string;
  name: string;
  icon: IconName | JSX.Element;
};

export const SocialLink = ({
  content,
  style = { invert: false },
}: SocialLinkProps): JSX.Element | null => {
  const { url, name, icon } = content;

  const iconDefinition = getIconDefinition(icon as IconName);
  if (!iconDefinition) {
    return null;
  }

  return (
    <Tippy
      content={name}
      placement="bottom"
      trigger="mouseenter focus"
      arrow={false}
    >
      <MKTypography
        component={IconLink}
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
        {...style}
      >
        <FontAwesomeIcon icon={iconDefinition} />
      </MKTypography>
    </Tippy>
  );
};

const IconLink = styled(Link)<IconLinkProps>`
  transition: opacity 0.4s;
  color: ${({ theme, invert }) =>
    invert ? theme.palette.background.default : theme.palette.primary.main};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;
