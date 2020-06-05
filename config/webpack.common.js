const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./example/index.js",
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /(.jsx|.js)$/, 
        use: ['cache-loader', 'babel-loader'],
      },
      {
        test: /.css$/,
        use: ['cache-loader', 'style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热加载插件
  ]
}