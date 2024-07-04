// 'use strict';

// /**
//  * certificate controller
//  */
// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::certificate.certificate', ({strapi}) => ({
    
//     async find(ctx) {
//         try {
//             const params = await strapi.entityService.findMany("api::certificate.certificate", {
//                 fields:["id", "appConfigId", "method","teamId", "pathFile", "signingStyle", "signingCertificate"],
//            });
//            ctx.send(params);
//         } catch (error) {
//             ctx.send({ error: 'An error occurred while updating the certificate'}, 500);
//         }
//     },


//     async customUpdate(ctx) {
//         try {
//           const { id } = ctx.params;
//           const {query} = ctx.Request.body; 

//           if (!id) {
//             return ctx.badRequest();
//           }
//           if (!query) {
//             return ctx.badRequest();
//           }

//           //customFindOne
//           const findOne = await strapi.service("api::certificate.certificate").findOne({ id });
    
//           if (!findOne) {
//             return ctx.notFound('Certificate not found.');
//           }
    
//           const updated = await strapi.service("api::certificate.certificate").update({ id }, {
//             query: query || findOne.query
//           });
    
          
//           ctx.send(updated);
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while updating the certificate' }, 500);
//         }
//       },

//     async customCreate(ctx) {
//         try {
//           const { query } = ctx.Request.body;
//           if (!query) {
//             return ctx.badRequest();
//           }
//           const create = await strapi.service("api::certificate.certificate").create({ query });
    
//           ctx.send(create);
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while creating the certificate' }, 500);
//         }
//     },

//     async customDelete(ctx) {
//         try {
//           const { id } = ctx.params; 
//           await strapi.service("api::certificate.certificate").delete({ id });
//           ctx.send({ message: 'Certificate deleted successfully.' });
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while deleting the certificate' }, 500);
//         }
//       },
// }));




