// Import controller
import secondApplicationController from './controller.secondapplication.js';

// Import template
import template from './secondapplication.html';

// Import style
import './secondapplication.less';

/**
 * @namespace second-application-directive
 * @desc This contains the directive for the second application.
 * @memberOf module:second-application
 */
function xxxSecondApplication() {
	'ngInject';

	function link(scope, element, attributes, controller) {
		controller.getLyrics();
	}

	let directive = {
		restrict: 'A',
		replace: true,
		template: template,
		controller: secondApplicationController,
		controllerAs: 'vm',
		link: link
	};

	return directive;
}

export default xxxSecondApplication;
