/**
 * Created by HZL on 2016/5/12.
 */
var path = require('path');

module.exports = {
    entry: {
        jj:'./public/js/smartgroup/smart.js',
        test: './public/js/smartgroup/smartgroup.js',
    },
    output: {
        path: path.join(__dirname, '/public/js/smartgroup'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel?presets[]=es2015'],
                exclude: /node_modules/
            }
        ]
    }
};

