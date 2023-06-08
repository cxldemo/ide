const { join } = require('path');

const config = {
  template: "@ab-scaffold-ade/ab-ade-template",
  scaffoldScriptPackage: "@ab-scaffold-ade/ab-ade-scripts",
  plugins: {},
  output: join(__dirname, "../TaiBai/workspace")
}

module.exports = config;
