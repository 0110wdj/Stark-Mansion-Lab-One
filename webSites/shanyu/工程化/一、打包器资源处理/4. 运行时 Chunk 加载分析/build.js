const webpack = require('webpack');
const path = require('path');

function f4() {
  webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: 'chunk.[name].[id].[contenthash].js',
      clean: true,
      path: path.resolve(__dirname, 'dist/deterministic')
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
    }
  }, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error('Webpack 编译错误:', err || stats.toJson().errors);
      return;
    }
    console.log('Webpack 编译成功:', stats.toString({ colors: true }));
  })
}

f4()