const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const { entry, htmlPlugin } = require('./entry');
const { commonAlias } = require('./base');

module.exports = {
  mode: process.env.NODE_ENV,
  // 警告 webpack 的性能提示
  performance: {
    hints: 'warning',
    // 入口起点的最大体积
    maxEntrypointSize: 50000000,
    // 生成文件的最大体积
    maxAssetSize: 30000000,
    // 只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    }
  },
  entry: entry,
  output: {
    filename: '[name].bundle.js',
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: 'anonymous',
    path: path.join(__dirname, '../dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'initial', // 表示从哪些chunks里面抽取代码，除了三个可选字符串值 initial、async、all 之外，还可以通过函数来过滤所需的
      minSize: 10000, // 表示抽取出来的文件在压缩前的最小大小
      maxSize: 0, // 没有限制
      minChunks: 3, // 共享最少的chunk数，使用次数超过这个值才会被提取
      maxAsyncRequests: 5, // 最多的异步chunk数
      maxInitialRequests: 5, // 最多的同步chunks数
      automaticNameDelimiter: '~', // 多页面共用chunk命名分隔符
      name: true,
      cacheGroups: { // 声明公共chunk
        vendor: {
          // 过滤需要打入的模块
          test: module => {
            if (module.resource) {
              const include = [/[\\/]node_modules[\\/]/].every(reg => {
                return reg.test(module.resource);
              });
              const exclude = [/[\\/]node_modules[\\/](vue|vuex|element-ui)/].some(reg => {
                return reg.test(module.resource);
              });
              return include && !exclude;
            }
            return false;
          },
          name: 'vendor',
          priority: 50, // 确定模块打入的优先级
          reuseExistingChunk: true // 使用复用已经存在的模块
        },
        vue: {
          test ({ resource }) {
            return /[\\/]node_modules[\\/](vue|vuex)/.test(resource);
          },
          name: 'vue',
          priority: 20,
          reuseExistingChunk: true
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd/,
          name: 'antd',
          priority: 15,
          reuseExistingChunk: true
        },
        elementUI: {
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          name: 'elementUI',
          priority: 15,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: commonAlias
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader' // 处理vue
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory' // 缓存 loader 的执行结果 https://webpack.docschina.org/loaders/babel-loader/
        }
      },
      {
        test: /\.css|\.less|\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader', 'sass-loader'] // 处理css
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader?limit=10000&name=assets/[name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      }
    ]
  },
  // plugin 可以介入整个构建过程任何阶段。例如：报告构建耗时、修改输出代码支持主域重试、添加构建进度报告、代码压缩、资源替换等很多能力都在这里实现
  plugins: [
    new VueLoaderPlugin(),
    ...htmlPlugin,
    new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin() // 展示出打包后的各个bundle所依赖的模块
  ],
  stats: { children: false }
};
