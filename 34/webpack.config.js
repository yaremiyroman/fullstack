const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// console.log('__dirname > ', __dirname);

module.exports = (env, argv) => {
    const isProd = process.env.NODE_ENV === 'production';
    console.log('isProd >>> ', isProd);

    return {
        mode: isProd ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'WEbpack Demo',
                template: 'src/index.html',
                inject: 'body'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
            new ESLintPlugin({
                extensions: ['js', 'ts', 'tsx'],
                emitWarning: true,
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public'),
                        to: path.resolve(__dirname, 'dist'),
                        noErrorOnMissing: true,
                    },
                ],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.m?jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(sa|c|sc)ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][hash][ext][query]',
                    },
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        preset: [
                            'default',
                            {
                                discardComments: { removeAll: true },
                            },
                        ],
                    },
                }),
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            devMiddleware: {
                writeToDisk: true,
            },
            hot: true,
            port: 9000,
            open: true,
            liveReload: true,
        }
    }
};
