const { createConfig } = require('@ng-rspack/build');

module.exports = createConfig({
  root: __dirname,
  index: './src/index.html',
  browser: './src/main.ts',

  tsconfigPath: './tsconfig.app.json',
  polyfills: ['zone.js'],
  assets: ['./public'],
  styles: ['./src/styles.css'],
  scripts: [],
  jit: false,
  inlineStylesExtension: 'css',
  fileReplacements: [],
  hasServer: false,
  skipTypeChecking: false,
});
