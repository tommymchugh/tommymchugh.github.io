const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Build directory info
const buildDirName = 'build';
const buildPath = path.resolve(__dirname, buildDirName);

// HTML output details
// TODO(tommymchugh): Move this into a JS or JSON file
const websiteTitle = 'Tommy McHugh - HCI Researcher at Northwestern University';

module.exports = {
  entry: './src/index.ts',
  devServer: {
    contentBase: buildPath,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: websiteTitle
    })
  ]
};
