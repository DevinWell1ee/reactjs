const webpack = require('webpack');
const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const safeParser = require('postcss-safe-parser');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],

  output: {
    path: path.resolve(__dirname, './dist'), //打包后的文件存放的地方
    publicPath: '/',
    filename: 'bundle.js', //打包后输出文件的文件名
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'img/'   // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../' //针对设置背景图
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),

    // 拆分后会把css文件放到dist目录下的css/*.css
    new ExtractTextWebpackPlugin('css/[name].css'),

    new OptimizeCSSAssetsPlugin({ // 压缩 css
      assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
          discardComments: { removeAll: true },
          // 避免 cssnano 重新计算 z-index
          parser: safeParser,
          // cssnano 集成了autoprefixer的功能
          // 会使用到autoprefixer进行无关前缀的清理
          // 关闭autoprefixer功能
          // 使用postcss的autoprefixer功能
          autoprefixer: false
      },
      canPrint: true
    }),

    new UglifyJsPlugin(), // 压缩js

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin()
  ],

  // 提取公共代码
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {   // 抽离第三方插件
          test: /node_modules/,   // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        }
      }
    }
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],

    alias: {
      "components": path.resolve(__dirname, "src/components"),
      "containers": path.resolve(__dirname, "src/containers"),
      "utils": path.resolve(__dirname, "src/utils"),
      "@": path.resolve(__dirname, "src")
    }
  },

  devServer:{
    contentBase: './',
    historyApiFallback: true,
    compress: true,
    port: 8888,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    proxy: {
      // 代理
    }
  }
};