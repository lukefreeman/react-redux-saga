const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    return {
      entry: './src/index.js',
        module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              },
              {
                test: /\.scss$/,
                use: [
                  argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
                ]
              }
            ]
          },
          resolve: {
          extensions: ['*', '.js', '.jsx']
        },
        output: {
          path: __dirname + '/dist',
          publicPath: '/',
          filename: 'bundle.js'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
              filename: "[name].css",
              chunkFilename: "[id].css"
            })
        ],
        devServer: {
          contentBase: './dist',
          hot: true
        }
    }
};