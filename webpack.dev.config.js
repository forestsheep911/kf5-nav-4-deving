const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'cybozu_kf5_header': path.resolve(__dirname, 'src/custom_header/index.js'),
    // 'dynamic_index': path.resolve(__dirname, 'src/dynamic_index/index')
  },
  output: {
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-eval-source-map', //生成map文件 用于chrome调试
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [['@babel/plugin-transform-runtime', {'corejs': 2}]]
          },
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  mode: 'production'
}