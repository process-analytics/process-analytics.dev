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
import type { PropsWithChildren } from 'react';
import React from 'react';

import { ThemeProvider } from '@mui/material';

import { useSiteMetadata } from '../hooks';
import { landingContent } from '../content';
import { theme } from '../assets/theme';

const LANG = 'en';

export interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
}

export const SEO = ({
  title,
  description = landingContent.presentation,
  pathname,
  children,
}: PropsWithChildren<SEOProps>): JSX.Element => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription, // This should not be too long (160 chars)  see https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/#querying-with-graphql
    image: `${siteUrl}/image/og_card.webp`,
    url: `${siteUrl}${pathname || ''}`,
    twitterUsername,
    metaKeywords: [
      'bpmn',
      'process',
      'analytics',
      'developers',
      'open source',
    ].join(','),
  };

  return (
    <ThemeProvider theme={theme}>
      <html lang={LANG} />
      <title>{seo.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.metaKeywords} />

      <meta name="theme-color" content={theme.palette.background.default} />
      <meta itemProp="name" content={seo.title} />
      <meta itemProp="description" content={seo.description} />

      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:site_name" content={seo.title} />
      <meta name="og:locale" content={LANG} />
      <meta name="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:site" content={seo.twitterUsername} />

      <meta
        name="google-site-verification"
        content="qp3t994P7OXLorDDzsmT0N_-KaxDwvjuNuJbxkbjKrM"
      />

      {children}
    </ThemeProvider>
  );
};
