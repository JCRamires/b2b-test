var staticPath = __dirname + '/src'

module.exports = {
    entry: {
        applicationContainer: './ApplicationContainer.js',
        catalogoWorker: './workers/catalogoWorker.js'
    },
    context: staticPath,
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js|.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
        ]
    }
};
