const path = require('path');
const commonAlias = {
  vue$: 'vue/dist/vue.esm.js',
  '@': path.resolve(__dirname, '../src/pages'),
  'mis@': path.resolve(__dirname, '../src/pages/index'),
  'mis@assets': path.resolve(__dirname, '../src/pages/index/assets'),
  'mis@common': path.resolve(__dirname, '../src/pages/index/common'),
  'mis@router': path.resolve(__dirname, '../src/pages/index/router'),
  'mis@server': path.resolve(__dirname, '../src/pages/index/server'),
  'mis@store': path.resolve(__dirname, '../src/pages/index/store'),
  'mis@views': path.resolve(__dirname, '../src/pages/index/views')
};
module.exports = {
  commonAlias
};
