const baseConfig = require('./webpack.config.js');

const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    require('cssnano')({
      preset: 'default',
    }),
  ],
});
