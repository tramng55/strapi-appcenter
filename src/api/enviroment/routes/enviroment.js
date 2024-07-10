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
            path: '/enviroments',
            handler: 'enviroment.find',
            config: {
               "policies": []
            }
        },
        {
            method: 'GET',
            path: '/enviroments/:id',
            handler: 'enviroment.findOne',
            config: {
               "policies": []
            }
        },
        {
            method: 'DELETE',
            path: '/enviroments/:id',
            handler: 'enviroment.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/enviroments/:id',
            handler: 'enviroment.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/enviroments',
            handler: 'enviroment.create',
            config: {
               "policies": []
            }
        },
    ]
}