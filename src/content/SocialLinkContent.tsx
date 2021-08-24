import { SocialLink } from '../theme/types';
import { helmet } from './HelmetContent';

export const socialLinks: SocialLink[] = [
  {
    url: 'https://github.com/process-analytics',
    name: 'GitHub Organization',
    icon: 'github',
  },
  {
    url: `https://twitter.com/${helmet.twitter.creator}`,
    name: 'Twitter',
    icon: 'twitter',
  },
];
