var staticPath = __dirname + '/components'

module.exports = {
    entry: {
        ApplicationContainer: './ApplicationContainer.js',
        ApplicationWorker: './applicationWorker.js'
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
