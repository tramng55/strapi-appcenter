// 'use strict';

// /**
//  * app-config router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::app-config.app-config');


// module.exports = {
//    routes: [
//         {
//             method: 'GET',
//             path: '/app-configs',
//             handler: 'app-config.find',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'GET',
//             path: '/app-configs/:id',
//             handler: 'app-config.findOne',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'DELETE',
//             path: '/app-configs/:id',
//             handler: 'app-config.delete',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'PUT',
//             path: '/app-configs/:id',
//             handler: 'app-config.update',
//             config: {
//                 "policies": [],
//                 "middlewares": [], 
//              }
//         },
//         {
//             method: 'POST',
//             path: '/app-configs',
//             handler: 'app-config.create',
//             config: {
//                 "policies": [],
//                 "middlewares": [], 
//              }
//         },
//     ]
// }