'use strict';
module.exports = () => ({
  files: [
    // { pattern: 'src/app/test/unit/ui5-bootstrap.js', instrument: false },
    'app/**/*.js',
  ],
  tests: [
    'tests/**/*.js',
  ],
  // testFramework: 'qunit',
  debug: true,
  testFramework: 'mocha',
  env: {
    type: 'node',
    runner: 'node',
    env: 'NODE_ENV=test'
  },
  workers: {
    recycle: true,
    initial: 1,
    regular: 1
  },
});
