const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = merge(common, {
    mode: "development",
    devServer: {
        watchFiles: ['src/**/*']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "imgs/[name][ext]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: 'body'
        })
    ],
    optimization: {
        runtimeChunk: 'single'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. inject styles into DOM
                    "css-loader", // 2. turns css into commonjs
                    {
                        loader:  "sass-loader", // 1. turns sass into css,
                        options: {
                            // prefer 'dart-sass'
                            implementation: require('sass'),
                        }
                    }
                   
                ],

            }
        ]
    },
});
