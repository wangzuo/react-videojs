module.exports = {
  entry: './example/app.js',
  output: {
    path: __dirname + '/example',
    filename: 'bundle.js',
    publicPath: "/example/",
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: "source-map"
};
