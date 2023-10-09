/**
 * Copyright 2022 Bonitasoft S.A.
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
import type { FC } from 'react';
import React from 'react';

import { Box } from '@mui/material';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MKTypography } from '../material-kit';

export interface CardWithIconProps {
  icon: IconProp;
  iconColor: string;
  title: string;
  description: string;
}

export const CardWithIcon: FC<CardWithIconProps> = ({
  iconColor,
  icon,
  title,
  description,
}) => (
  <Box
    style={{
      padding: '16px',
      textAlign: 'center',
    }}
  >
    <MKTypography variant="h3" display="block">
      <FontAwesomeIcon
        icon={icon}
        color={iconColor}
        style={{
          width: '1.75rem',
          height: '1.75rem',
          overflow: 'hidden',
          display: 'inline-block',
        }}
      />
    </MKTypography>
    <MKTypography
      variant="body1"
      display="block"
      fontWeight="bold"
      mt={1}
      mb={1.5}
    >
      {title}
    </MKTypography>
    <MKTypography variant="body2" display="block" color="text">
      {description}
    </MKTypography>
  </Box>
);
