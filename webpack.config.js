const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const CssUrlRelativePlugin = require('css-url-relative-plugin')
const I18nPlugin = require('i18n-webpack-plugin')

const locale = {
    en: require('./locales/en.json'),
    pt: require('./locales/pt-br.json'),
}

const isDev = process.env.NODE_ENV === 'dev'

const config = Object.keys(locale).map(lang => ({
    name: lang,
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval' : 'source-map',
    entry: {
        app: './src/js/app.js'
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist', lang),
        publicPath: isDev ? '/' + lang : '',
        library: 'ui'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]',
                            fallback: 'file-loader',
                            outputPath: 'public/images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                webp: {
                                    quality: 75,
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                include: path.join(__dirname, '/src/'),
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src'],
                            minimize: true,
                            interpolate: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {extensions: ['.js']},
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: './src/public',
                to: 'public',
            },
        ]),
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['runtime', 'vendor', 'app'],
            favicon: path.resolve(__dirname, './src/public/images/favicon.png'),
            minify: !isDev && {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                removeComments: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'scss/[name].scss' : 'scss/[name].[contenthash].scss',
            chunkFilename: 'css/[id].css',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new PreloadWebpackPlugin({
            include: 'initial',
        }),
        new CssUrlRelativePlugin(),
        new I18nPlugin(locale[lang], {
            nested: true,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, './src')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                },
            },
        },
        minimizer: [],
    },
}))

if (!isDev) {
    const TerserPlugin = require('terser-webpack-plugin')
    const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
    config.forEach(function (lang) {
        lang.optimization.minimizer.push(
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        )
    })
}

module.exports = config
