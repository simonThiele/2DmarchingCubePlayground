const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [{ loader: 'url-loader?limit=3000!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' }]
      },
      {
        test: /\.es6$/i,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.es6']
  }
};
