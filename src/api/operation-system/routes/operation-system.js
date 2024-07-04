
'use strict';

/**
 * enviroment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::operation-system.operation-system');


module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/operation-system',
            handler: 'operation-system.find',
            config: {
               "policies": []
            }
        },
        {
            method: 'GET',
            path: '/operation-system/:id',
            handler: 'operation-system.findOne',
            config: {
               "policies": []
            }
        },
        {
            method: 'DELETE',
            path: '/operation-system/:id',
            handler: 'operation-system.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/operation-system/:id',
            handler: 'operation-system.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/operation-system',
            handler: 'operation-system.create',
            config: {
               "policies": []
            }
        },
    ]
}