const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { VueLoaderPlugin } = require( 'vue-loader/lib/plugin' );

module.exports = {
  mode: 'development', // or 'production' can use command npx webpack
  devtool: 'source-map',  // enable readable source map
  entry: './src/javascript/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascript/main.js'
  },
  module: {
    rules: [  // 配列で指定する
      // {
      //   test: /\.vue$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'vue-loader',
      //     },
      //   ],
      // },
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/, // node-modules内のファイルは対象から外す
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { 'targets': '> 0.25%, not dead' }],
                // babel でトランスクリプトする対象を指定する。シェア0.25%以上でサポート終了していないもの
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false, // enable readable sass source map
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
        use: [
          // {
          // loader: 'file-loader',
          // options: {
          //     esModule: false,
          //     name: 'images/[name].[ext]',
          //   },
          // },
          {
            //  optimization images loader
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              quality: 65,
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            }
          },
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
        template: './src/templates/index.pug',
        filename: 'index.html',
      },
    ),
    new HtmlWebpackPlugin(
      {
        template: './src/templates/access.pug',
        filename: 'access.html',
      },
    ),
    new HtmlWebpackPlugin(
      {
        template: './src/templates/members/taro.pug',
        filename: 'members/taro.html',
      },
    ),
    new CleanWebpackPlugin(),
    // new VueLoaderPlugin(),
  ],
}