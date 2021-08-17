import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { withTheme } from 'styled-components';
import { Theme } from '../types';
import { helmet } from '../../content/HelmetContent';

type Props = {
  theme: Theme;
  title: string;
};

const LANG = 'en';

const Helmet = ({ theme, title }: Props): JSX.Element => {
  const { description, profile } = helmet;

  // TODO add keywords
  // TODO image info and twitter info
  //         .concat(
  //           metaImage
  //             ? [
  //                 {
  //                   property: "og:image",
  //                   content: image,
  //                 },
  //                 {
  //                   property: "og:image:width",
  //                   content: metaImage.width,
  //                 },
  //                 {
  //                   property: "og:image:height",
  //                   content: metaImage.height,
  //                 },
  //                 {
  //                   name: "twitter:card",
  //                   content: "summary_large_image",
  //                 },
  //               ]
  //             : [
  //                 {
  //                   name: "twitter:card",
  //                   content: "summary",
  //                 },
  //               ]
  //         )
  return (
    <ReactHelmet htmlAttributes={{ lang: LANG }}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
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
