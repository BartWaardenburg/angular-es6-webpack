/**
 * @namespace second-application-controller
 * @desc The secondApplicationController is the controller containing all functionality of the second application.
 * @memberOf module:second-application
 */
class secondApplicationController {

	/* @ngInject */
	constructor($scope, FirstModuleService){
		this.$scope = $scope;
		this.FirstModuleService = FirstModuleService;

		/**
		 * The lines of lyrics we want to get
		 * @type {Number}
		 * @memberOf module:second-application:second-application-controller
		 */
		this.lines = this.FirstModuleService.totalLyricLines;

		/**
		 * Some fancy lyrics
		 * @type {String}
		 * @memberOf module:second-application:second-application-controller
		 */
		this.lyrics = '';
	}

	/**
	 * Sets the amount of lines of lyrics we want to display
	 * @param {number} lines The amount of lines we want to see next
	 * @memberOf module:second-application:second-application-controller
	 */
	setLines() {
		this.FirstModuleService.totalLyricLines = this.lines;
		this.getLyrics();
	}

	/**
	 * Refreshes the lyrics
	 * @memberOf module:second-application:second-application-controller
	 */
	getLyrics() {
		this.lyrics = this.FirstModuleService.randomSongPart();
	}
}

export default secondApplicationController;
