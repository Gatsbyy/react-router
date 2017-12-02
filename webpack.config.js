module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  devServer: {
    hot: false,
    host: '127.0.0.1',
    contentBase: "./", // 本地服务器所加载的页面所在的目录
    // colors: false, // 终端输出结果为彩色
    historyApiFallback: true, // 不跳转
    // inline: true, // 实时刷新
    port: 9090,
    disableHostCheck: true,
  },
}
