var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var staticPath = __dirname + '/src'

module.exports = {
    entry: {
        webpackDevServer: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server'],
        vendor: ['react', 'react-dom', 'react-router', 'promise-worker', 'axios'],
        index: './index'
    },
    context: staticPath,
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'B2B Test',
            excludeChunks: ['webpackDevServer']
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|.jsx$/,
                loader: 'react-hot',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js|.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: {
          index: '/dist/index.html'
        },
        stats: {colors: true}
      }
};
