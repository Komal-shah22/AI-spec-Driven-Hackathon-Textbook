// // @ts-check
// // Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Humanoid Robotics Book',
//   tagline: 'The Robotic Nervous System',
//   url: 'https://your-docusaurus-site.com', // Replace with your actual site URL
//   baseUrl: '/',
//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',
//   favicon: 'img/favicon.ico', // You might need to create this image
//   organizationName: 'your-organization', // Replace with your GitHub org/user name
//   projectName: 'humanoid-robotics-book', // Replace with your repo name

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'ur'],
//   },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: require.resolve('./sidebars.js'),
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/your-organization/humanoid-robotics-book/tree/main/',
//           path: './docs', // This points to your existing docs directory
//         },
//         blog: {
//           showReadingTime: true,
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/your-organization/humanoid-robotics-book/tree/main/',
//         },
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'), // You might need to create this file
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       navbar: {
//         title: 'Humanoid Robotics Book',
//         logo: {
//           alt: '',
//           src: 'img/logo.svg', // You might need to create this image
//         },
//         items: [
//           {
//             type: 'doc',
//             docId: 'Introduction/ros2-chapter', // Point to your ROS 2 chapter
//             position: 'left',
//             label: 'Textbook ',
//           },
//           {
//             href: 'https://github.com/your-organization/humanoid-robotics-book',
//             label: 'GitHub',
//             position: 'right',
//           },
//           {
//             type: 'localeDropdown',
//             position: 'right',
//           }, {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               {
//                 label: 'ROS 2 Chapter',
//                 to: '/docs/Introduction/ros2-chapter',
//               },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Stack Overflow',
//                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discordapp.com/invite/docusaurus',
//               },
//               {
//                 label: 'Twitter',
//                 href: 'https://twitter.com/docusaurus',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'Blog',
//                 to: '/blog',
//               },
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/your-organization/humanoid-robotics-book',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robotics Book. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: lightCodeTheme,
//         darkTheme: darkCodeTheme,
//       },
//     }),
// };

// module.exports = config;





// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanoid Robotics Book',
  tagline: 'The Robotic Nervous System',
  url: 'https://your-docusaurus-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-organization',
  projectName: 'humanoid-robotics-book',

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
            'https://github.com/your-organization/humanoid-robotics-book/tree/main/',
          path: './docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/your-organization/humanoid-robotics-book/tree/main/',
        },
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
          href: 'https://github.com/your-organization/humanoid-robotics-book',
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
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/your-organization/humanoid-robotics-book' },
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




