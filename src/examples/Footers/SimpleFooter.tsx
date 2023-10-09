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
import { LinkContent, MKBox2, MKTypography2 } from '../../components';

import React from 'react';
import { fontSize } from '../../assets/theme';

function SimpleFooter({
  company,
  links,
  light,
}: SimpleFooterProps): JSX.Element {
  const { href, name } = company ?? { href: '#', name: 'Creative Tim' };

  const renderLinks = (): undefined | JSX.Element[] =>
    links &&
    links.map((link, key) => (
      <MKBox2
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <MuiLink href={link.url} target="_blank">
          <MKTypography2
            variant="button"
            fontWeight="regular"
            color={light ? 'white' : 'text'}
          >
            {link.name}
          </MKTypography2>
        </MuiLink>
      </MKBox2>
    ));

  return (
    <Container>
      <MKBox2
        width="100%"
        display="flex"
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox2
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? 'white' : 'text'}
          fontSize={fontSize.sm}
        >
          &copy; {new Date().getFullYear()}, made with
          <MKBox2
            fontSize={fontSize.md}
            color={light ? 'white' : 'text'}
            mb={-0.5}
            mx={0.25}
          >
            <Favorite color="inherit" fontSize="inherit" />
          </MKBox2>
          by
          <MuiLink href={href} target="_blank">
            <MKTypography2
              variant="button"
              fontWeight="medium"
              color={light ? 'white' : 'dark'}
            >
              &nbsp;{name}&nbsp;
            </MKTypography2>
          </MuiLink>
          for a better web.
        </MKBox2>
        <MKBox2
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
        </MKBox2>
      </MKBox2>
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
  links?: Omit<LinkContent, 'description' | 'route'>[];
  light?: boolean;
}

export default SimpleFooter;
