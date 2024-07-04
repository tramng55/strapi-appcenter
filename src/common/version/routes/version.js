'use strict';

/**
 * pilot router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::version.version');


module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/versions',
            handler: 'version.find',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'GET',
            path: '/versions/:id',
            handler: 'version.findOne',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'DELETE',
            path: '/versions/:id',
            handler: 'version.delete',
            config: {
               "policies": [],
               "middlewares": [], 
            }
        },
        {
            method: 'PUT',
            path: '/versions/:id',
            handler: 'version.update',
            config: {
                "policies": [],
                "middlewares": [], 
             }
        },
        {
            method: 'POST',
            path: '/versions',
            handler: 'version.create',
            config: {
                "policies": [],
                "middlewares": [], 
             }
        },
    ]
}