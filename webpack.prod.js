/**
 * Created by 94216 on 2018/3/28.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge( common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		new UglifyJsPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0
				},
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					priority: 10,
					enforce: true
				}
			}
		}
	}
})