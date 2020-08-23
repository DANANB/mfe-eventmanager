const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dananb",
    projectName: "eventmanager",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: ["rxjs"],
  });
};
