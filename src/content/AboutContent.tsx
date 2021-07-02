import { About } from '../theme/types';
import Logo from '../images/logo.svg';

export const about: About = {
  markdown: `Set of open source resources that developers can use to build BPMN-based Process Analytics software to visualize Process-Execution-related data.
Hello 👋 I'm Mate a gatsby starter which is focus on simplicity and extensibility. It's build with Gatsby(duh), [Rebass](https://jxnblk.com/rebass/) (styled-component system) and [Contentful](https://www.contentful.com/).
The starter will give you 4 sections (it's really easy to add more if you want 😃):
* [Landing:](#home) Displays a nice greeting with your name, also your roles (what you  are) and all your social links.
* [About:](#about) Show the about section where you can write about who you are, what you like to do, etc. Also you can add a photo next to it!
* [Project:](#projects) Displays a card for all your project that you've made and also the posibility to link with github or and external link.
* [Writing:](#writing) Take the information about your medium user and show up to 6 stories as cards with the link to Medium.
  `,
  image: {
    src: Logo,
    alt: 'Process Analytics Logo',
  },
};
