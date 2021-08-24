import SvgLogo from '../images/logo.svg';
import { landing } from './LandingContent';

export const helmet = {
  description: landing.presentation, // This should not be too long (160 chars)  see https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/#querying-with-graphql
  profile: {
    logo: { src: SvgLogo },
  },
};
