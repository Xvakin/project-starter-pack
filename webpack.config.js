var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './client/app/app.js',
    output: {
        filename: 'scripts.js'
    },

    devtool: 'sourcemap',

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')}
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

    postcss: function () {
        return [autoprefixer];
    }
};