import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { withTheme } from 'styled-components';
import { Theme } from '../types';
import { helmet } from '../../content/HelmetContent';

type Props = {
  theme: Theme;
  title: string;
};

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
    <ReactHelmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {/*<link rel="shortcut icon" href={`https:${profile.favicon32.src}`} />*/}
      <meta name="theme-color" content={theme.colors.background} />
      {/*<meta name="image" content={`https:${profile.favicon32.src}`} />*/}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      {/*<meta itemProp="image" content={`https:${profile.favicon32.src}`} />*/}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={`${profile.bigIcon.src}`} />
      <meta name="og:site_name" content={title} />
      {/*TODO en? taken from somewhere else? */}
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/*TODO not sure we want to use the same for both*/}
      <meta name="twitter:image" content={`${profile.bigIcon.src}`} />
      <meta name="twitter:image:src" content={`${profile.bigIcon.src}`} />

      {/*<link*/}
      {/*  rel="apple-touch-icon"*/}
      {/*  sizes="180x180"*/}
      {/*  href={`https:${profile.appleIcon.src}`}*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  sizes="32x32"*/}
      {/*  href={`https:${profile.favicon32.src}`}*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  sizes="16x16"*/}
      {/*  href={`https:${profile.favicon16.src}`}*/}
      {/*/>*/}
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
