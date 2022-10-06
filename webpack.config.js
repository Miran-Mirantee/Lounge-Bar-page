const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        menu: './src/menu.js',
        about: './src/about.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'imgs/[hash][ext][query]'
            }
          },
          {
            test: /\.(mp4)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'videos/[hash][ext][query]'
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[hash][ext][query]'
            }
          },
        ],
      },
};