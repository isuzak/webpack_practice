const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [  // 配列で指定する
      {
        test: /\.css/,  //test command ファイルを確認するコマンド「.css」であるかを確認
        use: [
          loader: 'css-loader'
        ],
      },
    ],
  },
}