import { IconName } from '@fortawesome/fontawesome-svg-core';
import { DefaultTheme } from 'styled-components';
import { Theme as RebassTheme } from '@rebass/preset';

export type Theme = DefaultTheme & RebassTheme;

export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Library = {
  name: string;
  description: string;
  example: string;
  repository: string;
  type: string;
};

export type About = {
  markdown: string;
  profile: Image;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName;
};

export type PostDescription = {
  title: string;
  text: string;
  cover: string;
  url: string;
  date: string;
  time: number;
};

export type Landing = {
  title: string;
  roles: string[];
  socialLinks: SocialLink[];
};
