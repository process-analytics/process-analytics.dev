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
import { Link } from 'rebass/styled-components';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLink as SocialLinkType } from '../types';
import { getIconDefinition } from '../utils/icons';

type Props = SocialLinkType & {
  invert?: boolean;
};

const SocialLink = ({ icon, name, url, invert }: Props): JSX.Element | null => {
  const iconDefinition = getIconDefinition(icon);
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
      <IconLink
        href={url}
        target="_blank"
        invert={invert}
        rel="noreferrer"
        aria-label={name}
      >
        <FontAwesomeIcon icon={iconDefinition} />
      </IconLink>
    </Tippy>
  );
};

const IconLink = styled(Link)<{ invert?: boolean }>`
  transition: opacity 0.4s;
  color: ${({ theme, invert }) =>
    invert ? theme.colors.background : theme.colors.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export default SocialLink;
