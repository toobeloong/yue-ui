var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/public/",
    filename: "yue-ui.js",
    libraryTarget: "commonjs"
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },

  plugins: [],
  devtool: "#source-map"
};