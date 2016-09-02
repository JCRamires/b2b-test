var path = require('path');
var webpack = require('webpack');

var staticPath = __dirname + '/src'

module.exports = {
    entry: {
        webpackDevServer: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server'],
        vendor: ['react', 'react-dom', 'promise-worker'],
        applicationContainer: './ApplicationContainer',
        catalogoWorker: './workers/catalogoWorker.js',
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
          index: 'index.html'
        },
        stats: {colors: true}
      }
};
