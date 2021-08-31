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
import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { withTheme } from 'styled-components';
import { Theme } from '../types';
import { helmet } from '../../content/HelmetContent';
import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  theme: Theme;
  title: string;
  keywords?: string[];
};

const LANG = 'en';

const Helmet = ({ theme, title, keywords }: Props): JSX.Element => {
  const { description, image_path, twitter } = helmet;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const metaKeywords = (
    keywords ?? ['bpmn', 'process', 'analytics', 'developers', 'open source']
  ).join(',');

  return (
    <ReactHelmet htmlAttributes={{ lang: LANG }}>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="theme-color" content={theme.colors.background} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta
        name="og:image"
        content={data.site.siteMetadata.siteUrl + image_path}
      />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content={LANG} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter.username} />
      <meta name="twitter:creator" content={twitter.username} />
      <meta name="twitter:title" content={title} />
      <meta
        name="google-site-verification"
        content="qp3t994P7OXLorDDzsmT0N_-KaxDwvjuNuJbxkbjKrM"
      />
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
