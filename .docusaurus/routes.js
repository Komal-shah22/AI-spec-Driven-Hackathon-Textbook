import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/ur/login',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/login', 'e96'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/ur/signup',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/signup', 'b34'),
    exact: true
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs', '28d'),
    routes: [
      {
        path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs',
        component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs', '124'),
        routes: [
          {
            path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs',
            component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs', 'ffb'),
            routes: [
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/Introduction/ros2-chapter',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/Introduction/ros2-chapter', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/', '874'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch1-intro',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch1-intro', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch2-comm',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch2-comm', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch3-first-app',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch3-first-app', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch4-advanced',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ch4-advanced', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ros2-robotic-nervous-system',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-1/ros2-robotic-nervous-system', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/', '3a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/building-a-robot-model',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/building-a-robot-model', '9f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/integrating-sensors',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/integrating-sensors', 'f36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/intro-to-digital-twins',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/intro-to-digital-twins', '66e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/simulation-environments',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-2/simulation-environments', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-3/',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-3/', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-4/',
                component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/docs/module-4/', 'cb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/AI-spec-Driven-Hackathon-Textbook/ur/',
    component: ComponentCreator('/AI-spec-Driven-Hackathon-Textbook/ur/', '235'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
