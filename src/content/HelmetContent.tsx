import { landing } from './LandingContent';

export const helmet = {
  description: landing.presentation, // This should not be too long (160 chars)  see https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/#querying-with-graphql
  logo: {
    src: '/image/og_card.webp',
  },
  twitter: {
    username: '@ProcessAnalyti1',
  },
};
