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

import { Breakpoint, Components, Theme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

// Material Kit 2 React base styles
import { breakpoints } from '../base/breakpoints';

const {
  values: { md, lg, xl, xxl },
} = breakpoints;

const buildMaxWidthByBreakpoint = (
  theme: Theme,
  breakpoint: Breakpoint,
  maxWidth: number,
): OverridesStyleRules => ({
  [theme.breakpoints.up(breakpoint)]: {
    maxWidth: `${maxWidth}rem !important`,
  },
});

export const MuiContainer: Components<Theme>['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      paddingRight: '2rem !important',
      paddingLeft: '2rem !important',
      marginRight: 'auto !important',
      marginLeft: 'auto !important',
      width: '100% !important',

      ...buildMaxWidthByBreakpoint(theme, 'sm', md),
      ...buildMaxWidthByBreakpoint(theme, 'md', lg),
      ...buildMaxWidthByBreakpoint(theme, 'lg', xl),
      ...buildMaxWidthByBreakpoint(theme, 'xl', xxl),
      ...buildMaxWidthByBreakpoint(theme, 'xxl', 96),
    }),
  },
};
