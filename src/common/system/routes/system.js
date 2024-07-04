'use strict';

/**
 * pilot router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::system.system');


module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/systems',
            handler: 'system.find',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'GET',
            path: '/systems/:id',
            handler: 'system.findOne',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'DELETE',
            path: '/systems/:id',
            handler: 'system.delete',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'PUT',
            path: '/systems/:id',
            handler: 'system.update',
            config: {
                "policies": [],
                "middlewares": [], 
             }
        },
        {
            method: 'POST',
            path: '/systems',
            handler: 'system.create',
            config: {
                "policies": [],
                "middlewares": [], 
             }
        },
    ]
}