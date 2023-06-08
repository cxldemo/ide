const { join } = require('path');

const config = {
  template: "@ab-scaffold-lfc/ab-lfc-template",
  scaffoldScriptPackage: "@ab-scaffold-lfc/ab-lfc-scripts",
  plugins: {},
  output: join(__dirname, "../TaiBai/workspace")
}

module.exports = config;
