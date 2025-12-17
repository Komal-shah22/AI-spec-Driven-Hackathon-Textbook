// jest.config.js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    // Handle CSS imports (e.g., CSS modules)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@docusaurus/useDocusaurusContext$': '<rootDir>/__mocks__/@docusaurus/useDocusaurusContext.js',
    // Handle module aliases (e.g., if you use 'src' as a base path)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.docusaurus/', '/build/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
    '!src/reportWebVitals.js',
  ],
};
