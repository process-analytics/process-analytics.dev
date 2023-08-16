import { GreyColorName, PaletteColorKey } from '@mui/material';

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
export const paletteKeys = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
  'tertiary',
  'quaternary',
  'primaryLight',
  'secondaryLight',
  'spicy',
  'sweet',
  'manufacture',
  'education',
  'telecom',
  'financial',
  'energy',
  'health',
  'government',
  'distribution',
];

export const isPaletteColorName = (color: string): color is PaletteColorKey =>
  paletteKeys.includes(color);

export const isGreyColorName = (color: string): color is GreyColorName =>
  color === 'grey-100' ||
  color === 'grey-200' ||
  color === 'grey-300' ||
  color === 'grey-400' ||
  color === 'grey-500' ||
  color === 'grey-600' ||
  color === 'grey-700' ||
  color === 'grey-800' ||
  color === 'grey-900';
