const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const HtmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), //源文件
  filename: 'index.html' //生成内存中首页名称
})

module.exports = {
  mode: 'production',
  plugins: [
    HtmlPlugin
  ],
  module: { //要打包的第三方模块
    rules: [{
      test: /\.js|jsx$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js','.jsx','.json'],
    alias:{
      '@':path.join(__dirname,'./src')   //这里的@符号,表示 项目根目录中的src 这一层目录
    }
  }
};