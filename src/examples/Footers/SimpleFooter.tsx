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

import { Favorite } from '@mui/icons-material';
// @mui material components
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';

// Material Kit 2 React components
import { MKBox } from '../../components/MKBox';
import { MKTypography } from '../../components/MKTypography';

// Material Kit 2 React base styles
import typography from '../../assets/theme/base/typography';

import React from 'react';
import { Link } from '../../types';

function SimpleFooter({
  company,
  links,
  light,
}: SimpleFooterProps): JSX.Element {
  const { href, name } = company ?? { href: '#', name: 'Creative Tim' };
  const { size } = typography;

  const renderLinks = (): undefined | JSX.Element[] =>
    links &&
    links.map((link, key) => (
      <MKBox
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <MuiLink href={link.href} target="_blank">
          <MKTypography
            variant="button"
            fontWeight="regular"
            color={light ? 'white' : 'text'}
          >
            {link.name}
          </MKTypography>
        </MuiLink>
      </MKBox>
    ));

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? 'white' : 'text'}
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()}, made with
          <MKBox
            fontSize={size.md}
            color={light ? 'white' : 'text'}
            mb={-0.5}
            mx={0.25}
          >
            <Favorite color="inherit" fontSize="inherit" />
          </MKBox>
          by
          <MuiLink href={href} target="_blank">
            <MKTypography
              variant="button"
              fontWeight="medium"
              color={light ? 'white' : 'dark'}
            >
              &nbsp;{name}&nbsp;
            </MKTypography>
          </MuiLink>
          for a better web.
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            listStyle: 'none',
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up('lg')]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  company: { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
  links: [
    { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
    { href: 'https://www.creative-tim.com/presentation', name: 'About Us' },
    { href: 'https://www.creative-tim.com/blog', name: 'Blog' },
    { href: 'https://www.creative-tim.com/license', name: 'License' },
  ],
  light: false,
};

// Typechecking props for the SimpleFooter
interface SimpleFooterProps {
  company?: { href: string; name: string };
  links?: Omit<Link, 'description' | 'route'>[];
  light?: boolean;
}

export default SimpleFooter;
