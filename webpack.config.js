var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');


module.exports = {
    entry: [
        './src/entry.js',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
    ],

    devServer: {
        hot: true,
        inline: true
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: '/public/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    //  'react': 'React'
    //},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'jsx', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/main.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
