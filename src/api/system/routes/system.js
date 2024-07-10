
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
            path: '/systems',
            handler: 'system.find',
            config: {
               "policies": []
            }
        },
        {
            method: 'GET',
            path: '/systems/:id',
            handler: 'system.findOne',
            config: {
               "policies": []
            }
        },
        {
            method: 'DELETE',
            path: '/systems/:id',
            handler: 'system.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/systems/:id',
            handler: 'system.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/systems',
            handler: 'system.create',
            config: {
               "policies": []
            }
        },
    ]
}