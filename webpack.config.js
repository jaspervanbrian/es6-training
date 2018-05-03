var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	plugins: [
		new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
           devTool: 'source-map',
         },
       }),
	],
	output: {
		filename: './main.js',
	},
}