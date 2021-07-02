import { About } from '../theme/types';
import Logo from '../images/logo.svg';

const aboutPart1: About = {
  markdown: `Hello 👋 I'm Mate a gatsby starter which is focus on simplicity and extensibility. It's build with Gatsby(duh), [Rebass](https://jxnblk.com/rebass/) (styled-component system) and [Contentful](https://www.contentful.com/).
The starter will give you 4 sections (it's really easy to add more if you want 😃):
* [Landing:](#home) Displays a nice greeting with your name, also your roles (what you  are) and all your social links.
* [About:](#about) Show the about section where you can write about who you are, what you like to do, etc. Also you can add a photo next to it!
* [Project:](#projects) Displays a card for all your project that you've made and also the possibility to link with github or and external link.
* [Writing:](#writing) Take the information about your medium user and show up to 6 stories as cards with the link to Medium.
  `,
  image: {
    src: Logo,
    alt: 'Process Analytics Logo',
  },
};

const aboutPart2: About = {
  markdown: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique nec tellus et vulputate. Aliquam a lacinia libero, non facilisis elit. Vivamus tempor gravida diam nec efficitur. Aliquam accumsan orci id mi tincidunt, sed fermentum turpis tristique. Morbi vitae faucibus ante. Quisque enim turpis, faucibus sed ante in, feugiat convallis lorem. Pellentesque tincidunt at libero luctus iaculis. Mauris vel volutpat nulla, in aliquet mi.`,
  image: {
    src: Logo,
    alt: 'Process Analytics Logo',
  },
};

const aboutPart3: About = {
  markdown: `Maecenas pharetra maximus nisl a dignissim. Aliquam malesuada nisl nisl, quis fermentum orci malesuada a. Donec a ex sed tortor auctor interdum quis quis justo. Quisque convallis pretium eros non vulputate. Curabitur nisi eros, semper at varius et, blandit ut risus. Sed accumsan tellus tortor, nec lobortis dolor posuere hendrerit. Donec et dui semper, ultricies turpis eu, egestas magna. Ut lacus purus, faucibus eget interdum ut, dignissim ac justo. Cras fringilla pharetra enim, id porta justo accumsan non. Suspendisse nec ligula at magna malesuada fermentum quis nec turpis. Nam viverra, tellus sit amet dictum fringilla, sem lectus varius nulla, id viverra urna nisl quis neque.`,
  image: {
    src: Logo,
    alt: 'Process Analytics Logo',
  },
};

export const abouts = [aboutPart1, aboutPart2, aboutPart3];
