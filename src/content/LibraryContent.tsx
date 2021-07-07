import { Library } from '../theme/types';

export const libraries: Library[] = [
  {
    name: 'BPMN Visualization',
    description:
      'A TypeScript library for visualizing process execution data on BPMN diagrams.',
    example:
      'https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html',
    repository: 'https://github.com/process-analytics/bpmn-visualization-js',
    type: 'TypeScript',
  },
  {
    name: 'BPMN Visualization - R package',
    description:
      'An experimental implementation to embed the BPMN Visualization library in an R package',
    repository: 'https://github.com/csouchet/bpmn-visualization-R-poc',
    type: 'Experimental',
  },
  {
    name: 'BPMN Layout Generator',
    description:
      'Tools for generating the graphical layout of the BPMN process (BPMNDI Graphical Model) in BPMN files.',
    repository: 'https://github.com/process-analytics/bpmn-layout-generators',
    type: 'Experimental',
  },
  {
    name: 'mxGraph / maxGraph',
    description:
      'mxGraph is a fully client side JavaScript diagramming library that uses SVG and HTML for rendering.',
    repository: 'https://github.com/maxGraph/maxGraph/',
    type: 'Javascript',
  },
  // not displayed for now. We have an issue when this 4th card is displayed on a new line.
  // The card width is smaller than the cards on the line above
  // {
  //     name: 'mxgraph-svg2shape',
  //     description: 'mxGraph SVG to Shape translation tools.',
  //     repository: 'https://github.com/process-analytics/mxgraph-svg2shape',
  //     type: 'Java',
  // },
];
