'use strict';

/**
 * enviroment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enviroment.enviroment');
