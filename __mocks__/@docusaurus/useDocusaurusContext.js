// __mocks__/@docusaurus/useDocusaurusContext.js
// This mock is needed because Jest cannot resolve @docusaurus internal modules easily.

export default () => ({
  i18n: {
    currentLocale: 'en',
    locales: {
      en: {
        data: {
          'theme.auth.loading': { message: 'Loading...' },
          'theme.auth.logout': { message: 'Logout' },
          'theme.auth.login': { message: 'Login' },
          'theme.auth.signup': { message: 'Sign Up' },
        },
      },
      ur: { data: {} }, // Add ur locale data if needed for specific tests
    },
  },
});
