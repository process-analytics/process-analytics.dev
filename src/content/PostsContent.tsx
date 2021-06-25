import {PostDescription} from "../theme/types";

const posts: PostDescription[] = [
    {
        title: 'BPMN Visualization 1st anniversary', // original title which would have been truncated: 'The bpmn-visualization project celebrates its 1st anniversary'
        text: 'To celebrate the first year of our work on the BPMN Visualization library, here\'s a look back about what has been achieved.',
        cover: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Qh5L0TzO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rf1gct67udbt0vmgqpyo.png', // from the dev.to article
        url: 'https://www.linkedin.com/pulse/bpmn-visualization-project-celebrates-its-1st-thomas-bouffard/', // https://dev.to/tbouffard/the-bpmn-visualization-project-celebrates-its-1st-anniversary-4ae2
        date: 'May 2021',
        time: 4
    },
    {
        title: 'Automated visual regression testing', // original title which would have been truncated: 'Automated visual regression testing with TypeScript, Playwright, Jest and Jest Image Snapshot'
        text: 'Learn how to set up and to run automated visual regression testing with TypeScript, Playwright, Jest and Jest Image Snapshot.',
        cover: 'https://miro.medium.com/max/400/1*qGWieJvk7s1t7pzK82Lj6A.png', // from the medium article
        url: 'https://medium.com/nerd-for-tech/automated-visual-regression-testing-with-typescript-playwright-jest-and-jest-image-snapshot-86db6f3364f5',
        date: 'Avril 2021',
        time: 6
    },
    {
        title: 'A Bonita Custom Widget using BPMN Visualization', // original title which would have been truncated: '[Bonita UI Designer] creating Custom widget for BPMN Visualization'
        text: 'A step-by-step tutorial to integrate the BPMN Visualization library in a Bonita UID custom widget.',
        cover: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8NRwpUAl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tufyv45n77jatwf7ygz5.png', // from the dev.to article
        url: 'https://community.bonitasoft.com/blog/bonita-ui-designer-custom-widget-bpmn-visualization', // https://dev.to/aibcmars/bonita-ui-designer-creating-custom-widget-for-bpmn-visualization-44lk
        date: 'February 2021',
        time: 3
    },
];

export const postsContent = {
    posts: posts,
};
