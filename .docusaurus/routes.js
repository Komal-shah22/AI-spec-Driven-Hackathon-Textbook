import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ur/docs',
    component: ComponentCreator('/ur/docs', '1ea'),
    routes: [
      {
        path: '/ur/docs/Introduction/ros2-chapter',
        component: ComponentCreator('/ur/docs/Introduction/ros2-chapter', '58d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-1/',
        component: ComponentCreator('/ur/docs/module-1/', 'c78'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-1/ch1-intro',
        component: ComponentCreator('/ur/docs/module-1/ch1-intro', 'a88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-1/ch2-comm',
        component: ComponentCreator('/ur/docs/module-1/ch2-comm', 'b55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-1/ch3-first-app',
        component: ComponentCreator('/ur/docs/module-1/ch3-first-app', '3e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-1/ch4-advanced',
        component: ComponentCreator('/ur/docs/module-1/ch4-advanced', 'f42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-1/ros2-robotic-nervous-system',
        component: ComponentCreator('/ur/docs/module-1/ros2-robotic-nervous-system', 'cfd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-2/',
        component: ComponentCreator('/ur/docs/module-2/', '1ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-2/building-a-robot-model',
        component: ComponentCreator('/ur/docs/module-2/building-a-robot-model', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-2/integrating-sensors',
        component: ComponentCreator('/ur/docs/module-2/integrating-sensors', '5f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-2/intro-to-digital-twins',
        component: ComponentCreator('/ur/docs/module-2/intro-to-digital-twins', '466'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-2/simulation-environments',
        component: ComponentCreator('/ur/docs/module-2/simulation-environments', 'e06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-3/',
        component: ComponentCreator('/ur/docs/module-3/', 'a0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ur/docs/module-4/',
        component: ComponentCreator('/ur/docs/module-4/', '2cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ur/',
    component: ComponentCreator('/ur/', '0fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
