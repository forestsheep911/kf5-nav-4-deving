const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //这个是打包分析插件，可以看到每个包都包含了哪些模块.

module.exports = {
    entry: {
        'cybozu_kf5_header': path.resolve(__dirname, 'src/custom_header/index'),
        'dynamic_index': path.resolve(__dirname, 'src/dynamic_index/index'),
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
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            // uglifyOptions: {  ie8: true} 
          })],
          splitChunks: {
            chunks: 'all',
            minSize: 1,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 4,
            automaticNameDelimiter: '_',
            automaticNameMaxLength: 30,
            cacheGroups: {
                react: {
                    name: 'react_main', //提取react库代码
                    test: (module) => {
                        return /react/.test(module.context);
                    },
                    chunks: 'all',
                    priority: 10,
                },
                materialUI: {
                    name: 'material_ui_core_main',
                    test: (module) => {
                        return /[\\/]node_modules[\\/]@material-ui[\\/]/.test(module.context);
                    },
                    chunks: 'all',
                    priority: 5,
                    reuseExistingChunk: true
                },
                vendors: {
                    name: 'vendor_libarys',
                    test: /[\\/]node_modules[\\/]/, //位于node_module中的模块做提取
                    chunks: 'all',
                    priority: -10,
                    reuseExistingChunk: true
                }
            }

          }
    },
    // plugins: [
    //     new bundleAnalyzerPlugin()
    // ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    // mode: 'development'
    mode: 'production'
}