const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const helper = require('./helper');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helper.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFileName: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_frames: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});