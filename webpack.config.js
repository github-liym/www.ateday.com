/**
 * Created by 94216 on 2018/3/28.
 */
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HTMLWebpackPlugin({
			title: 'Code Splitting'
		})
	],
	module: {
		rules: [
			/*css加载器*/
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			// 图片加载器
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			//	字体加载器
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			//	加载数据
			{
				test: /\.(csv|tsv)$/,
				use: [
					'csv-loader'
				]
			},
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
		]
	},
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
};