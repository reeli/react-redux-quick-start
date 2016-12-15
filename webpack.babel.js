import path from 'path';
import qs from 'qs';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixerStylus from 'autoprefixer-stylus';
import config from 'config';
import {CheckerPlugin} from 'awesome-typescript-loader';

const APP = './src';
const DIST = './dist';
const DEV_MODE = process.env.NODE_ENV !== 'production';

const GLOBALS = {
    process: {
        env: {
            CONFIG: JSON.stringify(config),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
    },
};

const query = {
    modules: true,
    importLoaders: 1,
    sourceMap: true,
    localIdentName: DEV_MODE ? '[name]__[local]---[hash:base64:5]' : '[hash:base64:5]',
};

const extractCSS = new ExtractTextPlugin(APP, '[name]-[hash].css', {
    allChunks: true,
});

const createCssLoaderWithStyleLoader = (test, loaders) => {
    if (test) {
        return ['style-loader'].concat(loaders).join('!');
    }
    return extractCSS.extract(loaders);
};

const getStylusConfig = () => ({
    use: [
        autoprefixerStylus({
            browsers: [
                'ie_mob >= 10',
                'ff >= 30',
                'chrome >= 34',
                'safari >= 7',
                'opera >= 23',
                'ios >= 7',
                'android >= 2.3',
                'bb >= 10',
            ],
        }),
    ],
});

function getOptimizeConfig() {
    return DEV_MODE ? []
        : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ];
}

export default {
    cache: true,
    devtool: 'source-map',
    context: path.join(__dirname, APP),
    entry: {
        vendor: [
            'react',
            'react-dom',
            'classnames',
        ],
        app: './index.js',
    },
    output: {
        path: path.join(__dirname, DIST),
        filename: '[name]-[hash].js',
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /_\.styl$/,
                loader: createCssLoaderWithStyleLoader(
                    DEV_MODE,
                    [
                        `css-loader?${qs.stringify(query)}`,
                        'stylus-loader',
                    ],
                ),
            },
            {
                test: /[^_].styl$/,
                loader: createCssLoaderWithStyleLoader(
                    DEV_MODE,
                    [
                        `css-loader?${qs.stringify({sourceMap: true})}`,
                        'stylus-loader',
                    ],
                ),
            },
            {
                test: /\.i\.svg$/,
                loaders: [
                    'svg2jsx',
                    'simplify-svg/lib/loader',
                ],
            },
            {
                test: /\.(png|jpg|etf|ttf)$/,
                loader: DEV_MODE ? 'url-loader' : 'file-loader',
            },
        ],
        preLoaders: [
            {
                test: /\.js/,
                loader: 'source-map-loader',
            },
        ],
    },
    stylus: getStylusConfig(),
    plugins: [
        extractCSS,
        new HtmlWebpackPlugin({
            title: 'REACT REDUX QUICK START',
            template: './index.html',
        }),
        new webpack.DefinePlugin(GLOBALS),
        ...getOptimizeConfig(),
        new CheckerPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            config: path.join(__dirname, './modules/config/index.js'),
        },
    },
    devServer: {
        port: 9000,
        stats: {
            chunks: false,
            colors: true,
            progeress: true,
        }
    },
};
