import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs', '314'),
    routes: [
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/Introduction/ros2-chapter',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/Introduction/ros2-chapter', '5bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/', '264'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch1-intro',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch1-intro', 'c61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch2-comm',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch2-comm', 'd4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch3-first-app',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch3-first-app', 'eae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch4-advanced',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch4-advanced', 'ddc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ros2-robotic-nervous-system',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ros2-robotic-nervous-system', 'f86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/', '644'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/building-a-robot-model',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/building-a-robot-model', '56e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/integrating-sensors',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/integrating-sensors', '933'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/intro-to-digital-twins',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/intro-to-digital-twins', 'dfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/simulation-environments',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/simulation-environments', '2a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-3/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-3/', '016'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-4/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-4/', '977'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/ur/',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/', 'af6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
