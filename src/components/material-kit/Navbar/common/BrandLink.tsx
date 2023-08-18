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

import React, { FC } from 'react';

import { Link as GatsbyLink } from 'gatsby-link';

import { LinkContent } from '../../../';

import { MKBox, MKTypography } from '../..';

export type BrandContent = Required<Omit<LinkContent, 'description'>> & {
  logo: { primary: string; light: string };
};

type BrandLinkProps = {
  style: {
    isTransparent?: boolean;
    isRelative?: boolean;
  };
  content: BrandContent;
};

export const BrandLink: FC<BrandLinkProps> = ({
  style: { isTransparent, isRelative },
  content,
}) => (
  <MKBox
    component={GatsbyLink}
    to="/"
    pl={isRelative || isTransparent ? 0 : { xs: 0, lg: 1 }}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    height="100%"
  >
    <img
      src={content.logo.primary}
      alt={content.name}
      style={{
        cursor: 'pointer',
        maxWidth: '52px',
        height: 'auto',
      }}
    />

    <MKTypography
      variant="button"
      fontWeight="bold"
      lineHeight={1}
      ml={{ xs: 0.6, sm: 1 }}
      py={isTransparent ? 1.5 : 0.75}
    >
      {content.name}
    </MKTypography>
  </MKBox>
);
