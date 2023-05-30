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

import { Link as GatsbyLink } from 'gatsby-link';

import { MKBox, MKTypography } from '../..';

type BrandLinkProps = {
  isTransparent: undefined | boolean;
  isRelative: undefined | boolean;
  brand: string | undefined;
};
export const BrandLink = ({
  isTransparent,
  isRelative,
  brand,
}: BrandLinkProps): JSX.Element => {
  //const { logo } = header;
  return (
    <MKBox
      component={GatsbyLink}
      to="/"
      lineHeight={1}
      py={isTransparent ? 1.5 : 0.75}
      pl={isRelative || isTransparent ? 0 : { xs: 0, lg: 1 }}
    >
      {/*      <img
        src={logo.src}
        height="100%"
        width="100%"
        alt="Process Analytics Logo"
        style={{ cursor: 'pointer', margin: 'auto' }}
      />*/}
      <MKTypography variant="button" fontWeight="bold">
        {brand}
      </MKTypography>
    </MKBox>
  );
};
