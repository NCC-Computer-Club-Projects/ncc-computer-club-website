const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // Analyze bundle build structure

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map', // Extract source maps and include in final bundle

  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
});
