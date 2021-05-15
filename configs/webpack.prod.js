const path = require('path');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;

/* *
If you are using webpack v5 or above you do not need to install this plugin.
Refer to https://webpack.js.org/plugins/terser-webpack-plugin/
 * */
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const sourcePath = path.resolve(__dirname, '../src/');
const outputPath = path.resolve(__dirname, '../dist/');

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
  plugins: [
    new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg|webp)$/i }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(sourcePath, 'images', 'content'),
          to: path.resolve(outputPath, 'images', 'content'),
          toType: 'dir',
        },
        {
          from: path.resolve(sourcePath, 'images', 'design'),
          to: path.resolve(outputPath, 'images', 'design'),
          toType: 'dir',
        },
      ],
    }),
  ],
});
