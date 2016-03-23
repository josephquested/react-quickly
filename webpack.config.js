module.exports = {
  // configures webpack to bundle our .js source files
  entry: './src/index',
  output: {

    // bundles them into our public directory
    path: 'public',
    filename: 'browser-bundle.js',
    publicPath: '/public/'
  },

  // helps us find errors when we're debugging
  devtool: 'source-map',

  // sets up webpack to babelify our code
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
