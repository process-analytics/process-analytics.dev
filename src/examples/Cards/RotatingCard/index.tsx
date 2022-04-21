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

import React, { useState } from 'react';

// @mui material components
import Card from '@mui/material/Card';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

function RotatingCard({
  children,
}: React.PropsWithChildren<RotatingCardProps>): JSX.Element {
  const [rotate, setRotate] = useState(false);

  const rotate0 = (): void => setRotate(false);
  const rotate180 = (): void => setRotate(true);

  return (
    <MKBox
      sx={{ perspective: '50rem' }}
      onMouseEnter={rotate180}
      onMouseLeave={rotate0}
    >
      <Card
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'relative',
          transform: rotate ? 'rotateY(180deg)' : 'rotateY(0)',
          transformStyle: 'preserve-3d',
          transition: 'all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)',
        }}
      >
        {children}
      </Card>
    </MKBox>
  );
}

// Typechecking props for the RotatingCard
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RotatingCardProps {}

export default RotatingCard;
