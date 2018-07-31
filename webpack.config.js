const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'electron-renderer',
  devtool: 'source-map',

  entry: {
    app: './src',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/build')
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vecdor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
};