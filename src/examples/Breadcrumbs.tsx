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
import React from 'react';

// @mui material components
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';

import { Link } from 'gatsby';

// Material Kit 2 React components
import { MKBox, MKTypography } from '../components';

export interface BreadcrumbRoute {
  label: string;
  route?: string;
}

// Typechecking props for the Breadcrumbs
interface BreadcrumbsProps {
  routes: BreadcrumbRoute[];
}

export const Breadcrumbs = ({
  routes,
  ...rest
}: BreadcrumbsProps): JSX.Element => {
  return (
    <MKBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <MKTypography
              key={label}
              component={Link}
              to={route}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                '&:hover, &:focus': {
                  color: ({ palette: { info } }) =>
                    (info as SimplePaletteColorOptions)?.main,
                },
              }}
            >
              {label}
            </MKTypography>
          ) : (
            <MKTypography key={label} variant="button" fontWeight="regular">
              {label}
            </MKTypography>
          ),
        )}
      </MuiBreadcrumbs>
    </MKBox>
  );
};
