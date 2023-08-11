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

import { Theme } from '@mui/material';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { ComponentsOverrides } from '@mui/material/styles/overrides';

// Material Kit 2 React Base Styles
import { palette } from './colors';

const { info, secondary } = palette;

export const globals: ComponentsOverrides<Theme>['MuiCssBaseline'] = {
  html: {
    scrollBehavior: 'smooth',
    fontSize: '62.5%',
    fontFamily: '"Open Sans",Helvetica,Arial,sans-serif',
  },
  'html *': {
    mozOsxFontSmoothing: 'grayscale',
  },

  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
  },

  body: {
    fontSize: '10px',
  },

  img: {
    maxWidth: '100%',
    verticalAlign: 'middle',
    border: 0,
  },

  a: {
    textDecoration: 'none',
  },
  'a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited': {
    color: `${(secondary as SimplePaletteColorOptions)?.main} !important`,
    transition: 'color 150ms ease-in !important',
  },
  'a.link:hover, .link:hover, a.link:focus, .link:focus': {
    color: `${(info as SimplePaletteColorOptions)?.main} !important`,
  },
};
