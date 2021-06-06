// 引入path
let path = require('path');
// 引入vueloaderplugin 配置vue插件
let { VueLoaderPlugin } = require('vue-loader');
// 引入html插件 发布html文件
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css
let ExtractCssPlugin = require('mini-css-extract-plugin');
// 压缩css
let OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');

// 根目录
let root = process.cwd();
// 定义配置
module.exports = {
    // 模式
    // mode: 'development',
    // 发布的版本就可以压缩js
    mode: 'production',
    // 解决问题
    resolve: {
        // 别名
        alias: {
            'vue$': 'vue/dist/vue.js',
            '@': path.join(root, './src'),
            '@v': path.join(root, './src/views'),
            '@c': path.join(root, './src/components'),
        },
        // 拓展名
        extensions: ['.vue', '.js']
    },
    // 入口
    entry: './src/main.js',
    // 发布
    output: {
        // 发布的文件名
        filename: 'main.js',
        // filename: 'main.[hash:8].js',
        // 静态文件发布位置 demo/static
        path: path.join(root, '../demo/static'),
        // 引入静态文件相对位置
        publicPath: '../static/'
    }, 
    // 模块
    module: {
        // 加载机
        rules: [
            // vue
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // use: [
                //     {
                //         loader: 'vue-loader',
                //         options: {
                //             extractCSS: true
                //         }
                //     }
                // ]
            },
            // css
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: [
                    'style-loader',
                    // 添加拆分样式加载机
                    ExtractCssPlugin.loader,
                    'css-loader'
                ]
            },
            // less
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    // 添加拆分样式加载机
                    ExtractCssPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            // scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    // 添加拆分样式加载机
                    ExtractCssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [
        // vue loader
        new VueLoaderPlugin(),
        // 处理模板
        new HtmlWebpackPlugin({
            // 模板位置
            template: './public/index.html',
            // 发布位置, 相对于output.path确定
            filename: '../views/index.html',
            // inject 默认注入
            // 在query中添加指纹
            hash: true
        }),
        // css拆分后，发布的位置
        new ExtractCssPlugin({
            // 相对于output.path确定
            filename: 'style.css'
        }),
        // 压缩css
        new OptimizeCssAssets()
    ],
    // 在优化模块中，拆分css
    optimization: {
        // 拆分库文件
        splitChunks: {
            // 缓存文件分组
            cacheGroups: {
                // 库文件
                lib: {
                    // 命名
                    name: 'lib',
                    // 什么时候拆分
                    chunks: 'initial',
                    // 文件特征：node_modules中所有文件
                    test: /node_modules/
                }
            }
        }
    }
}