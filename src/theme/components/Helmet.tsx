import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { withTheme } from 'styled-components';
import { Theme } from '../types';
import { helmet } from '../../content/HelmetContent';

type Props = {
  theme: Theme;
  title: string;
  keywords?: string[];
};

const LANG = 'en';

const Helmet = ({ theme, title, keywords }: Props): JSX.Element => {
  const { description, profile } = helmet;

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
      <meta name="og:image" content={`${profile.logo.src}`} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content={LANG} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/*no need for twitter:image:src here as the svg image is inline in base64 */}
      <meta name="twitter:image" content={`${profile.logo.src}`} />
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
