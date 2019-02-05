let path = require('path');

let conf = {
  entry: './es6/scripts.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.js',
    publicPath: 'js/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
        test: /\.js$/,
    ]
  }
};

module.exports = conf;