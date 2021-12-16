const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  mode: "development",
  entry: path.join(__dirname, 'client/src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ]
  }

};