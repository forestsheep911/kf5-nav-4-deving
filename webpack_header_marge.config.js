const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'cybozu_kf5_header_marge': path.resolve(__dirname, 'src/js/custom_header/cybozu_kf5_header'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
                            plugins: [["@babel/plugin-transform-runtime", {"corejs": 2}]]
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
          })],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    mode: 'production'
}