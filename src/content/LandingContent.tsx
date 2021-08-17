import { Landing } from '../theme/types';
import { socialLinks } from './SocialLinkContent';

export const landing: Landing = {
  title: 'Process Analytics',
  // WARN: if it is longer than 160 characters, please do ellipsis in HelmetContent
  presentation:
    'Rapidly display meaningful Process Analytics components in your web pages using BPMN 2.0 notation and Open Source libraries.',
  socialLinks: socialLinks,
};
