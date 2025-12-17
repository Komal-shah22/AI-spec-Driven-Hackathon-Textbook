import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug', 'dbd'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/config',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/config', '047'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/content',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/content', '640'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/globalData',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/globalData', '158'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/metadata',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/metadata', 'd93'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/registry',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/registry', '644'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/routes',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/__docusaurus/debug/routes', '79b'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/login',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/login', '0c0'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/signup',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/signup', '32b'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/docs',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs', 'ec5'),
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
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch1-intro',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch1-intro', 'cd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch2-comm',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch2-comm', 'f24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch3-first-app',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch3-first-app', '0bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch4-advanced',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ch4-advanced', 'ab2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ros2-robotic-nervous-system',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-1/ros2-robotic-nervous-system', '365'),
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
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-2/building-a-robot-model',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-2/building-a-robot-model', '39d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-2/integrating-sensors',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-2/integrating-sensors', '062'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-2/intro-to-digital-twins',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-2/intro-to-digital-twins', 'e6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/docs/module-2/simulation-environments',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/docs/module-2/simulation-environments', '01f'),
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
