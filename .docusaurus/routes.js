import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4eb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e38'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fb8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ae0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8f7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '9ec'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd87'),
    routes: [
      {
        path: '/docs/Introduction/ros2-chapter',
        component: ComponentCreator('/docs/Introduction/ros2-chapter', 'a9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-1/',
        component: ComponentCreator('/docs/module-1/', '242'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-1/ch1-intro',
        component: ComponentCreator('/docs/module-1/ch1-intro', 'eb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-1/ch2-comm',
        component: ComponentCreator('/docs/module-1/ch2-comm', 'daf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-1/ch3-first-app',
        component: ComponentCreator('/docs/module-1/ch3-first-app', 'bd1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-1/ch4-advanced',
        component: ComponentCreator('/docs/module-1/ch4-advanced', '7c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-1/ros2-robotic-nervous-system',
        component: ComponentCreator('/docs/module-1/ros2-robotic-nervous-system', '73c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-2/',
        component: ComponentCreator('/docs/module-2/', '86e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-2/building-a-robot-model',
        component: ComponentCreator('/docs/module-2/building-a-robot-model', '61f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-2/integrating-sensors',
        component: ComponentCreator('/docs/module-2/integrating-sensors', 'f3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-2/intro-to-digital-twins',
        component: ComponentCreator('/docs/module-2/intro-to-digital-twins', '220'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-2/simulation-environments',
        component: ComponentCreator('/docs/module-2/simulation-environments', '5c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-3/',
        component: ComponentCreator('/docs/module-3/', 'ad0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module-4/',
        component: ComponentCreator('/docs/module-4/', 'b23'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '844'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
