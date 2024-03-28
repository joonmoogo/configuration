const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                use:[
                    path.resolve('./my-webpack-loader')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:[
                    'url-loader'
                ],
            }
        ]
    }
}

