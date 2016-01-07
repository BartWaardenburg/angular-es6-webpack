// Import modules
import 'angular';
import 'angular-mocks/angular-mocks';

// This will create context for the tests we're running
// and is used as a entry point for our webpack testing config
let testsContext = require.context('.', true, /.test$/);
testsContext.keys().forEach(testsContext);
