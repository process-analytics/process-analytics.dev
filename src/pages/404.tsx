/**
 * Copyright 2021 Bonitasoft S.A.
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

import { HeadProps, Link } from 'gatsby';

import { Box } from '@mui/material';

import { DataProps } from '../hooks';

import { footerContent, headerContent } from '../content';

import { Layout, Section, SEO, MKTypography } from '../components';
import { PAGE } from '../helper';

import Img from '../assets/images/404.png';

const NotFoundPage: FC = () => (
  <Layout footerContent={footerContent} headerContent={headerContent}>
    <Section>
      <MKTypography variant="h1" textAlign="center">
        <Box marginX="auto" width={['50%', '31.25rem']}>
          <img src={Img} alt="404 not found" style={{ margin: 'auto' }} />
        </Box>
      </MKTypography>
      <MKTypography
        variant="body1"
        color="secondary"
        textAlign="center"
        fontWeight="bold"
      >
        OOPS, LOOKS LIKE THE PAGE CANNOT BE FOUND...
      </MKTypography>
      <MKTypography variant="body2" textAlign="center" marginY="0.625rem">
        GO BACK TO THE{' '}
        <strong>
          <Link to="/">HOME PAGE</Link>
        </strong>
      </MKTypography>
    </Section>
  </Layout>
);
export default NotFoundPage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }: HeadProps<DataProps>): JSX.Element => (
  <SEO title={PAGE.notFound} pathname={location.pathname} />
);