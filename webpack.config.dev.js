const baseConfig = require('./webpack.config.js');

const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    index: 'home/home.html',
  },
});
