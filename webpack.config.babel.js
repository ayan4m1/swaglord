import webpack from 'webpack';
import { resolve } from 'path';
import { CLIEngine } from 'eslint';
import HtmlPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CnameWebpackPlugin from 'cname-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const dev = process.env.NODE_ENV === 'development';

const plugins = [
  new CleanPlugin(),
  new StylelintPlugin({
    configFile: '.stylelintrc',
    context: 'src',
    files: '**/*.scss',
    failOnError: true,
    quiet: false,
    syntax: 'scss'
  }),
  new MiniCSSExtractPlugin({
    filename: '[name].css'
  }),
  new HtmlPlugin({
    template: './src/index.html'
  }),
  new CnameWebpackPlugin({
    domain: 'swaglord.net'
  })
];

if (dev) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

export default {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-cheap-module-source-map' : 'cheap-module-source-map',
  entry: './src/index.js',
  devServer: {
    compress: dev,
    open: true,
    overlay: true,
    historyApiFallback: true,
    hot: dev,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              formatter: CLIEngine.getFormatter('stylish')
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          dev ? 'style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer'),
                  require('postcss-flexbugs-fixes')
                ],
                sourceMap: dev
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins,
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules', 'src'],
    alias: {
      components: resolve(__dirname, 'src/components'),
      utils: resolve(__dirname, 'src/utils')
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 12
        }
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          priority: -2,
          name: 'vendor',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/
        },
        react: {
          priority: -1,
          name: 'vendor-react',
          chunks: 'all',

          test: /[\\/]node_modules[\\/](react)/
        }
      }
    }
  }
};
