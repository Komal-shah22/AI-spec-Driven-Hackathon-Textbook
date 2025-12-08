import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs', '191'),
    routes: [
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/Introduction/ros2-chapter',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/Introduction/ros2-chapter', 'b22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/', 'a17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/', 'f70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-3/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-3/', '4f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-4/',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-4/', 'ab2'),
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
