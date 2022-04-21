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

// react-countup component
import React from 'react';

import CountUp from 'react-countup';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';

function DefaultCounterCard({
  color,
  count,
  title,
  description,
  ...rest
}: DefaultCounterCardProps): JSX.Element {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: 'info',
  description: '',
  title: '',
};

// Typechecking props for the DefaultCounterCard
interface DefaultCounterCardProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
  count: number;
  title?: string;
  description?: string;
  suffix?: string;
  separator?: string;
}

export default DefaultCounterCard;
