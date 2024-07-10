
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
            path: '/versions',
            handler: 'version.find',
            config: {
               "policies": []
            }
        },
        {
            method: 'GET',
            path: '/versions/:id',
            handler: 'version.findOne',
            config: {
               "policies": []
            }
        },
        {
            method: 'DELETE',
            path: '/versions/:id',
            handler: 'version.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/versions/:id',
            handler: 'version.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/versions',
            handler: 'version.create',
            config: {
               "policies": []
            }
        },
    ]
}