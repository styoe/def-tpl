const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');


module.exports = {
	context:path.join(__dirname, 'app'),	
    entry: [
		'js/main.js'
	],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
		publicPath: 'dist/'
    },
	resolve:{
		root:path.join(__dirname, 'app')
	},
    module: {
		noParse: [/\.min\.js$/, /\.min\.css$/],
        loaders: [
			{
				test: /\.scss$/,
				loaders: ["css", "sass"]
			},
			{ 
				test: /\.css$/, 
				loader: 'style-loader!css-loader' 
			},
			{ 
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "file" 
			},
            { 
				test: /\.(woff|woff2)$/, 
				loader:"url?prefix=font/&limit=5000" 
			},
            { 
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "url?limit=10000&mimetype=application/octet-stream" 
			},
            { 
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "url?limit=10000&mimetype=image/svg+xml" 
			},
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015'],
					cacheDirectory:true
				}
			}
        ]
    },
	postcss: [ autoprefixer ],
	
};