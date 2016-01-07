'use strict';

// Load all required modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeWebpackConfig(env) {
	// The main config file which is exported to be used by webpack
	var config = {};

	// The entry points from where the different applications will be created
	// The names are also the destination locations
	var entry = {
		'dist/firstapplication/firstapplication': './src/firstapplication/_module.firstapplication',
		'dist/secondapplication/secondapplication': './src/secondapplication/_module.secondapplication'
	};

	// When we're running the test build we're not including the entire packages
	config.entry = env === 'TEST' ? {} : entry;

	// The output files specify where we're putting the build files
	var output = {
		path: './',
		publicPath: env === 'PROD' ? '/' : 'http://localhost:8080/',
		filename: '[name].js'
	};

	// When we're running the test build we're not outputting any files
	config.output = env === 'TEST' ? {} : output;

	// When we're running the test build we need to mock some node environment configs
	config.node = env === 'TEST' ? {fs: 'empty'} : {};

	// The devtool is in three different modes
	var devtool = {
		DEV: 'source-map',
		TEST: 'inline-source-map',
		PROD: 'cheap-module-source-map'
	};

	// Use the devtool setting specified
	config.devtool = devtool[env];

	// These are the default loaders we always want to run
	// The ng-annotate loader to provide angular with the right dependency injections
	// The babel loader converts ES6 to ES5 so we can use it in a browser
	// The html loader takes care off all templates
	var defaultLoaders = [{
		test: /\.js?$/,
		exclude: /node_modules/,
		loaders: ['ng-annotate', 'babel-loader']
	}, {
		test: /\.html$/,
		loader: 'html'
	}];

	// Set up the minimum loaders we will be using
	config.module = {
		preLoaders: [],
		loaders: defaultLoaders
	};

	// The CSS loader converts all our less files to css
	var cssLoaders = [{
		test: /\.less$/,
		loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
	}, {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
	}];

	// The post CSS loader uses autoprefixer to handle the latest browser versions
	var postCssLoader = [
		autoprefixer({
			browsers: ['last 2 version']
		})
	];

	// If we're running a bould other then test we want to include the css options
	if (env !== 'TEST') {
		config.module.loaders = config.module.loaders.concat(cssLoaders);
		config.postcss = postCssLoader;
	}

	var coverageLoader = {
		test: /\.js$/,
		exclude: [
			/node_modules/,
			/\.test\.js$/
		],
		loader: 'isparta-instrumenter'
	};

	if (env === 'TEST') {
		config.module.preLoaders.push(coverageLoader);
	}

	// The lint loader loads the eslint module and runs it trough our javascript to check for errors
	var lintLoader = {
		test: /\.js?$/,
		exclude: /node_modules/,
		loader: 'eslint-loader'
	};

	// When we're running a production build we want the linting to run otherwise it just causes us to lose hair
	if (env === 'PROD') {
		config.module.preLoaders.push(lintLoader);
	}

	// The ExtractTextPlugin handles the creation of a seperate css file instead of including it inline in the js
	var cssPlugin = new ExtractTextPlugin('[name].css', {
		allChunks: true
	});

	// The three html plugins handle setting up our test applications (styleguides) for the three main applications
	var firstHtmlPlugin = new HtmlWebpackPlugin({
		title: 'First Application',
		template: 'src/application-template.html',
		filename: 'dist/firstapplication/index.html',
		applicationname: 'firstapplication',
		directive: 'xxx-first-application',
		excludeChunks: ['dist/secondapplication/secondapplication']
	});
	var secondHtmlPlugin = new HtmlWebpackPlugin({
		title: 'Second Application',
		template: 'src/application-template.html',
		filename: 'dist/secondapplication/index.html',
		applicationname: 'secondapplication',
		directive: 'xxx-second-application',
		excludeChunks: ['dist/firstapplication/firstapplication']
	});

	// The hot module plugin will handle hot module replacement
	var hotModulePlugin = new webpack.HotModuleReplacementPlugin();

	var productionEnvPlugin = new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	});

	// Dedupes modules and data inside packages
	var deDupePlugin = new webpack.optimize.DedupePlugin();

	// The uglify js plugin will minify all code
	var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
		minimize: true
	});

	// The plugins we want to use in the different types of build
	var plugins = {
		DEV: [cssPlugin, firstHtmlPlugin, secondHtmlPlugin, hotModulePlugin],
		TEST: [],
		PROD: [cssPlugin, productionEnvPlugin, deDupePlugin, uglifyJsPlugin]
	};

	// Load the plugins needed for the specific build
	config.plugins = plugins[env];

	// Set up a dev server to do quick testing
	config.devServer = {
		contentBase: 'dist/',
		stats: {
			modules: false,
			cached: false,
			colors: true,
			chunk: false
		}
	};

	return config;
};
