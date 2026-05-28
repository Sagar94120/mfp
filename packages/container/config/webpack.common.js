const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    // HtmlWebpackPlugin is used to generate an HTML file that includes the webpack bundles. It takes a template HTML file and injects the necessary script tags for the bundled JavaScript files.
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
