const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJSON = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    // historyApiFallback: is used to serve index.html for all 404 routes, which is necessary for client-side routing in single-page applications.
    historyApiFallback: {
      index: "./index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
