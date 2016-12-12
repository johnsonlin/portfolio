const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const helper = require('./helper');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helper.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFileName: '[id].chunk.js'
  },

  devServer: {
    contentBase: helper.root('dist'),
    historyApiFallback: true,
    stats: 'minimal',
    inline: true
  }
});