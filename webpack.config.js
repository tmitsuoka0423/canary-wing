const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'electron-renderer',
  devtool: 'source-map',
  cache: true,
  mode: process.env.NODE_ENV === 'DEV' ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './icon/icon_tray.png', to: 'icon' },
        { from: './package.json', to: '' },
      ],
    }),
  ],
};
