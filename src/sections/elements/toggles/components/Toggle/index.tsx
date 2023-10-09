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

import { useState } from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';

// Material Kit 2 React components
import { MKBox2, MKTypography2 } from '../../../../../components';

import React from 'react';

function Toggle(): JSX.Element {
  const [checked, setChecked] = useState(false);
  const toggleSwitch = (): void => setChecked(!checked);

  return (
    <MKBox2 component="section" py={8}>
      <Container>
        <Grid container item xs={4} justifyContent="center" mx="auto">
          <MKBox2 display="flex" alignItems="center">
            <Switch checked={checked} onChange={toggleSwitch} />

            <MKTypography2
              variant="button"
              color="text"
              fontWeight="regular"
              ml={1}
              sx={{ cursor: 'pointer', userSelect: 'none' }}
              onClick={toggleSwitch}
            >
              Remember me
            </MKTypography2>
          </MKBox2>
        </Grid>
      </Container>
    </MKBox2>
  );
}

export default Toggle;
