const webpack = require('webpack');
const path = require('path');

function f1() {
  webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose'
    }
  }, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error('Webpack 编译错误:', err || stats.toJson().errors);
      return;
    }
    console.log('Webpack 编译成功:', stats.toString({ colors: true }));
  })
}

f1()