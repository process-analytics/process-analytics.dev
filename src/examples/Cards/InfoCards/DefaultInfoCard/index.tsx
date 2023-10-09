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
import React from 'react';

// @mui material components
import Icon from '@mui/material/Icon';

// Material Kit 2 React components

import { MKBox2, MKTypography2 } from '../../../../components';

function DefaultInfoCard({
  color,
  icon,
  title,
  description,
  direction,
  small,
}: DefaultInfoCardProps): JSX.Element {
  return (
    <MKBox2
      lineHeight={1}
      p={direction === 'center' ? 2 : 0}
      textAlign={direction}
    >
      {typeof icon === 'string' ? (
        <MKTypography2
          display="block"
          variant={direction === 'center' ? 'h2' : 'h3'}
          color={color}
          textGradient
        >
          <Icon>{icon}</Icon>
        </MKTypography2>
      ) : (
        icon
      )}
      <MKTypography2
        display="block"
        variant="h5"
        fontWeight="bold"
        mt={direction === 'center' ? 1 : 2}
        mb={1.5}
      >
        {title}
      </MKTypography2>
      <MKTypography2
        display="block"
        variant={small ? 'button' : 'body2'}
        color="text"
        pr={direction === 'left' ? 6 : 0}
        pl={direction === 'right' ? 6 : 0}
      >
        {description}
      </MKTypography2>
    </MKBox2>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: 'info',
  direction: 'left',
  small: false,
};

// Typechecking props for the DefaultInfoCard
interface DefaultInfoCardProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
  icon: JSX.Element;
  title: string | JSX.Element;
  description: string;
  direction?: 'left' | 'right' | 'center';
  small?: boolean;
}

export default DefaultInfoCard;
