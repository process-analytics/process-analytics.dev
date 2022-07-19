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

// @mui material components
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHubIcon from '@mui/icons-material/GitHub';

// Material Kit 2 React components
import MKBox from './material-kit/MKBox';
import MKTypography from './material-kit/MKTypography';

import React from 'react';

function CenteredFooter({
  company,
  links,
  socials,
  light,
}: CenteredFooterProps): JSX.Element {
  const { href, name } = company ?? {};

  const year = new Date().getFullYear();

  const renderLinks =
    links &&
    links.map((link: any) => (
      <MKTypography
        key={link.name}
        component={Link}
        href={link.href}
        variant="body2"
        color={light ? 'white' : 'secondary'}
        fontWeight="regular"
      >
        {link.name}
      </MKTypography>
    ));

  const renderSocials =
    socials &&
    socials.map((social: any) => (
      <MKTypography
        key={social.link}
        component={Link}
        href={social.link}
        variant="body2"
        color={light ? 'white' : 'secondary'}
        fontWeight="regular"
      >
        {social.icon}
      </MKTypography>
    ));

  return (
    <MKBox component="footer" py={6}>
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
          <MKTypography variant="body2" color={light ? 'white' : 'secondary'}>
            Copyright &copy; {year} Material by{' '}
            <MKTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? 'white' : 'secondary'}
            >
              {name}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  company: { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
  links: [
    { href: 'https://www.creative-tim.com/', name: 'Company' },
    { href: 'https://www.creative-tim.com/presentation', name: 'About Us' },
    { href: 'https://www.creative-tim.com/presentation', name: 'Team' },
    { href: 'https://www.creative-tim.com/templates/react', name: 'Products' },
    { href: 'https://www.creative-tim.com/blog', name: 'Blog' },
    { href: 'https://www.creative-tim.com/license', name: 'License' },
  ],
  socials: [
    {
      icon: <FacebookIcon fontSize="small" />,
      link: 'https://www.facebook.com/CreativeTim/',
    },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: 'https://twitter.com/creativetim',
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: 'https://www.instagram.com/creativetimofficial/',
    },
    {
      icon: <PinterestIcon fontSize="small" />,
      link: 'https://ro.pinterest.com/thecreativetim/',
    },

    {
      icon: <GitHubIcon fontSize="small" />,
      link: 'https://github.com/creativetimofficial',
    },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
interface CenteredFooterProps {
  company?: { href: string; name: string };
  links?: any[];
  socials?: any[];
  light?: boolean;
}

export default CenteredFooter;
