module.exports = function karmaConfig (config) {
	config.set({
		// Specify to use the tap framework
		frameworks: [
			'tap'
		],

		// Log reports to the console and generate a coverage report
		reporters: [
			'spec',
			'coverage'
		],

		// Use this entry point to run all tests with webpack
		files: [
			'src/tests.bundle.js'
		],

		// We want to run the webpack build and a sourcemap generator before we run te tests
		preprocessors: {
			'src/tests.bundle.js': ['webpack', 'sourcemap']
		},

		// Array of browsers we want to use
		// Possible options are Chrome and PhantomJS
		browsers: [
			'Chrome'
		],

		// When we run npm test we only do a single run
		// Running npm run test:live will switch to continous testing
		singleRun: true,

		// The covverage is logged to the dist folder
		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{type: 'lcovonly', subdir: '.'},
				{type: 'html', subdir: '.'}
			]
		},

		// For running the tests we want to use the test version of the webpack build
		webpack: require('./webpack.test'),

		// We don't need to log info for the webpack build
		webpackMiddleware: {
			noInfo: true
		},

		// Enable logging to the terminal or console
		client: {
			captureConsole: true
		}
	});
};
