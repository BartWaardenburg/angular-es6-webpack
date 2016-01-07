// Import external modules
import angular from 'angular';

// Import external angular modules
import angularAnimate from 'angular-animate';

// Import internal angular modules
import xxxFirstModule from '../modules/firstmodule/_module.firstmodule.js';

// Import module components
import FirstApplicationController from './controller.firstapplication.js';
import FirstApplicationDirective from './directive.firstapplication.js';

const name = 'first-application';

/**
 * First Application
 * @module first-application
 */
angular
	.module(name, [
		angularAnimate,

		xxxFirstModule
	])
	.controller(FirstApplicationController.name, FirstApplicationController)
	.directive(FirstApplicationDirective.name, FirstApplicationDirective);

angular.element(document).ready(() => {
	angular.bootstrap(document, [name]);
});
