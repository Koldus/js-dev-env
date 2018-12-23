import path from 'path'
import webpack from 'webpack';

export default {
  mode : 'development',
  devtool : 'inline-source-map',
  devServer : {
    noInfo : false,
  },
  entry : [
    path.resolve(__dirname, 'src/index')
  ],
  target : 'web',
  output : {
    path : path.resolve(__dirname, 'dist'),
    publicPath : '/',
    filename : 'bundle.js'
  },
  plugins : [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify
    new webpack.optimize.UglifyJsPlugin()
  ],
  module : {
    rules : [
      {test : /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test : /\.css$/, loaders: ['style-loader', 'css-loader']}
    ]
  }
}
