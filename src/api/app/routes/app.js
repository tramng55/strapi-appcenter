// 'use strict';

// /**
//  * app router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::app.app', {
//     config: {
//         findMany: {
//             middlewares: ["api::app.app-populate"]
            
//         },
//         findOne: {
//             middlewares: ["api::app.app-populate"]
//         }
//     },
// });


'use strict';

/**
 * app router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::app.app');
   
module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/apps',
            handler: 'app.find',
            config: {
               "policies": [],
            }
        },
        {
            method: 'GET',
            path: '/apps/:id',
            handler: 'app.findOne',
            config: {
               "policies": [],
            }
        },
        {
            method: 'DELETE',
            path: '/apps/:id',
            handler: 'app.delete',
            config: {
               "policies": []
            }
        },
        {
            method: 'PUT',
            path: '/apps/:id',
            handler: 'app.update',
            config: {
               "policies": []
            }
        },
        {
            method: 'POST',
            path: '/apps',
            handler: 'app.create',
            config: {
               "policies": []
            }
        },
    ]
}