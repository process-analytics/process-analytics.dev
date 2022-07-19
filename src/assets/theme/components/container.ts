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

// Material Kit 2 React base styles
import breakpoints from '../base/breakpoints';

// Material Kit 2 React helper functions
import pxToRem from '../functions/pxToRem';

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
const XL = `@media (min-width: ${xl}px)`;
const XXL = `@media (min-width: ${xxl}px)`;

const sharedClasses = {
  paddingRight: `${pxToRem(24)} !important`,
  paddingLeft: `${pxToRem(24)} !important`,
  marginRight: 'auto !important',
  marginLeft: 'auto !important',
  width: '100% !important',
  position: 'relative',
};

export default {
  [SM]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: '540px !important',
    },
  },
  [MD]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: '720px !important',
    },
  },
  [LG]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: '960px !important',
    },
  },
  [XL]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: '1140px !important',
    },
  },
  [XXL]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: '1320px !important',
    },
  },
};
