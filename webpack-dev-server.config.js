const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack  = require( 'webpack' );

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  
  context: `${ process.cwd() }/client`,
  
  devtool: 'cheap-module-eval-source-map',
  
  entry: {
    app: './index.js',
    vendor: [
      'lodash.throttle',
      'moment',
      'node-uuid',
      'ramda',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-actions',
    ]
  },
  
  output: {
    path: `${ process.cwd() }/static`,
    filename: 'index.bundle.js',
  },
  
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style-loader',
          `css-loader?${ JSON.stringify(
              {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: `[name]__[local]___[hash:base64:5]`
              }
            ) }`,
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
    ],
  },
  
  resolve: {
    extensions: [ '', '.js' ]
  },
  
  postcss: () => [ precss, autoprefixer ],
  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin( 'vendor', 'vendor.bundle.js' ),
    new webpack.DefinePlugin( {
      'process.env': {
        NODE_ENV: JSON.stringify( NODE_ENV )
      }
    } ),
    new HtmlWebpackPlugin( {
      template: './index.html',
      favicon: './favicon.ico'
    } ),
  ],
  
  devServer: {
    contentBase: './client',
    hot: true
  }

};
