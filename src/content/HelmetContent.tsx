import SvgLogoWhite from '../images/logo_white.svg';
import { landing } from './LandingContent';

export const helmet = {
  description: landing.presentation, // TODO ensure this is not too long (160 chars) see https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/#querying-with-graphql
  profile: {
    logo: { src: SvgLogoWhite },
  },
};
