const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;

/* *
If you are using webpack v5 or above you do not need to install this plugin.
Refer to https://webpack.js.org/plugins/terser-webpack-plugin/
 * */
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg|webp)$/i })],
});
