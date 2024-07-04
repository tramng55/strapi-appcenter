'use strict';

/**
 * operation-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::operation-system.operation-system');
