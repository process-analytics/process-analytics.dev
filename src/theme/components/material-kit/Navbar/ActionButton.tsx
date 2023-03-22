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

import { ButtonProps } from '@mui/material';

import { MKBox, MKButton } from '..';
import { getLinkAttributes } from '../../Link';
import { Link } from '../../../types';

export type Action = Required<Pick<Link, 'url' | 'type'>> & {
  color?: ButtonProps['color'];
  label: string;
};
export const ActionButton = ({ action }: { action: Action }): JSX.Element => {
  return (
    <MKBox ml={{ xs: 'auto', lg: 0 }}>
      {action && (
        <MKButton
          {...getLinkAttributes({ type: action.type, url: action.url })}
          variant={
            action.color === 'quaternary' || action.color === 'primary'
              ? 'contained'
              : 'gradient'
          }
          color={action.color ?? 'info'}
          size="small"
        >
          {action.label}
        </MKButton>
      )}
    </MKBox>
  );
};
