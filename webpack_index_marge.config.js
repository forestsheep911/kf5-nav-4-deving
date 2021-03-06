const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'dynamic_index_marge': path.resolve(__dirname, 'src/js/dynamic_index/index'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/index')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bowser_components)/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react',  '@babel/preset-env'],
                        },
                    },
                ] 
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            // uglifyOptions: {  ie8: true} 
          })],
    },
    mode: 'production'
}