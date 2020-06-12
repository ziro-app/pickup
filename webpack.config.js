const WebpackPwaManifest = require('webpack-pwa-manifest')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, { mode }) => {
	const config = {
		module: {
			rules: [
				{
					test: /\.js$/, 
					exclude: /node_modules/, 
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							],
							plugins: [
								'@babel/plugin-transform-runtime',
								'@babel/plugin-proposal-class-properties'
							]
						}
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'raw-loader']
				}
			]
		},
		plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ]
	}
	if (mode === 'development') {
		const { data_url, api_url, sheet_url, sheet_id, sheet_token} = require('./credentials')
		config.devtool = 'cheap-module-eval-source-map'
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env': {
					DATA_SHEET_URL: JSON.stringify(data_url),
					API_URL: JSON.stringify(api_url),
					SHEET_URL: JSON.stringify(sheet_url),
					SHEET_ID: JSON.stringify(sheet_id),
					SHEET_TOKEN: JSON.stringify(sheet_token)
				}
			})
		)
	}
	if (mode === 'production') {
		config.devtool = 'cheap-module-source-map'
		config.plugins.push(
			new WebpackPwaManifest({
				name: 'Ziro Retiradas',
				short_name: 'Retiradas',
				start_url: '/',
				background_color: '#FFF',
				theme_color: '#FFF',
				display: 'standalone',
				icons: [{ src: './logo.png', sizes: [96, 128, 192, 256, 384, 512] }]
			}),
			new LodashModuleReplacementPlugin(),
			new CompressionPlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					DATA_SHEET_URL: JSON.stringify(process.env.DATA_SHEET_URL),
					API_URL: JSON.stringify(process.env.API_URL),
					SHEET_URL: JSON.stringify(process.env.SHEET_URL),
					SHEET_ID: JSON.stringify(process.env.SHEET_ID),
					SHEET_TOKEN: JSON.stringify(process.env.SHEET_TOKEN)
				}
			})
		)
	}
	return config
}
