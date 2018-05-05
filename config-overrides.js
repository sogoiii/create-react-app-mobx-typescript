const { injectBabelPlugin } = require("react-app-rewired");
const rewireTypescript = require('react-app-rewire-typescript')
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
  config = rewireTypescript(config, env);
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  config = rewireMobX(config, env);
  return config;
};