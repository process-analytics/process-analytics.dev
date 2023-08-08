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
import React, { FC } from 'react';

import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
  PaletteColorKey,
  Theme,
} from '@mui/material';

import { Link, LinkContent } from './Link';

type InternalButtonProps = Partial<Omit<MaterialButtonProps, 'color'>> & {
  backgroundColor: PaletteColorKey;
  color: PaletteColorKey;
};

type ButtonProps = {
  link: Omit<LinkContent, 'description'>;
  button: InternalButtonProps;
};

export const Button: FC<ButtonProps> = ({
  link: { name, ...rest },
  button: { backgroundColor, color },
}) => (
  <Link
    component={MaterialButton}
    color={color}
    {...rest}
    sx={{
      margin: '4px 2px',
      padding: '12px 32px',
      borderRadius: '20px',
      textAlign: 'center',
      textTransform: 'none',
      fontSize: '16.5px',
      fontWeight: 700,
      textDecoration: 'none',

      backgroundColor: ({ palette }: Theme) => palette[backgroundColor].main,
      border: ({ palette }: Theme) =>
        `2px solid ${palette[backgroundColor].main}`,

      '&:hover': {
        backgroundColor: ({ palette }: Theme) => palette[color].main,
        color: ({ palette }: Theme) => palette[backgroundColor].main,
      },
    }}
  >
    {name}
  </Link>
);
