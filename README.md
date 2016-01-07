# angular-es6-webpack
A styleguide/generator for starting up a single page application using Angular.js ES6 and Webpack at its core.

# Walkthrough
## Build System
The package uses `webpack` for building the javascript, `less` and html files. `npm` is used to fire the command line scripts and handles installing of packages.

`webpack` handles all file-related concerns:

* Transpiling from ES6 to ES5 with `Babel`

* Loading HTML files as modules

* Transpiling `less` stylesheets and appending them to the DOM

* Bundling the app

* Loading all modules

* Starting a development server

* Refreshing the browser and rebuilding on file changes

* Generating boilerplate for the Angular app

`npm` is used to fire the cli and install packages:

* Installs all needed packages

* Allows us to run simple commands to start up the different cli scripts

## File Structure
This repository contains multiple applications which use a set of modules.

```
src
⋅⋅modules/
⋅⋅⋅⋅modulename/  
⋅⋅⋅⋅⋅⋅module.modulename.js * the main file for the module
⋅⋅⋅⋅⋅⋅directive.modulename.js * a directive
⋅⋅⋅⋅⋅⋅controller.modulename.js * a controller linked to the directive with controllers
⋅⋅⋅⋅⋅⋅filter.modulename.js * a filter to be used inside the directive
⋅⋅⋅⋅⋅⋅service.modulename.js * a service
⋅⋅⋅⋅⋅⋅service.modulename.test.js * a file containing unit tests for the same file
⋅⋅⋅⋅⋅⋅modulename.html * the template for the directive
⋅⋅⋅⋅⋅⋅modulename.less * the styles for the directive
⋅⋅applicationname/
⋅⋅⋅⋅module.applicationname.js * the main file for an application
⋅⋅application-template.html * the template (blue-imp) webpack uses to generate index.html's  
⋅⋅tests.bundle.js * entry file for the test script
```

## Testing Setup
All tests are also written in ES6. We use Webpack to take care of the logistics of getting those files to run in the various browsers, just like with our client files. This is the testing stack:

* `karma`

* `webpack` + `babel`

* `tape`

To run tests, type `npm test` or `npm run test:live` in the terminal. Read more about testing [below](#testing).

# Getting Started
## Installing
1 Make sure you have `node` and `npm` installed on your machine

2 `npm install -g karma karma-cli webpack jsdoc` install global cli dependencies

3 `npm install` to install dependencies

## Running the App
The package uses `npm` scripts to control `webpack`. After you have installed all dependencies, you may run the app. Running  `npm run dev` will set up a development environment. `webpack` will launch a development server and start watching all files with auto-reloading.

### npm Tasks
Here's a list of available tasks:

* `npm test`
	* Will start the `karma` testrunner which in turn will start testing all written unit tests. It will report in the terminal and will export a lcov.info file.

* `npm test:live`
	* Will start the `karma` testrunner and will continuously run the unit tests. `karma` will watch for file changes and will update the test info accordingly.

* `npm dev`
	* This will use `webpack` to start up a development server with auto-reloading and will generate index.html files for all configured applications.

* `npm prod`
	* This will run `eslint` to check the code for any style or syntax errors. Will start `webpack` to bundle and minify the javascript files into a single bundle. Will extract all styling and put it in a separate minified css file. And will generate the code documentation using `jsdoc`.

### Development
For the ideal development experience run both `npm run dev` and `npm run test:live` in separate terminal windows. Open up http://localhost:8080/dist/{{applicationname}} to see the page change as soon as your code changes. The terminal window with `npm run test:live` will continuously show you whether the unit tests are still running correctly.

Preferred setup with atom. @TODO add atom config

### Testing
To run the tests, run `npm test` or `npm run test:live`.

`Karma` combined with `webpack` runs all files matching `*.test.js` inside the `src` folder. This allows us to keep test files local to the component. The file `tests.bundle.js` is the bundle file for **all** our test files that Karma will run.

Be sure to define your `*.test.js` files within their corresponding component directory. You must name the unit test file like so, `[name].test.js`.
`tape` is the used testing framework but could easily be swapped with something like `jasmine`.

Tests are ideally written in the following format:

```javascript
import test from 'tape';
import config from './config';

test('Config function output type', (assert) => {
  const actual = typeof config();
  const expected = 'function';

  assert.equal(actual, expected, 'config() should return a function.');

  assert.end();
});
```
