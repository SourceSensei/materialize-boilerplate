const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "materialize.js",
  },
  devServer: {
    static: path.join(__dirname, "dist/"),
    devMiddleware: {
      publicPath: "/assets/",
    },
    port: 3000,
    hot: "only",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
