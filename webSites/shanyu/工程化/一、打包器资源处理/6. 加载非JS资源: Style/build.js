const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

function f6() {
  webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      clean: true,
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      }]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new miniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ]
  }, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error('Webpack 编译错误:', err || stats.toJson().errors);
      return;
    }
    console.log('Webpack 编译成功:', stats.toString({ colors: true }));
  })
}

f6()