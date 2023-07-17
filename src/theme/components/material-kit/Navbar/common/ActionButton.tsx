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

/**
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

import { Button, ButtonProps, Theme } from '@mui/material';

import { MKBox } from '../..';
import { getLinkAttributes } from '../../../Link';
import { Link } from '../../../../types';

export type Action = Required<Pick<Link, 'url' | 'type'>> &
  Pick<ButtonProps, 'color' | 'variant'> & {
    label: string;
    icon?: JSX.Element;
  };
export const ActionButton = ({
  type,
  url,
  variant,
  color,
  label,
}: Action): JSX.Element => (
  <MKBox ml={{ xs: 'auto', lg: 0 }}>
    <Button
      {...getLinkAttributes({ type, url })}
      variant={variant ?? 'contained'}
      color={color ?? 'secondary'}
      size="medium"
      sx={{
        borderRadius: ({ borders }: Theme) => borders.borderRadius.section,
      }}
    >
      {label}
    </Button>
  </MKBox>
);
