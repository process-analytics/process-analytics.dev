import { About } from '../theme/types';
import Logo from '../images/logo.svg';
import WhyDiagram from '../images/why_diagram.png';

export const about: About = [
  {
    markdown: `Need to analyze and optimize your business processes?  
Then you need an overview of the execution data: process, data, actors (human and robots) and systems (forms, apps, 3rd party software).`,
    image: {
      src: WhyDiagram,
      alt: 'Email Voting Diagram',
      position: 'top',
    },
  },
  {
    markdown: `The Process Analytics project supports the creation of tools that can be used to:
- give an overview of the execution data
- help to make the right choices for process understanding and optimization`,
    withSeparator: false,
  },
  {
    markdown: `You can create and build applications to visualize:
- monitoring an individual process instance execution
- monitoring of all process instances for a selected process
- prediction of a process instance execution 
- other process data 
- drill down through process execution flow
- related resources data
- and more…`,
  },
  {
    markdown: `The Process Analytics project provides a set of libraries that can be integrated into automation tools, process mining, Business Intelligence tools, RPA, services orchestration, and others.

These libraries will make it easy to render processes, human tasks, automatic and robotic (RPA) talks, and system-related execution data.`,
    image: {
      src: Logo,
      alt: 'Process Analytics Logo',
      position: 'left',
    },
    withSeparator: false,
  },
];
