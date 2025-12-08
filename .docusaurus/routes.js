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
    component: ComponentCreator('/docs', '181'),
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
        path: '/docs/module-2/',
        component: ComponentCreator('/docs/module-2/', '86e'),
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
