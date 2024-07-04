// 'use strict';

// /**
//  * pilot controller
//  */
// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::pilot.pilot', ({strapi}) => ({
    
//     async find(ctx) {
//         try {
//             const params = await strapi.entityService.findMany("api::pilot.pilot", {
//                 fields:["id", "appId", "inside"],
//            });
//            ctx.send(params);
//         } catch (error) {
//             ctx.send({ error: 'An error occurred while updating the pilot'}, 500);
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
//           const findOne = await strapi.service("api::pilot.pilot").findOne({ id });
    
//           if (!findOne) {
//             return ctx.notFound('pilot not found.');
//           }
    
//           const updated = await strapi.service("api::pilot.pilot").update({ id }, {
//             query: query || findOne.query
//           });
    
          
//           ctx.send(updated);
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while updating the pilot' }, 500);
//         }
//       },

//     async customCreate(ctx) {
//         try {
//           const { query } = ctx.Request.body;
//           if (!query) {
//             return ctx.badRequest();
//           }
//           const create = await strapi.service("api::pilot.pilot").create({ query });
    
//           ctx.send(create);
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while creating the pilot' }, 500);
//         }
//     },

//     async customDelete(ctx) {
//         try {
//           const { id } = ctx.params; 
//           await strapi.service("api::pilot.pilot").delete({ id });
//           ctx.send({ message: 'Pilot deleted successfully.' });
//         } catch (err) {
//           ctx.send({ error: 'An error occurred while deleting the pilot' }, 500);
//         }
//       },
// }));




