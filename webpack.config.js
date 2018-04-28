var path = require('path')
var utils = require('./build/utils')
var vueLoaderConfig = require('./build/vue-loader.conf')
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/components/index.js',
    output: {
        filename: './dist/vue2-editor.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:['vue-style-loader','css-loader', 'sass-loader']
                    // loaders: {
                    //      scss: ExtractTextPlugin.extract({
                    //         use: ['css-loader', 'sass-loader'],
                    //         fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                    //     })
                    // }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            }, {
                test: /\.scss$/,
                loaders:['style-loader','css-loader','sass-loader']
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     //resolve-url-loader may be chained before sass-loader if necessary 
                //     use: ['css-loader', 'sass-loader']
                // })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin({ filename: './dist/vue2-editor.css', disable: false, allChunks: true }),
        new uglify()
    ]
}