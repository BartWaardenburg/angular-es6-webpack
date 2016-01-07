// Import controller
import firstApplicationController from './controller.firstapplication.js';

// Import template
import template from './firstapplication.html';

// Import style
import './firstapplication.less';

/**
 * @namespace first-application-directive
 * @desc This contains the directive for the first application.
 * @memberOf module:first-application
 */
function xxxFirstApplication() {
	'ngInject';

	function link(scope, element, attributes, controller) {
		controller.getLyrics();
	}

	let directive = {
		restrict: 'A',
		replace: true,
		template: template,
		controller: firstApplicationController,
		controllerAs: 'vm',
		link: link
	};

	return directive;
}

export default xxxFirstApplication;
