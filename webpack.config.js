const path = require("path");

module.exports = {

  entry: "./src/index.js",

  output: {
    libraryTarget: "this"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },

  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
    public: "localhost:3000"
  }

};
