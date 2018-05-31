const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map',
  target: "node",
  plugins: [
    new TSLintPlugin({
      files: ['./src/**/*.ts', './**/*.spec.ts']
    })
  ]
}