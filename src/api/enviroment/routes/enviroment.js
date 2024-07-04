// 'use strict';

// /**
//  * enviroment router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::enviroment.enviroment');





'use strict';

/**
 * enviroment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::enviroment.enviroment');


module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/enviroment',
            handler: 'enviroment.find',
            config: {
               "policies": []
            }
        },
        {
            method: 'GET',
            path: '/enviroment/:id',
            handler: 'enviroment.findOne',
            config: {
               "policies": []
            }
        },
        {
            method: 'DELETE',
            path: '/enviroment/:id',
            handler: 'enviroment.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/enviroment/:id',
            handler: 'enviroment.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/enviroment',
            handler: 'enviroment.create',
            config: {
               "policies": []
            }
        },
    ]
}