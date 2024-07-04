// 'use strict';

// /**
//  * certificate router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::certificate.certificate');


// module.exports = {
//    routes: [
//         {
//             method: 'GET',
//             path: '/certificates',
//             handler: 'certificate.find',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'GET',
//             path: '/certificates/:id',
//             handler: 'certificate.findOne',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'DELETE',
//             path: '/certificates/:id',
//             handler: 'certificate.delete',
//             config: {
//                "policies": [],
//                "middlewares": [], 
//             }
//         },
//         {
//             method: 'PUT',
//             path: '/certificates/:id',
//             handler: 'certificate.update',
//             config: {
//                 "policies": [],
//                 "middlewares": [], 
//              }
//         },
//         {
//             method: 'POST',
//             path: '/certificates',
//             handler: 'certificate.create',
//             config: {
//                 "policies": [],
//                 "middlewares": [], 
//              }
//         },
//     ]
// }