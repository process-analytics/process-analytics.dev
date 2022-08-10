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

import { Link as GatsbyLink } from 'gatsby';

// @mui material components
import MaterialLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// Material Kit 2 React components
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';

import { FooterRoutes, Link, Menu, SocialLink } from '../../types';

function CenteredFooter({ content, light }: CenteredFooterProps): JSX.Element {
  const { brand, socials, menus, copyright } = content;

  const year = new Date().getFullYear();
  const color = light ? 'tertiary' : 'secondary';

  const renderLinks =
    menus &&
    menus.map((menu: Menu) =>
      menu.items.map((item: Link) => (
        <MKTypography
          key={item.name}
          component={GatsbyLink}
          to={item.route}
          variant="body2"
          fontWeight="regular"
          textTransform="capitalize"
        >
          {item.name}
        </MKTypography>
      )),
    );

  const renderSocials =
    socials &&
    socials.map((social: Omit<SocialLink, 'name'>) => (
      <MKTypography
        key={social.url}
        component={MaterialLink}
        href={social.url}
        variant="body2"
        fontWeight="regular"
      >
        {social.icon}
      </MKTypography>
    ));

  const renderCopyright = (
    <MKTypography variant="caption">
      Copyright &copy; {year}{' '}
      <MKTypography
        component={GatsbyLink}
        to={brand.route}
        rel="noreferrer"
        variant="caption"
        fontWeight="regular"
        style={{ textDecoration: `underline dotted ${color}` }}
      >
        {brand.name}
      </MKTypography>{' '}
      by{' '}
      <MKTypography
        component={MaterialLink}
        href={copyright.url}
        target="_blank"
        rel="noreferrer"
        variant="caption"
      >
        {copyright.name}
      </MKTypography>
    </MKTypography>
  );

  return (
    <MKBox component="footer" py={6} color={color}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            spacing={3}
            mt={1}
            mb={3}
          >
            {renderSocials}
          </Stack>
        </Grid>

        <Grid item xs={12} lg={8} sx={{ textAlign: 'center' }}>
          {renderCopyright}
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  light: false,
};

// Typechecking props for the CenteredFooter
interface CenteredFooterProps {
  content: FooterRoutes;
  light?: boolean;
}

export default CenteredFooter;
