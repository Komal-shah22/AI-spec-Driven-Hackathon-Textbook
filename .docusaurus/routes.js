import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/docs',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs', 'fa8'),
    routes: [
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/Introduction/ros2-chapter',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/Introduction/ros2-chapter', '965'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-1/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-1/', '142'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-2/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-2/', '19f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-3/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-3/', '7b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-4/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-4/', 'fa0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/', 'be1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
