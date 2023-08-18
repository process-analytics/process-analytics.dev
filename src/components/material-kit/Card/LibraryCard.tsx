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

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';

// @mui material components
import { Card, CardActions, CardContent, IconButton } from '@mui/material';

import { Action } from '../Navbar/common';
import { Link } from '../..';

// Material Kit 2 React components
import { MKBox, MKTypography } from '..';

export const LibraryCard = ({
  title,
  type,
  description,
  actions,
  textAlign = 'center',
}: LibraryCardProps): JSX.Element => (
  <Card
    sx={{
      height: '100%', // to have card with same size
    }}
  >
    <MKBox display="flex" p={3} flexDirection={['column', 'row']}>
      <CardContent>
        <MKBox textAlign={textAlign}>
          <MKBox>
            <MKTypography
              display="inline"
              variant="h5"
              fontWeight="regular"
              textOverflow="ellipsis"
            >
              {title}
            </MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="overline" fontWeight="bold" color="spicy">
              {type}
            </MKTypography>
          </MKBox>

          <MKBox mt={1}>
            <MKTypography
              variant="body2"
              component="p"
              color="text"
              textOverflow="ellipsis"
            >
              {description}
            </MKTypography>
          </MKBox>
        </MKBox>
      </CardContent>
      <CardActions disableSpacing={true} sx={{ pl: 2 }}>
        <MKBox
          display="flex"
          flexDirection="column"
          justifyContent="start"
          height="100%"
        >
          {actions.map((action, i) => (
            <Link
              component={IconButton}
              type={action.type}
              url={action.url}
              key={i}
              size="medium"
              color={action.color ?? 'secondary'}
              sx={{
                textTransform: 'none',
              }}
              title={action.label}
            >
              {action.icon}
            </Link>
          ))}
        </MKBox>
      </CardActions>
    </MKBox>
  </Card>
);

type LibraryCardProps = {
  title: string;
  description: string;
  actions: Omit<Action, 'variant'>[];
  type: string;
  textAlign?: 'center' | 'left' | 'right';
};
