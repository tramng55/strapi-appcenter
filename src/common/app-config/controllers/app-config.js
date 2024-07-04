// 'use strict';

// /**
//  * app-config controller
//  */
// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::app-config.app-config', ({strapi}) => ({
    
//     async find(ctx) {
//         try {
//             const params = await strapi.entityService.findMany("api::app-config.app-config", {
//                 fields:["id", "appId", "certificateId","flavor","bundleExtention", "mainPath","gitUrl","fvmVersion", "profile", "profileExtention", "profilePath", "profileExtentionPath"],
//            });
//            ctx.send(params);
//         } catch (error) {
//             ctx.send({ error: 'An error occurred while updating the app-config'}, 500);
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
//           const findOne = await strapi.service("api::app-config.app-config").findOne({ id });
    
//           if (!findOne) {
//             return ctx.notFound('App-config not found.');
//           }
    
//           const updated = await strapi.service("api::app-config.app-config").update({ id }, {
//             query: query || findOne.query
//           });
    
          
//           ctx.send(updated);
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while updating the app-config' }, 500);
//         }
//       },

//     async customCreate(ctx) {
//         try {
//           const { query } = ctx.Request.body;
//           if (!query) {
//             return ctx.badRequest();
//           }
//           const create = await strapi.service("api::app-config.app-config").create({ query });
    
//           ctx.send(create);
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while creating the app-config' }, 500);
//         }
//     },

//     async customDelete(ctx) {
//         try {
//           const { id } = ctx.params; 
//           await strapi.service("api::app-config.app-config").delete({ id });
//           ctx.send({ message: 'App-config deleted successfully.' });
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while deleting the app-config' }, 500);
//         }
//       },
// }));




