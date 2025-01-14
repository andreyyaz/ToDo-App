const path = require('path');

module.exports = {
    entry: {
        main: ["webpack-dev-server/client", './src/js/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devServer: {
        host:'localhost',
        port: 8080
    }
};