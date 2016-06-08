var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    vendor: ["vue"]
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/public/",
    filename: "yue-ui.js"
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

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vue.js")
  ],

  devtool: "#inline-source-map"
};