// // @ts-check
// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Humanoid Robotics Book',
//   tagline: 'The Robotic Nervous System',
//   url: 'https://Komal-shah22.github.io', // <-- GitHub Pages URL
//   baseUrl: '/', // <-- Repository name
//   onBrokenLinks: 'ignore', // Ignore broken links (no blog folder)
//   onBrokenMarkdownLinks: 'warn',
//   favicon: 'img/favicon.ico',
//   organizationName: 'Komal-shah22', // GitHub username
//   projectName: 'AI-spec-Driven-Hackathon-Textbook', // Repository name

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'ur'],
//   },

//   presets: [
//     [
//       'classic',
//       ({
//         docs: {
//           sidebarPath: require.resolve('./sidebars.js'),
//           editUrl:
//             'https://github.com/Komal-shah22/AI-spec-Driven-Hackathon-Textbook/tree/main/',
//           path: './docs',
//         },
//         blog: false, // Blog disabled
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
//       }),
//     ],
//   ],

//   themeConfig: ({
//     navbar: {
//       title: 'Humanoid Robotics Book',
//       logo: {
//         alt: '',
//         src: 'img/logo.svg',
//       },
//       items: [
//         {
//           type: 'doc',
//           docId: 'Introduction/ros2-chapter',
//           position: 'left',
//           label: 'Textbook',
//         },
//         {
//           href: 'https://github.com/Komal-shah22/AI-spec-Driven-Hackathon-Textbook',
//           label: 'GitHub',
//           position: 'right',
//         },
//         {
//           type: 'localeDropdown',
//           position: 'right',
//         },
//       ],
//     },

//     footer: {
//       style: 'dark',
//       links: [
//         {
//           title: 'Docs',
//           items: [
//             {
//               label: 'ROS 2 Chapter',
//               to: '/docs/Introduction/ros2-chapter',
//             },
//           ],
//         },
//         {
//           title: 'Community',
//           items: [
//             { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
//             { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
//             { label: 'Twitter', href: 'https://twitter.com/docusaurus' },
//           ],
//         },
//         {
//           title: 'More',
//           items: [
//             { label: 'GitHub', href: 'https://github.com/Komal-shah22/AI-spec-Driven-Hackathon-Textbook' },
//           ],
//         },
//       ],
//       copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robotics Book. Built with Docusaurus.`,
//     },

//     prism: {
//       theme: lightCodeTheme,
//       darkTheme: darkCodeTheme,
//     },
//   }),
// };

// module.exports = config;




// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanoid Robotics Book',
  tagline: 'The Robotic Nervous System',
  url: 'https://Komal-shah22.github.io', // GitHub Pages URL
  baseUrl: '/AI-spec-Driven-Hackathon-Textbook/', // Repository site ke liye
  onBrokenLinks: 'ignore', // Ignore broken links (no blog folder)
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Komal-shah22', // GitHub username
  projectName: 'AI-spec-Driven-Hackathon-Textbook', // Repository name

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Komal-shah22/AI-spec-Driven-Hackathon-Textbook/tree/main/',
          path: './docs',
        },
        blog: false, // Blog disabled
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'Humanoid Robotics Book',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Introduction/ros2-chapter',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/Komal-shah22/AI-spec-Driven-Hackathon-Textbook',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'ROS 2 Chapter',
              to: '/docs/Introduction/ros2-chapter',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'Twitter', href: 'https://twitter.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/Komal-shah22/AI-spec-Driven-Hackathon-Textbook' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robotics Book. Built with Docusaurus.`,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
