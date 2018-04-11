/**
 * Created by 94216 on 2018/3/28.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js',
		vendor: [
			'lodash'
		]
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/"
	},
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
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: "Output Management!"
		})
	]
}