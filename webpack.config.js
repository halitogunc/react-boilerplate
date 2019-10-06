const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const dev = process.env.NODE_ENV === 'development';
const isProfiling = process.argv.includes('--profiling');

module.exports = {
  mode: dev ? 'development' : 'production',

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    hot: true,
    port: 3000,
    compress: true,
    // accessible externally
    host: '0.0.0.0',
  },

  // Controls how source maps are generated.
  // https://webpack.js.org/configuration/devtool
  devtool: dev ? 'inline-cheap-source-map' : 'source-map',

  // Where webpack looks to start building the bundle.
  // https://webpack.js.org/configuration/entry-context/
  entry: ['react-hot-loader/patch', './src'],

  // Instructing webpack on how and where it should output your bundles
  // https://webpack.js.org/configuration/output/
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Changes how modules are resolved
  // https://webpack.js.org/configuration/resolve
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      static: path.resolve(__dirname, 'src/static/'),
    },

    extensions: ['.js', '.jsx', '.json'],
  },

  // Determines how the different types of modules within a project will be treated
  // https://webpack.js.org/configuration/module/
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx)$/,
            loader: require.resolve('babel-loader'),
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 4000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            exclude: [/\.(js|jsx)$/, /\.css$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: { name: '[hash:8].[ext]' },
          },
        ],
      },
    ],
  },

  plugins: [
    // https://github.com/jantimon/html-webpack-plugin/blob/master/README.md
    new HtmlWebpackPlugin(
      // eslint-disable-next-line prefer-object-spread
      Object.assign(
        {
          title: 'react-boilerplate',
          template: path.resolve(__dirname, './public/index.html'),
          favicon: path.resolve(__dirname, './public/favicon.ico'),
        },
        !dev
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined
      )
    ),

    // https://github.com/johnagan/clean-webpack-plugin/blob/master/README.md
    new CleanWebpackPlugin(),

    // https://webpack.js.org/plugins/environment-plugin/
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    // https://github.com/webpack-contrib/webpack-bundle-analyzer/blob/master/README.md
    isProfiling ? new BundleAnalyzerPlugin() : undefined,
  ].filter(Boolean),
};
