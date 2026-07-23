const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log('__dirname > ', __dirname);

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        mode: isProd ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'WEbpack Demo',
                template: 'src/index.html',
                inject: 'body'
            })
        ],
        resolve: {
            extensions: ['.js'],
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            hot: true,
            port: 9000,
            open: true,
            liveReload: true,
        }
    }
};
