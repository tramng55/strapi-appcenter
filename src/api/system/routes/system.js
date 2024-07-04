
'use strict';

/**
 * app router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::system.system');


module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/system',
            handler: 'system.find',
            config: {
               "policies": []
            }
        },
        {
            method: 'GET',
            path: '/system/:id',
            handler: 'system.findOne',
            config: {
               "policies": []
            }
        },
        {
            method: 'DELETE',
            path: '/system/:id',
            handler: 'system.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/system/:id',
            handler: 'system.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/system',
            handler: 'system.create',
            config: {
               "policies": []
            }
        },
    ]
}