const path = require('path');
var srcDir = path.join(__dirname, '/client/src');
var distDir = path.join(__dirname, '/client/dist')

module.exports = {
  entry: `${srcDir}/app.js`,
  output: {
    path: distDir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
