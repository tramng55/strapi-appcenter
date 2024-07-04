
'use strict';

/**
 * version router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::version.version');


module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/version',
            handler: 'version.find',
            config: {
               "policies": []
            }
        },
        {
            method: 'GET',
            path: '/version/:id',
            handler: 'version.findOne',
            config: {
               "policies": []
            }
        },
        {
            method: 'DELETE',
            path: '/version/:id',
            handler: 'version.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/version/:id',
            handler: 'version.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/version',
            handler: 'version.create',
            config: {
               "policies": []
            }
        },
    ]
}