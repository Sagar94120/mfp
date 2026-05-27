const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    // historyApiFallback: is used to serve index.html for all 404 routes, which is necessary for client-side routing in single-page applications.
    historyApiFallback: {
      index: "./index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJSON.dependencies,
    }),
    // HtmlWebpackPlugin is used to generate an HTML file that includes the webpack bundles. It takes a template HTML file and injects the necessary script tags for the bundled JavaScript files.
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
