const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');
const PAGE_DIR = './src/pages/'; // 页面目录
const entry = {};
const htmlPlugin = [];

// 遍历页面目录
const getPages = () => {
  return fs.readdirSync(PAGE_DIR).filter(item => {
    if (item === '.DS_Store') return false;
    let filePath = './' + path.join(PAGE_DIR, item, 'index.js');
    const fileHtml = path.join(PAGE_DIR, item, 'index.html');
    const name = path.basename(item);
    // 添加runtime脚本，和页面入口脚本
    const chunks = [name];
    if (!fs.existsSync(filePath)) {
      filePath = `${filePath}x`; // jsx
    }
    htmlPlugin.push(new htmlWebpackPlugin({
      minfy: false,
      filename: `${item}.html`,
      template: fileHtml,
      inject: true,
      chunks,
      minify: {
        removeComments: true, // 删除 html 中的注释
        collapseWhitespace: true // 删除 html 中空格
      }
    }));
    entry[item] = filePath;
  });
};
getPages();
// 导出配置
module.exports = {
  entry,
  htmlPlugin
};
