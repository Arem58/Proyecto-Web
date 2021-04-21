const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/*-------------------------------------------------*/

module.exports = {
  mode: (process.env.NODE_ENV === 'development' ? 'development' : 'production'),
  entry: [
    './src/index.jsx', // react
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // extract css to external stylesheet file
    new MiniCssExtractPlugin({
      filename: 'build/styles/style.css',
    }),
    // prepare HTML file with assets
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: false,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.scss'],
  },
  // webpack optimizations
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all', // both : consider sync + async chunks for evaluation
          name: 'vendor', // name of chunk file
          test: /node_modules/, // test regular expression
        },
      },
    },
  },
  devServer: {
    contentBase: './dist',
    port: 8088,
  },
  devtool: 'source-map',
}
