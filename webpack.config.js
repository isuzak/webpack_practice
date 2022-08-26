const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/javascript/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascript/main.js'
  },
  module: {
    rules: [  // 配列で指定する
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin(
      {
        template: './src/templates/index.html',
      },
    ),
    new CleanWebpackPlugin(),
  ],
}