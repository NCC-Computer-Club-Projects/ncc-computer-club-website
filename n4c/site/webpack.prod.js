const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Minimize CSS for production builds

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map', // Extract source maps and include in final bundle

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
