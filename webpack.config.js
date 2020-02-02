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
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/preset-env", //try just env
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  }
};
