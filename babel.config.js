// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    // Add any Docusaurus-specific Babel plugins here if necessary
    // e.g. 'docusaurus-plugin-react-docgen' or similar
  ],
};