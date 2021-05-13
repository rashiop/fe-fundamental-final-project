const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sourcePath = path.resolve(__dirname, '../src/');
const outputPath = path.resolve(__dirname, '../dist/');

module.exports = {
  entry: path.resolve(sourcePath, 'app.js'),
  output: {
    path: path.resolve(outputPath),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './src/styles/[name].minify.css',
    }),
    new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
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
};
