const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/app.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};