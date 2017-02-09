import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from 'config';

const APP = './src';
const DIST = './dist';
const MODULES = './modules';
const DEV_MODE = process.env.NODE_ENV !== 'production';

const GLOBALS = {
  process: {
    env: {
      CONFIG: JSON.stringify(config),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },
};

const extractCSS = new ExtractTextPlugin({
  filename: '[name]-[hash].css',
  allChunks: true,
});

const createStyleLoaderWithCssLoader = (test, cssLoader) => {
  if (test) {
    return ['style-loader'].concat(cssLoader).concat('stylus-loader');
  }

  return extractCSS.extract({
    fallback: 'style-loader',
    use: cssLoader,
  }).concat('stylus-loader');
};

export default {
  context: path.join(__dirname, APP),
  entry: {
    vendor: [
      'react',
      'react-dom',
      'classnames',
    ],
    app: './index.js',
  },
  output: {
    path: path.join(__dirname, DIST),
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /_\.styl$/,
        use: createStyleLoaderWithCssLoader(DEV_MODE, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
          },
        }),
      },
      {
        test: /[^_]\.styl$/,
        use: createStyleLoaderWithCssLoader(DEV_MODE, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: false,
          },
        }),
      },
      {
        test: /(\.png|.jpg)$/,
        use: [
          {
            loader: DEV_MODE ? 'url-loader' : 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      title: 'JTW WEB',
      template: './index.html',
    }),
    new webpack.DefinePlugin(GLOBALS),
    ...(
      DEV_MODE
        ? []
        : [
          new webpack.LoaderOptionsPlugin({
            minimize: true,
          }),
          new webpack.optimize.UglifyJsPlugin({}),
        ]
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      config: path.join(__dirname, MODULES, 'config/index.js'),
    },
  },
  devServer: {
    port: 9000,
    stats: {
      chunks: false,
      color: true,
    },
  },
};
