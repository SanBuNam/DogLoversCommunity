const path = require("path"); // writting webpack.config in ES6 might create error

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, `src`, `app`),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true, // needed for react router
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
      },
    ],
  },
};
