const webpack = require('webpack');
const path = require('path');

const CLIENT_SRC = path.join(__dirname, 'src/client/app');
const DEST = path.join(__dirname, 'src/client/dist');

module.exports = {
  entry: path.join(CLIENT_SRC, 'index.jsx'),
  output: {
    path: DEST,
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: CLIENT_SRC,
        loader: 'babel-loader',
        query: {
          "presets": ["es2015", "react"]
        }
      }
    ]
  }
};
