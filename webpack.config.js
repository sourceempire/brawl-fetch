const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production')
    })
  ],
  externals: {
    react: 'react',
    reactDOM: 'react-dom'
  }
};

//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
