const { join } = require('path');

const config = {
  template: "@ab-scaffold-enum/ab-enum-template",
  scaffoldScriptPackage: "@ab-scaffold-enum/ab-enum-scripts",
  plugins: {},
  output: join(__dirname, "../TaiBai/workspace")
}

module.exports = config;
