import { landing } from './LandingContent';
// import TwitterCardImage from '../images/twitter_card.webp';
//import TwitterCardImage from '../images/twitter_card.png';

export const helmet = {
  description: landing.presentation, // This should not be too long (160 chars)  see https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/#querying-with-graphql
  profile: {
    logo: {
      src: 'https://82dc-89-87-164-185.ngrok.io/image/twitter_card.webp',
    },
  },
  twitter: {
    creator: '@ProcessAnalyti1',
    site: 'https://process-analytics.dev',
  },
};
