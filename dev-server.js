/**
 * Created by 94216 on 2018/3/28.
 */
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config1');
const options = {
	contentBase: './dist',
	hot: true,
	host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
	console.log('dev server listening on port 5000');
});
