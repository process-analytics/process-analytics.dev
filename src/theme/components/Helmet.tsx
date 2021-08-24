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
  const { description, logo, twitter } = helmet;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  console.log(data.site.siteMetadata.siteUrl);
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
      <meta name="og:image" content={logo.src} />
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
