const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
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
