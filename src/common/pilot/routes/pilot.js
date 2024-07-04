// 'use strict';

// /**
//  * pilot router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::pilot.pilot');


// module.exports = {
//    routes: [
//         {
//             method: 'GET',
//             path: '/pilots',
//             handler: 'pilot.find',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'GET',
//             path: '/pilots/:id',
//             handler: 'pilot.findOne',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'DELETE',
//             path: '/pilots/:id',
//             handler: 'pilot.delete',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'PUT',
//             path: '/pilots/:id',
//             handler: 'pilot.update',
//             config: {
//                 "policies": [],
//                 "middlewares": [], 
//              }
//         },
//         {
//             method: 'POST',
//             path: '/pilots',
//             handler: 'pilot.create',
//             config: {
//                 "policies": [],
//                 "middlewares": [], 
//              }
//         },
//     ]
// }