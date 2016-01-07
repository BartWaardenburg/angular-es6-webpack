// Import external modules
import angular from 'angular';

// Import module components
import FirstModuleService from './service.firstmodule.js';

const name = 'xxx-first-module';

/**
 * First Module
 * @module first-module
 */
angular
	.module(name, [])
	.service(FirstModuleService.name, FirstModuleService);

export default name;
