'use strict';

module.exports = {
  extends: [
    'hendrikbeneke/rules/best-practices',
    'hendrikbeneke/rules/errors',
    'hendrikbeneke/rules/legacy',
    'hendrikbeneke/rules/node',
    'hendrikbeneke/rules/strict',
    'hendrikbeneke/rules/style',
    'hendrikbeneke/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: true,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
