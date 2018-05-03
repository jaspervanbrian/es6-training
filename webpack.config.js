var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[name].js.map',
			exclude: ['vendor.js']
		}),
	],
	output: {
		filename: './main.js',
	},
	module: {
		rules: [
			{ 
				test: /\.js$/,
				use: ["source-map-loader"],
				enforce: "pre",
			},
		],
	},
}