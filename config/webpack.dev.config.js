
const merge = require('webpack-merge');
// 引入基本配置
const baseConfig = require('./webpack.config.js');
module.exports = merge(baseConfig, {
  devServer: {
    host: 'localhost',
    port: 8888,
    hot: true
  }
});