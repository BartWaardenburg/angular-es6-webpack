/**
 * @namespace first-application-controller
 * @desc The FirstApplicationController is the controller containing all functionality of the first application.
 * @memberOf module:first-application
 */
class FirstApplicationController {

	/* @ngInject */
	constructor($scope, FirstModuleService){
		this.$scope = $scope;
		this.FirstModuleService = FirstModuleService;

		/**
		 * Variable representing the favorite place
		 * @type {string}
		 * @memberOf module:first-application.first-application-controller
		 */
		this.favoritePlace = 'Axams';

		/**
		 * The song being sang
		 * @type {String}
		 * @memberOf module:first-application.first-application-controller
		 */
		this.song = '';

		/**
		 * Some fancy lyrics
		 * @type {String}
		 * @memberOf module:first-application.first-application-controller
		 */
		this.lyrics = '';
	}

	/**
	 * Refresh the lyrics
	 * @memberOf module:first-application.first-application-controller
	 */
	getLyrics() {
		this.lyrics = this.FirstModuleService.randomSongPart();
	}

	/**
	 * Apply the filter to the list of incidents
	 * @return  {string} The song we're currently singing
	 * @memberOf module:first-application.first-application-controller
	 */
	singSong() {
		this.song = 'SWEET CAROLINE OH OH OH!';
	}
}

export default FirstApplicationController;
