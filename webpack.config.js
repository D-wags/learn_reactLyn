module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bunde.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
};