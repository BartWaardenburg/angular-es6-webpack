// Import external modules
import angular from 'angular';

// Import external angular modules
import angularAnimate from 'angular-animate';

// Import internal angular modules
import xxxFirstModule from '../modules/firstmodule/_module.firstmodule.js';

// Import module components
import secondApplicationController from './controller.secondapplication.js';
import secondApplicationDirective from './directive.secondapplication.js';

const name = 'second-application';

/**
 * First Application
 * @module second-application
 */
angular
	.module(name, [
		angularAnimate,

		xxxFirstModule
	])
	.controller(secondApplicationController.name, secondApplicationController)
	.directive(secondApplicationDirective.name, secondApplicationDirective);

angular.element(document).ready(() => {
	angular.bootstrap(document, [name]);
});
