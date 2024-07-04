'use strict';

/**
 * operating-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::operating-system.operating-system');


module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/operating-systems',
            handler: 'operating-system.find',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'GET',
            path: '/operating-systems/:id',
            handler: 'operating-system.findOne',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'DELETE',
            path: '/operating-systems/:id',
            handler: 'operating-system.delete',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'PUT',
            path: '/operating-systems/:id',
            handler: 'operating-system.update',
            config: {
                "policies": [],
                "middlewares": [], 
             }
        },
        {
            method: 'POST',
            path: '/operating-systems',
            handler: 'operating-system.create',
            config: {
                "policies": [],
                "middlewares": [], 
             }
        },
    ]
}