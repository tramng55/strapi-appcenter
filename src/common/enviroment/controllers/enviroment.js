
// 'use strict';

// const enviroment = require('../../enviroment/controllers/enviroment');

// /**
//  * app controller
//  */
// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::enviroment.enviroment', ({strapi}) => ({
//     async find(ctx) {
//         try 
//         {
//           const params = await strapi.entityService.findPage("api::enviroment.enviroment", 
//             {
//               fields:["id", "name", "code","description", "display"], 
//               populate: ["apps"],
//             })
//           ctx.send(params);
//         } 
//         catch (error) 
//         {
//           ctx.send({ error: 'An error occurred while updating the enviroment'}, 500);
//         }
//     },

//     async findOne(ctx) {
//         try {
//           const { id } = ctx.params;
//           const entity = await strapi.entityService.findOne("api::enviroment.enviroment", id, {
//             fields: ["id","name", "code", "description", "display"],
//             populate: ["apps"] 
//           });
//           if (!entity) {
//             return ctx.send({ error: 'Enviroment not found' }, 404);
//           }
//           ctx.send(entity);
//         } catch (error) {
//           ctx.send({ error: 'An error occurred while fetching the enviroment' }, 500);
//         }
//     },


//     async customCreate(ctx) {
//         try {
//           const { params } = ctx.Request
//           const entity = await strapi.entityService.create("api::enviroment.enviroment", {
//             data: {
//               name: params.name,
//               description: params.description,
//               code: params.code,
//               display: params.display,
//               apps: params.app
//             },
//           });
//           ctx.send(entity);
//         } catch (error) {
//           ctx.send({ error: 'An error occurred while creating the enviroment' }, 500);
//         }
//       },

    
//       async customUpdate(ctx) {
//         try {
//           const { id } = ctx.params;
//           const { params} = ctx.Request;
    
//           // Fetch the existing entity
//           const existingEntity = await strapi.entityService.findOne("api::enviroment.enviroment", id);
//           if (!existingEntity) {
//             return ctx.send({ error: 'Enviroment not found' }, 404);
//           }
    
//           // Update the entity
//           const updatedEntity = await strapi.entityService.update("api::enviroment.enviroment", id, 
//           {
//             data: 
//             {
//               name: params.name,
//               description: params.description,
//               code: params.code,
//               display: params.display,
//             },
//           });
//           ctx.send(updatedEntity);
//         } catch (error) {
//           ctx.send({ error: 'An error occurred while updating the enviroment' }, 500);
//         }
//     },


//     async customDelete(ctx) {
//         try {
//           const { id } = ctx.params;
    
//           // Fetch the existing entity
//           const existingEntity = await strapi.entityService.findOne("api::enviroment.enviroment", id);
//           if (!existingEntity) {
//             return ctx.send({ error: 'Enviroment not found' }, 404);
//           }
    
//           // Delete the entity
//           await strapi.entityService.delete("api::enviroment.enviroment", id);
    
//           ctx.send({ message: 'Enviroment deleted successfully' });
//         } catch (error) {
//           ctx.send({ error: 'An error occurred while deleting the enviroment' }, 500);
//         }
//     },

    
// }));





