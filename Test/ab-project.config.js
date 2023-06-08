const { join } = require('path');

const config = {
  template: "@ab-scaffold-trade/ab-trade-template",
  scaffoldScriptPackage: "@ab-scaffold-trade/ab-trade-scripts",
  plugins: {},
  output: join(__dirname, "../TaiBai/workspace")
}

module.exports = config;
