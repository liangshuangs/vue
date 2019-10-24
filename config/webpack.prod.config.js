
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.js'); // 引入基本配置

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
  ]
});